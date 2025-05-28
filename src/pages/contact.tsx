import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [captcha, setCaptcha] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) {
      alert('Please verify reCAPTCHA');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captcha }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        console.error(data.error);
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full bg-gray-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full bg-gray-100"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="border p-3 rounded-md w-full bg-gray-100"
        ></textarea>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token: string | null) => setCaptcha(token)}
        />

        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-900 transition"
        >
          Send
        </button>

        {status === 'success' && <p className="text-green-600">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-600">Failed to send message.</p>}
        {status === 'loading' && <p className="text-gray-500">Sending...</p>}
      </form>
    </div>
  );
}
