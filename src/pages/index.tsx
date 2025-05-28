import { Typewriter } from "react-simple-typewriter";
import Navbar from "@/components/Navbar";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/background-home.jpg')" }}
      />

      {/* Overlay black with 20% opacity */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Navbar (transparan di atas layer) */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10">Hello</h1>
        <h2 className="text-2xl md:text-4xl font-light z-10">
          <span className="text-neutral-50 font-bold">I am </span>
          <span className="text-neutral-50">
            <Typewriter
              words={[
                "Elkana Jnr",
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

        {/* Sosial Media Icon */}
        <div className="flex gap-6 mt-6 z-10 text-2xl">
          <a
            href="https://instagram.com/elkanajnr_manullang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/elkana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/elkanajnrmanullang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/elkanajnrmanullang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
