import nodemailer from "nodemailer";

async function test() {
    console.log("Creating transporter with undefined creds");
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // STARTTLS
        auth: {
            user: undefined,
            pass: undefined,
        },
        tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
        to: "test@example.com",
        subject: "Test",
        text: "test",
    }
    try {
        await transporter.sendMail(mailOptions);
        console.log("Success");
    } catch (e) {
        console.error("Error:", e.message);
    }
}
test();
