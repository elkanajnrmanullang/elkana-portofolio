import Head from "next/head";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "@/components/Navbar";
// import Card from "@/components/Card";
import { PROFILE } from "@/data/portfolio"; 
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white overflow-x-hidden selection:bg-blue-500/30">
      {/* SEO Head Tags - Updated with new Info */}
      <Head>
        <title>
          {PROFILE.name} | {PROFILE.title}
        </title>
        <meta name="description" content={PROFILE.summary} />
        <meta
          name="keywords"
          content="Full-Stack Engineer, Laravel Developer, Python Developer, AI Automation, Celestara Eterna, Elkana Juanro, ITERA"
        />
        <meta name="author" content={PROFILE.name} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content={`${PROFILE.name} - ${PROFILE.title}`}
        />
        <meta
          property="og:description"
          content="Founder of Celestara Eterna & Full-Stack Software Engineer specializing in scalable backend systems and AI."
        />
        <meta property="og:image" content="/assets/images/profile.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* SECTION 1: HERO (KODE ASLI KAMU, DI-WRAP AGAR RAPI) */}
      <section className="relative w-full h-screen overflow-hidden pt-20">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/background-home.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-60 z-0" />{" "}
        {/* Sedikit digelapkan agar teks lebih terbaca */}
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10">Hello</h1>
          <h2 className="text-2xl md:text-4xl font-light z-10">
            <span className="text-neutral-50 font-bold">I am </span>
            <span className="text-neutral-50">
              <Typewriter
                words={[
                  "Elkana Jnr Manullang",
                  "Software Engineer",
                  "Backend Specialist",
                  "AI Engineer",
                  "Founder @ Celestara Eterna",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </h2>

          {/* Sosial Media Icons */}
          <div className="flex gap-6 mt-6 z-10 text-2xl">
            <a
              href={PROFILE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={PROFILE.socials.whatssapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition"
              aria-label="WhatssApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* Tombol Download CV */}
          <a
            href="/assets/files/Elkana_CV.pdf"
            download
            className="mt-8 text-sm bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition font-bold z-10 tracking-wide"
            aria-label="Download CV"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-black/20">
        <p>
          &copy; {new Date().getFullYear()} Elkana Juanro Manullang. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
