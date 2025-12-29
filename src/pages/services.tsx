"use client";
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  FaCode,
  FaBrain,
  FaServer,
  FaCogs,
  FaNetworkWired,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: (
      <FaCode className="text-4xl mb-4 text-blue-600 group-hover:text-white transition-colors" />
    ),
    title: "Full-Stack Web Development",
    desc: "End-to-end development of scalable web applications using Laravel, Next.js, and React.js. Includes RESTful API, authentication, and database integration for seamless user experiences.",
  },
  {
    icon: (
      <FaBrain className="text-4xl mb-4 text-purple-600 group-hover:text-white transition-colors" />
    ),
    title: "AI & Workflow Automation",
    desc: "Building intelligent automation systems and AI integrations using Python, Flask, and LLM APIs to streamline data processing and decision-making workflows.",
  },
  {
    icon: (
      <FaServer className="text-4xl mb-4 text-emerald-600 group-hover:text-white transition-colors" />
    ),
    title: "Backend API Development",
    desc: "Designing and implementing robust, secure backend APIs with efficient database schemas, caching, and validation logic to support web or mobile frontends.",
  },
  {
    icon: (
      <FaNetworkWired className="text-4xl mb-4 text-orange-600 group-hover:text-white transition-colors" />
    ),
    title: "System Architecture & DevOps",
    desc: "Planning and deploying reliable infrastructures with CI/CD, Docker, and VPS hosting. Focused on scalability, performance, and long-term system stability.",
  },
  {
    icon: (
      <FaCogs className="text-4xl mb-4 text-red-600 group-hover:text-white transition-colors" />
    ),
    title: "Business System Development",
    desc: "Custom web-based systems like dashboards, inventory management, and workflow automation tools tailored to fit your business needs and operations.",
  },
  {
    icon: (
      <FaRocket className="text-4xl mb-4 text-indigo-600 group-hover:text-white transition-colors" />
    ),
    title: "Deployment & Optimization",
    desc: "Deploying, optimizing, and monitoring applications for production. Includes server configuration, performance tuning, SSL, and analytics integration.",
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Services - Elkana Juanro Manullang</title>
        <meta
          name="description"
          content="Explore professional services by Elkana Juanro Manullang — Full-Stack Developer specializing in Laravel, React.js, and AI Automation systems."
        />
      </Head>

      {/* Navbar Fixed */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* SERVICES SECTION */}
      <section className="min-h-screen pt-28 pb-20 flex flex-col items-center px-6 text-center bg-gray-50 text-gray-800 overflow-hidden relative">
        {/* Gradient glow background */}
        <motion.div
          className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-full blur-3xl opacity-70 pointer-events-none"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.h2
          className="text-4xl font-bold text-center mb-4 tracking-tight relative z-10"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My Services
        </motion.h2>

        <motion.p
          className="text-gray-500 mb-12 max-w-2xl relative z-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I help businesses and teams build modern, scalable, and intelligent
          systems through full-stack development, AI integration, and
          automation-driven solutions.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm backdrop-blur-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 3,
                rotateX: -3,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
