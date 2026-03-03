require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // STARTTLS
  family: 4,     // Force IPv4
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/api/register", async (req, res) => {
  const { name, age, gender, phone, email, city, experience, event_type } = req.body;

  if (!name || !phone || !email || !event_type) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  const eventLabel =
    event_type === "world_record"
      ? "World Record Event (₹850)"
      : "National Yoga Competition (₹1250)";

  const mailOptions = {
    from: `"Salem Yogasana Festival 2026" <${process.env.GMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `🏅 New Registration: ${name} — ${eventLabel}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #7c3aed, #4f46e5); padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Registration Received</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0;">Salem Yogasana Festival 2026</p>
        </div>
        <div style="padding: 28px; background: #fff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 40%;">👤 Full Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">🎂 Age</td><td style="padding: 8px 0;">${age}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">⚧ Gender</td><td style="padding: 8px 0;">${gender}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">📞 Phone</td><td style="padding: 8px 0;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">📧 Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">🏙️ City</td><td style="padding: 8px 0;">${city}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">🧘 Experience</td><td style="padding: 8px 0;">${experience}</td></tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">🎯 Event</td>
              <td style="padding: 8px 0;">
                <span style="background: #7c3aed; color: white; padding: 4px 12px; border-radius: 20px; font-size: 13px;">${eventLabel}</span>
              </td>
            </tr>
          </table>
        </div>
        <div style="background: #f8fafc; padding: 16px 28px; text-align: center; color: #94a3b8; font-size: 12px;">
          Vasantham Yoga Center — Salem Yogasana Festival 2026
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Registration received! Email sent." });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, message: "Registration saved but email failed." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
