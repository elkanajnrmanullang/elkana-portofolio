import Head from "next/head";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "@/components/Navbar";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden pt-20">
      {/* SEO Head Tags */}
      <Head>
        <title>Elkana Juanro Manullang | Full-Stack Engineer & UI/UX Designer</title>
        <meta
          name="description"
          content="Portofolio resmi Elkana Jnr, seorang Full-Stack Engineer dan UI/UX Designer yang berpengalaman dalam pengembangan web modern dan sistem informasi."
        />
        <meta
          name="keywords"
          content="Full-Stack Developer, Web Developer, UI UX Designer, Portofolio Elkana, React Developer, Laravel Developer, System Engineer"
        />
        <meta name="author" content="Elkana Juanro Manullang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Elkana Jnr - Full-Stack Engineer & UI/UX Designer" />
        <meta
          property="og:description"
          content="Selamat datang di portofolio Elkana Juanro Manullang. Tampilkan proyek terbaik Anda bersama pengembang full-stack profesional."
        />
        <meta property="og:image" content="/assets/images/thumbnail.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/background-home.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10">Hello</h1>
        <h2 className="text-2xl md:text-4xl font-light z-10">
          <span className="text-neutral-50 font-bold">I am </span>
          <span className="text-neutral-50">
            <Typewriter
              words={[
                "Elkana Jnr Manullang",
                "Full-Stack Engineer",
                "UI/UX Designer",
                "System Enthusiast",
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
            href="https://instagram.com/elkanajnr_manullang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/elkana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/elkanajnrmanullang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/elkanajnrmanullang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Tombol Download CV */}
        <a
          href="/assets/files/Elkana_CV.pdf"
          download
          className="mt-4 text-sm bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 transition font-semibold z-10"
          aria-label="Download CV"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
