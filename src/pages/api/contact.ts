import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = { message?: string; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, noTelp, judul, message, captcha } = req.body;

    if (!name || !email || !judul || !message || !captcha) {
      return res
        .status(400)
        .json({ error: "Missing required fields or CAPTCHA" });
    }

    const captchaVerify = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`,
      { method: "POST" }
    );
    const captchaResult = await captchaVerify.json();

    if (!captchaResult.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Desain HTML Email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #000; padding: 20px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 24px;">New Message!</h1>
          <p style="color: #ccc; margin: 5px 0 0;">from Your Portfolio Website</p>
        </div>
        
        <div style="padding: 30px; background-color: #fff;">
          <p style="font-size: 16px; color: #333; margin-top: 0;"><strong>Hello Elkana,</strong></p>
          <p style="color: #555;">Yayy! You have a Message from your client or you got a new client. Here are the details:</p>
          
          <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #777; width: 100px;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #777;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">
                <a href="mailto:${email}" style="color: #0070f3; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #777;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${
                noTelp || "-"
              }</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #777;">Subject</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${judul}</td>
            </tr>
          </table>

          <div style="margin-top: 25px;">
            <p style="color: #777; margin-bottom: 10px;">Message:</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #000; border-radius: 4px; color: #444; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>

        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #888;">
          <p style="margin: 0;">&copy; ${new Date().getFullYear()} Elkana Portfolio System.</p>
        </div>
      </div>
    `;

    const textContent = `New Message from Portfolio\n\nName: ${name}\nEmail: ${email}\nPhone: ${
      noTelp || "-"
    }\nSubject: ${judul}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${judul}`,
      text: textContent,
      html: htmlContent,
    });

    return res
      .status(200)
      .json({ message: "Message sent via email successfully" });
  } catch {
    return res.status(500).json({ error: "Failed to send message" });
  }
}
