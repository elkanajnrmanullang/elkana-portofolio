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
      console.warn("❌ Missing required fields or captcha");
      return res.status(400).json({ error: "Missing required fields or CAPTCHA" });
    }

    // Log input awal
    console.log("📩 Incoming request body:", req.body);

    // Verifikasi reCAPTCHA
    const captchaVerify = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`,
      { method: "POST" }
    );
    const captchaResult = await captchaVerify.json();
    console.log("🔐 Captcha verification result:", captchaResult);

    if (!captchaResult.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    // Kirim email dengan Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const emailBody = `Pesan:\n${message}\n\n--\n\nDikirim oleh:\nNama  : ${name}\nEmail : ${email}\nTelp  : ${noTelp || "-"}`;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: judul,
      text: emailBody,
    });

    console.log("📧 Email sent successfully");

    // Kirim pesan ke WhatsApp lewat Wablas
    const waResponse = await fetch(process.env.WABLAS_API!, {
      method: "POST",
      headers: {
        Authorization: process.env.WABLAS_TOKEN!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: process.env.WA_PHONE,
        message: `New Contact Form\n\nNama  : ${name}\nEmail : ${email}\nTelp  : ${noTelp || "-"}\nJudul : ${judul}\n\n${message}`,
        secret: false,
        priority: true,
      }),
    });

    const waResult = await waResponse.json();
    console.log("📲 Wablas response:", waResult);

    if (!waResponse.ok) {
      console.error("❌ Failed to send WhatsApp message:", waResult);
      return res.status(500).json({ error: "Wablas API failed" });
    }

    return res.status(200).json({ message: "Message sent via email and WhatsApp" });

  } catch (error: unknown) {
  if (error instanceof Error) {
    console.error("🔥 Server Error:", error.message);
  } else {
    console.error("🔥 Unknown Server Error:", error);
  }

  return res.status(500).json({ error: "Failed to send message" });
}
}
