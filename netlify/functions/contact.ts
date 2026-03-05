/**
 * Netlify Serverless Function: Contact Form Handler
 *
 * Route:   POST /api/contact  →  /.netlify/functions/contact
 * Purpose: Validates the contact form payload, sanitizes inputs, and
 *          sends a branded HTML email (+ plain-text fallback) to the
 *          admin inbox using Nodemailer + Gmail SMTP.
 *
 * Environment variables (set in Netlify dashboard):
 *   GMAIL_USER   – Gmail address used as the sending account
 *   GMAIL_PASS   – Gmail App Password (NOT the account password)
 *   ADMIN_EMAIL  – Destination inbox for submitted enquiries
 *
 * Security notes:
 *   • Only POST requests are accepted (405 on all others).
 *   • All user inputs are trimmed, length-bounded, and HTML-escaped
 *     before being embedded in the email body to prevent injection.
 *   • Internal error details are never exposed to the client.
 *   • For production spam protection, integrate hCaptcha / Cloudflare
 *     Turnstile / reCAPTCHA v3 on the frontend and verify the token
 *     server-side here before proceeding.
 *   • Rate limiting: Netlify's built-in abuse protection handles
 *     basic DDoS, but for per-IP rate limiting consider Upstash Redis
 *     or Netlify's Edge Functions with a sliding-window counter.
 */

import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import nodemailer from "nodemailer";

// ─── Constants ────────────────────────────────────────────────────────────────

const MAX_NAME_LEN = 100;
const MAX_EMAIL_LEN = 254;
const MAX_MESSAGE_LEN = 2000;

// Basic RFC-5322-inspired email regex (good enough for server-side pre-check)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * HTML-escape a string so it is safe to embed inside an HTML email body.
 */
function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Build a JSON response with the correct Content-Type header.
 */
function json(statusCode: number, body: Record<string, unknown>) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

// ─── Email templates ──────────────────────────────────────────────────────────

function buildHtmlEmail(name: string, email: string, phone: string, message: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#7c3aed,#4f46e5);padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:22px;letter-spacing:1px;">Noble World Records</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,.75);font-size:13px;">New Contact Form Submission</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="background:#fff;padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="color:#6d28d9;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.5px;">Name</span><br>
                  <span style="color:#111;font-size:15px;">${safeName}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="color:#6d28d9;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.5px;">Email</span><br>
                  <span style="color:#111;font-size:15px;">${safeEmail}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                  <span style="color:#6d28d9;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.5px;">Phone</span><br>
                  <span style="color:#111;font-size:15px;">${safePhone || "<em style='color:#999'>Not provided</em>"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <span style="color:#6d28d9;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.5px;">Message</span><br>
                  <span style="color:#333;font-size:15px;line-height:1.6;">${safeMessage}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9f7ff;padding:16px 32px;text-align:center;">
            <p style="margin:0;color:#9ca3af;font-size:11px;">
              Noble World Records · nobleworldrecords.net
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildAutoReplyHtml(name: string): string {
  const safeName = escapeHtml(name);
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr><td align="center">
      <table width="600" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);">
        <tr>
          <td style="background:linear-gradient(135deg,#7c3aed,#4f46e5);padding:28px 32px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:20px;">Thank you, ${safeName}! 🙏</h1>
          </td>
        </tr>
        <tr>
          <td style="background:#fff;padding:32px;color:#444;font-size:15px;line-height:1.7;">
            <p>We've received your message and will get back to you shortly.</p>
            <p style="margin-bottom:0;">— <strong>Noble World Records Team</strong></p>
          </td>
        </tr>
        <tr>
          <td style="background:#f9f7ff;padding:16px;text-align:center;">
            <p style="margin:0;color:#9ca3af;font-size:11px;">Noble World Records · nobleworldrecords.net</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Handler ──────────────────────────────────────────────────────────────────

const handler: Handler = async (event: HandlerEvent, _ctx: HandlerContext) => {
  // 1. Method guard
  if (event.httpMethod !== "POST") {
    return json(405, { success: false, error: "Method not allowed" });
  }

  // 2. Parse body
  let body: Record<string, unknown>;
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return json(400, { success: false, error: "Invalid JSON body" });
  }

  // 3. Extract & trim
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  // 4. Validate required fields
  const errors: string[] = [];
  if (!name) errors.push("name is required");
  if (!email) errors.push("email is required");
  if (!message) errors.push("message is required");

  if (errors.length) {
    return json(400, { success: false, error: `Validation failed: ${errors.join(", ")}` });
  }

  // 5. Email format check
  if (!EMAIL_REGEX.test(email)) {
    return json(400, { success: false, error: "Validation failed: invalid email address" });
  }

  // 6. Max-length guards
  if (name.length > MAX_NAME_LEN) return json(400, { success: false, error: `name must be ≤ ${MAX_NAME_LEN} characters` });
  if (email.length > MAX_EMAIL_LEN) return json(400, { success: false, error: `email must be ≤ ${MAX_EMAIL_LEN} characters` });
  if (message.length > MAX_MESSAGE_LEN) return json(400, { success: false, error: `message must be ≤ ${MAX_MESSAGE_LEN} characters` });

  // 7. Env vars
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!gmailUser || !gmailPass || !adminEmail) {
    console.error("[contact] Missing environment variables");
    return json(500, { success: false, error: "Server configuration error" });
  }

  // 8. Nodemailer transporter (Gmail SMTP, TLS)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: { user: gmailUser, pass: gmailPass },
  });

  try {
    // Admin notification
    await transporter.sendMail({
      from: `"NWR Contact Form" <${gmailUser}>`,
      replyTo: email,
      to: adminEmail,
      subject: `📩 New Enquiry from ${escapeHtml(name)} — Noble World Records`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
      html: buildHtmlEmail(name, email, phone, message),
    });
  } catch (err) {
    console.error("[contact] Failed to send admin email:", err);
    return json(500, { success: false, error: "Server error. Admin notification failed." });
  }

  try {
    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Noble World Records" <${gmailUser}>`,
      to: email,
      subject: "✅ We received your message — Noble World Records",
      text: `Hi ${name},\n\nThank you for reaching out! We will get back to you shortly.\n\n— Noble World Records Team`,
      html: buildAutoReplyHtml(name),
    });
  } catch (err: any) {
    console.warn("[contact] User auto-reply bounced or failed. Error:", err.message);
  }

  return json(200, { success: true, message: "Email sent successfully" });
};

export { handler };
