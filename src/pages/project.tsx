"use client";
import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaGithub, FaLock } from "react-icons/fa";
import Navbar from "@/components/Navbar";

interface Project {
  title: string;
  category: string;
  role: string;
  background: string;
  impact: string[];
  description: string;
  repoLink?: string;
  techStack: string[];
}

const allProjects: Project[] = [
  {
    title: "AltaQuant - AI Trading & Investment Decision Support System",
    category: "AI & Automation",
    role: "Backend & AI Developer",
    background: "High subjectivity and inefficiency in manual cryptocurrency trading analysis and investment workflows.",
    impact: [
      "Improved trading decision accuracy with automated short-term and long-term recommendations.",
      "Reduced subjective decision-making through LLM-based reasoning and quantitative analysis.",
    ],
    description: "Built a backend AI decision support system utilizing Python, NLP pipelines, and LLM integration to generate data-driven financial insights.",
    techStack: ["Python", "LLM", "NLP", "FinTech"],
  },
  {
    title: "LeafGenn - Automated Retail Leaflet Generator",
    category: "AI & Automation",
    role: "Full-Stack Developer",
    background: "Manual leaflet production was highly time-consuming and heavily prone to human errors in pricing and visual layout.",
    impact: [
      "Improved operational efficiency by over 90%, reducing production time from 12 hours to under 1 hour.",
      "Eliminated human errors through automated data validation and dynamic visual generation.",
    ],
    description: "Independently built a full-stack system using React (TypeScript) and Laravel to digitize and automate manual business workflows.",
    techStack: ["React.js", "TypeScript", "Laravel", "PHP"],
  },
  {
    title: "MaNIST: End-to-End Handwritten Digit Recognition",
    category: "AI & Automation",
    role: "Backend API Developer",
    background: "Required a robust, production-ready backend architecture to serve a static machine learning model to end-users.",
    impact: [
      "Enabled real-time AI interaction by transforming a static model into a production-ready web application.",
      "Delivered instant predictions with low-latency inference through optimized processing pipelines.",
    ],
    description: "Built a scalable backend API using Python (Flask, NumPy) to seamlessly integrate the machine learning model with user interfaces.",
    techStack: ["Python", "Flask", "Machine Learning", "NumPy", "Pandas"],
  },
  {
    title: "STB Dismantling & Replacement Reporting System",
    category: "Web",
    role: "Software Developer Intern",
    background: "Processing 40,000+ monthly operational data entries manually via Excel was inefficient and caused data inaccuracies.",
    impact: [
      "Improved reporting efficiency by automating the processing of 40,000+ operational data entries per month.",
      "Reduced manual workload and increased data accuracy by replacing Excel workflows with a web-based system.",
    ],
    description: "Built ETL pipelines and responsive real-time dashboards using Python (Flask, Pandas), PostgreSQL, and Tailwind CSS.",
    techStack: ["Python", "Flask", "Pandas", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "The Celestern Times - AI-Powered News Platform",
    category: "Web",
    role: "Full-Stack Developer",
    background: "Need for a flexible, scalable content management platform optimized for modern digital media and future AI feature integrations.",
    impact: [
      "Enabled scalable content management and delivery by building an AI-integrated news platform.",
      "Improved system flexibility through a modular architecture supporting future recommendation features.",
    ],
    description: "Built role-based access systems, Google authentication, and traffic analytics features using React, Laravel, and PostgreSQL.",
    techStack: ["React.js", "Laravel", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Next.js Full-Stack Developer Portfolio",
    category: "Web",
    role: "Full-Stack Developer",
    background: "Need to demonstrate full-stack engineering capabilities through a fast, modern, and production-ready digital presence.",
    impact: [
      "Developed a highly optimized, production-ready application using Server-Side Rendering (SSR).",
      "Enabled real-time client communication via email and WhatsApp API integrations.",
    ],
    description: "Developed a modern web portfolio showcasing technical projects and skills using Next.js, React, and serverless architecture.",
    repoLink: "https://github.com/elkanajnrmanullang/elkana-portofolio",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Game Hand Sign – Edukasi Bahasa Isyarat",
    category: "Mobile & UI/UX",
    role: "UI/UX & Mobile App Designer",
    background: "Lack of engaging and accessible sign language educational tools specifically tailored for deaf children.",
    impact: [
      "Improved accessibility to sign language education through an interactive mobile learning application.",
      "Enhanced engagement by delivering a user-centered design tailored for children with special needs.",
    ],
    description: "Designed the UI/UX for a mobile learning application aimed at supporting inclusive education and social impact.",
    techStack: ["UI/UX Design", "Figma", "User Research"],
  },
  {
    title: "SEGAR: Air Quality Monitoring Platform",
    category: "Mobile & UI/UX",
    role: "UI/UX Designer",
    background: "Need for an accessible digital platform to assess real-time local air quality and increase public awareness of air pollution.",
    impact: [
      "Enhanced public awareness of air pollution through integrated educational blog features.",
      "Delivered an intuitive interface using strict User-Centered Design (UCD) methodologies.",
    ],
    description: "Designed a mobile and web-based application providing real-time Air Quality Index (AQI) ratings based on live GPS data.",
    techStack: ["UI/UX Design", "Wireframing", "HCI"],
  },
  {
    title: "SIMONI - Employee Performance Monitoring System",
    category: "Mobile & UI/UX",
    role: "Flutter Developer",
    background: "Traditional manual employee attendance and task reporting systems lacked transparency and real-time operational visibility.",
    impact: [
      "Improved operational transparency and efficiency by digitizing task reporting systems.",
      "Enabled accurate real-time tracking of employees through integrated geo-tagging features.",
    ],
    description: "Developed a user-friendly mobile application interface using Flutter to support rapid adoption across non-technical users.",
    techStack: ["Flutter", "Dart", "Firebase", "Frontend"],
  },
  {
    title: "Inventory Management System",
    category: "System",
    role: "Full-Stack Developer",
    background: "Academic requirement to construct a comprehensive data management web application demonstrating core web programming concepts.",
    impact: [
      "Demonstrated robust data management capabilities with dynamic CRUD operations and state persistence.",
      "Successfully deployed a secure and accessible application applying OOP principles.",
    ],
    description: "Developed an inventory system from scratch utilizing PHP, MySQL, and JavaScript, featuring form handling, validation, and session management.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Web Informasi Pariwisata Kota Bandung",
    category: "Web",
    role: "Frontend Developer",
    background: "Participation in the competitive National Politeknik Negeri Bali Web Design Competition (PNBWDC).",
    impact: [
      "Achieved Top 8 out of 82 participating teams in a national-level web design competition.",
      "Delivered a highly responsive and visually engaging user interface prioritizing accessibility.",
    ],
    description: "Developed a modern, responsive tourism website focusing on a strong user experience using clean HTML, CSS, and JavaScript.",
    repoLink: "https://github.com/elkanajnrmanullang/web-wisata-bandung",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Marble Race Game (Game Balap Kelereng)",
    category: "System",
    role: "Backend & Game Developer",
    background: "Academic objective to practically implement Object-Oriented Programming (OOP) principles within a functional desktop application.",
    impact: [
      "Successfully implemented complex core game mechanics, structural logic, and physical interactions.",
      "Executed effective team-based development and version control collaboration.",
    ],
    description: "Built an interactive desktop racing game utilizing Python and OOP principles to handle backend game logic.",
    repoLink: "https://github.com/elkanajnrmanullang/Tubes-PBO-Balap-Kelereng",
    techStack: ["Python", "OOP", "Version Control"],
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

  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20 relative overflow-hidden">
      <Head>
        <title>Works & Projects - Elkana Juanro Manullang</title>
        <meta
          name="description"
          content="Explore selected projects by Elkana Juanro Manullang — AI systems, full-stack web apps, and automation-driven solutions."
        />
      </Head>

      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-violet-500/10 rounded-full blur-3xl opacity-70 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      <div className="text-center pt-28 max-w-7xl mx-auto relative z-10 px-6 md:px-12">
        <motion.h1
          className="text-4xl font-bold mb-4 tracking-tight"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h1>
        <motion.p
          className="text-gray-500 mb-12 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          A comprehensive showcase of AI systems, automation tools, and full-stack
          applications outlining roles, challenges, and measurable impacts.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative flex flex-col h-full group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start mb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight pr-4">
                    {project.title}
                  </h3>
                </div>
                {project.repoLink ? (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black transition-colors text-2xl flex-shrink-0"
                    title="View Source on GitHub"
                  >
                    <FaGithub />
                  </a>
                ) : (
                  <div
                    className="text-gray-300 text-xl flex-shrink-0 flex items-center justify-center p-1 bg-gray-50 rounded-full"
                    title="Private Repository / Proprietary System"
                  >
                    <FaLock />
                  </div>
                )}
              </div>

              <div className="mb-6 flex items-center gap-2">
                <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-md">
                  Role
                </span>
                <span className="text-gray-700 font-medium text-sm">
                  {project.role}
                </span>
              </div>

              <div className="space-y-5 flex-grow text-sm text-gray-600">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Background Problem
                  </h4>
                  <p className="leading-relaxed pl-3.5 border-l-2 border-gray-100">
                    {project.background}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Key Results & Impact
                  </h4>
                  <ul className="list-disc list-outside pl-7 space-y-1.5">
                    {project.impact.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Description
                  </h4>
                  <p className="leading-relaxed pl-3.5 border-l-2 border-gray-100">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100 flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}