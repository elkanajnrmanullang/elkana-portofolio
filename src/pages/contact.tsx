"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Head from "next/head";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Navbar from "@/components/Navbar";

interface FormData {
  name: string;
  email: string;
  noTelp?: string;
  judul: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    noTelp: "",
    judul: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [captcha, setCaptcha] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) {
      alert("Please verify reCAPTCHA");
      return;
    }

    const { name, email, noTelp, judul, message } = form;
    if (!name || !email || !judul || !message) {
      alert("Harap lengkapi semua field wajib.");
      return;
    }

    setStatus("loading");

    const waText = `Halo Elkana,\n\nSaya menghubungi Anda dari website portfolio.\n\nNama: ${name}\nEmail: ${email}\nNo. Telp: ${noTelp || "-"}\n\nJudul: ${judul}\n\nPesan:\n${message}`;
    const waUrl = `https://wa.me/6281382394412?text=${encodeURIComponent(waText)}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captcha }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", noTelp: "", judul: "", message: "" });
        window.open(waUrl, "_blank");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-24 pb-20 px-8">
      <Head>
        <title>Contact | Elkana Portfolio</title>
        <meta
          name="description"
          content="Send a message to Elkana Juanro Manullang via email or WhatsApp. Reach out for collaboration or inquiries."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact | Elkana Portfolio" />
        <meta
          property="og:description"
          content="Send a message to Elkana Juanro Manullang via email or WhatsApp."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/contact" />
        <meta
          property="og:image"
          content="https://your-domain.com/assets/images/contact-banner.png"
        />
      </Head>

      <div className="fixed top-0 w-full z-50 left-0">
        <Navbar />
      </div>

      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

      <div className="flex flex-col md:flex-row justify-center text-center gap-12 mb-12">
        <div>
          <div className="flex justify-center mb-2">
            <FaMapMarkerAlt className="text-2xl text-gray-700" />
          </div>
          <p className="font-semibold">Address</p>
          <p className="text-sm text-gray-500">Bogor Kota, Indonesia</p>
        </div>
        <div>
          <div className="flex justify-center mb-2">
            <FaEnvelope className="text-2xl text-gray-700" />
          </div>
          <p className="font-semibold">Email</p>
          <p className="text-sm text-gray-500">elkanamanullang7@gmail.com</p>
        </div>
        <div>
          <div className="flex justify-center mb-2">
            <FaPhone className="text-2xl text-gray-700" />
          </div>
          <p className="font-semibold">Phone</p>
          <p className="text-sm text-gray-500">+62 813 8239 4412</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto grid gap-6"
        aria-label="Contact Form"
      >
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Full Name *"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <label htmlFor="noTelp" className="sr-only">
          Phone Number
        </label>
        <input
          id="noTelp"
          type="text"
          name="noTelp"
          placeholder="Phone Number (Optional)"
          value={form.noTelp}
          onChange={handleChange}
          className="border p-3 rounded-md w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <label htmlFor="judul" className="sr-only">
          Message Title
        </label>
        <input
          id="judul"
          type="text"
          name="judul"
          placeholder="Message Title *"
          value={form.judul}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Message Content *"
          value={form.message}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        ></textarea>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token: string | null) => setCaptcha(token)}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-900 transition disabled:bg-gray-400"
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="text-green-600 font-medium text-center">
            Your message has been sent! Redirecting to WhatsApp...
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-medium text-center">
            Failed to send your message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}