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

  const { name, email, message, captcha } = req.body;

  if (!name || !email || !message || !captcha) {
    return res.status(400).json({ error: "Missing fields or CAPTCHA" });
  }

  // Verifikasi reCAPTCHA
  const captchaVerify = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`,
    { method: "POST" }
  );
  const captchaResult = await captchaVerify.json();

  if (!captchaResult.success) {
    return res.status(400).json({ error: "reCAPTCHA verification failed" });
  }

  try {
    // Kirim Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    // Kirim WhatsApp via Wablas
    await fetch(process.env.WABLAS_API!, {
      method: "POST",
      headers: {
        Authorization: process.env.WABLAS_TOKEN!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: process.env.WA_PHONE,
        message: `📬 New Contact Form\n\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Message:\n${message}`,
        secret: false,
        priority: true,
      }),
    });

    return res
      .status(200)
      .json({ message: "Message sent via email and WhatsApp" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
