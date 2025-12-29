"use client";
import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaSearchPlus, FaLink, FaGithub } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  mediaType: "image" | "video";
  image: string;
  link: string;
  repoLink?: string;
  status: "Done" | "On Progress";
  privateRepo?: boolean;
}

const allProjects: Project[] = [
  // === AI & AUTOMATION ===
  {
    title: "AltaQuant - Autonomous Financial Decision Engine",
    category: "AI & Automation",
    mediaType: "image",
    image: "/assets/images/Altaquant.png",
    link: "#",
    status: "Done",
    privateRepo: true,
  },
  {
    title: "LeafGenn - Automated Retail Leaflet Generator",
    category: "AI & Automation",
    mediaType: "image",
    image: "/assets/images/Leafgenn.png",
    link: "#",
    status: "Done",
    privateRepo: true,
  },

  // === WEB DEVELOPMENT ===
  {
    title: "The Celestern Times - AI-Powered News Platform",
    category: "Web",
    mediaType: "image",
    image: "/assets/images/tct.png",
    link: "#",
    status: "Done",
    privateRepo: true,
  },
  {
    title: "STB Dismantling & Replacement Reporting System - Telkom Indonesia",
    category: "Web",
    mediaType: "image",
    image: "/assets/images/telkom.png",
    link: "#",
    status: "Done",
    privateRepo: true,
  },
  {
    title: "Next.js Full-Stack Developer Portfolio",
    category: "Web",
    mediaType: "video",
    image: "/assets/videos/web-profile.mp4",
    link: "https://elkana-portofolio.vercel.app/",
    repoLink: "https://github.com/elkanajnrmanullang/elkana-portofolio",
    status: "Done",
  },

  // === MOBILE / UI-UX ===
  {
    title: "SIMONI - Employee Performance Monitoring System",
    category: "Mobile & UI/UX",
    mediaType: "image",
    image: "/assets/images/Simoni.jpeg",
    link: "#",
    status: "Done",
    privateRepo: true,
  },
  {
    title: "Game Hand Sign - Edukasi Bahasa Isyarat",
    category: "Mobile & UI/UX",
    mediaType: "image",
    image: "/assets/images/hand-sign.png",
    link: "#",
    status: "Done",
  },
  {
    title: "SEGAR - Air Quality Monitoring & Learning Platform",
    category: "Mobile & UI/UX",
    mediaType: "image",
    image: "/assets/images/segar.png",
    link: "#",
    status: "Done",
    privateRepo: true,
  },

  // === SYSTEM / ACADEMIC ===
  {
    title: "Inventory Management System (PHP, MySQL, JS)",
    category: "System",
    mediaType: "image",
    image: "/assets/images/web-profile-olda.pnga",
    link: "#",
    status: "Done",
    privateRepo: true,
  },
  {
    title: "Marble Race Game - Python (OOP Project)",
    category: "System",
    mediaType: "image",
    image: "/assets/images/balap-kelereng.png",
    link: "https://github.com/elkanajnrmanullang/Tubes-PBO-Balap-Kelereng",
    repoLink: "https://github.com/elkanajnrmanullang/Tubes-PBO-Balap-Kelereng",
    status: "Done",
  },
  {
    title: "Web Informasi Wisata Bandung - PNB Web Design Competition",
    category: "System",
    mediaType: "video",
    image: "/assets/videos/web-bandung.mp4",
    link: "https://elkanajnrmanullang.github.io/web-wisata-bandung/",
    repoLink: "https://github.com/elkanajnrmanullang/web-wisata-bandung",
    status: "Done",
  },
];

const categories = [
  "All",
  "AI & Automation",
  "Web",
  "Mobile & UI/UX",
  "System",
];

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const filteredProjects = (
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory)
  ).sort((a, b) => {
    if (a.status === "On Progress" && b.status === "Done") return -1;
    if (a.status === "Done" && b.status === "On Progress") return 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-white text-black pb-20 relative overflow-hidden">
      <Head>
        <title>Works & Projects - Elkana Juanro Manullang</title>
        <meta
          name="description"
          content="Explore selected projects by Elkana Juanro Manullang — AI systems, full-stack web apps, and automation-driven solutions."
        />
      </Head>

      {/* Background Glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-violet-500/10 rounded-full blur-3xl opacity-70 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="text-center pt-28 max-w-7xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl font-bold mb-4 tracking-tight"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h1>
        <motion.p
          className="text-gray-500 mb-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          A showcase of AI systems, automation tools, and full-stack
          applications I’ve developed.
        </motion.p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-50 backdrop-blur-md"
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                rotateY: 2,
                rotateX: -2,
                transition: { duration: 0.4 },
              }}
            >
              {project.status === "On Progress" && (
                <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full z-20 bg-yellow-400 text-black shadow-sm">
                  In Progress
                </span>
              )}

              <div className="w-full h-[250px] overflow-hidden bg-gray-200 relative">
                {project.mediaType === "image" ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  >
                    <source src={project.image} type="video/mp4" />
                  </video>
                )}

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <button
                      onClick={() => setModalImage(project.image)}
                      className="p-3 bg-white rounded-full hover:bg-gray-200 text-black transition shadow-lg"
                      title="View Image"
                    >
                      <FaSearchPlus />
                    </button>

                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 text-white transition shadow-lg"
                        title="Visit Site"
                      >
                        <FaLink />
                      </a>
                    )}

                    <a
                      href="https://github.com/elkanajnrmanullang" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 rounded-full hover:bg-black text-white transition shadow-lg"
                      title="My GitHub"
                    >
                      <FaGithub />
                    </a>
                  </div>

                  {project.privateRepo && (
                    <span className="text-white/60 text-xs mt-2 flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                      Private Repository
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5 text-left bg-white border-t border-gray-100">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">
                  {project.category}
                </p>
                <h3
                  className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1"
                  title={project.title}
                >
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {modalImage && (
        <Modal image={modalImage} onClose={() => setModalImage(null)} />
      )}
    </div>
  );
}
