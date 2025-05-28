import React from "react";
import Head from "next/head";
import {
  FaCode,
  FaPencilRuler,
  FaProjectDiagram,
  FaCogs,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-black mb-4" />,
    title: "Full-Stack Web Development",
    desc: "End-to-end web application development using React.js, Laravel, and PostgreSQL. Includes responsive frontend design, efficient backend development, and seamless API/database integration.",
  },
  {
    icon: <FaPencilRuler className="text-4xl text-black mb-4" />,
    title: "UI/UX Design",
    desc: "Modern, user-centered design through structured user research. Involves wireframing, prototyping, and usability testing for optimal user experience.",
  },
  {
    icon: <FaProjectDiagram className="text-4xl text-black mb-4" />,
    title: "System Architecture & Planning",
    desc: "Planning and designing scalable, maintainable systems with the right tech stack, efficient database structures, and modular code architecture.",
  },
  {
    icon: <FaCogs className="text-4xl text-black mb-4" />,
    title: "Custom Business Systems",
    desc: "Custom business systems such as POS, rental management, and admin dashboards built based on client-specific workflows and needs.",
  },
  {
    icon: <FaChartLine className="text-4xl text-black mb-4" />,
    title: "Data Dashboard & Analytics",
    desc: "Interactive dashboards for real-time data visualization using Chart.js, Google Analytics, or custom APIs to support business decisions.",
  },
  {
    icon: <FaRocket className="text-4xl text-black mb-4" />,
    title: "Deployment & Optimization",
    desc: "Deploying apps to production servers with CI/CD setup, performance tuning, SSL integration, and basic security configuration like firewalls and HTTPS.",
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Services - Elkana Juanro Manullang</title>
        <meta
          name="description"
          content="Discover services by Elkana Juanro Manullang, a full-stack engineer providing modern web development, UI/UX design, and business system solutions."
        />
        <meta
          name="keywords"
          content="Full-stack developer services, UI UX designer, React.js Laravel developer, web developer Indonesia, Elkana Jnr portfolio, business system development"
        />
        <meta name="author" content="Elkana Juanro Manullang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/services" />

        {/* Open Graph Meta (Facebook/LinkedIn) */}
        <meta
          property="og:title"
          content="Web Development & UI/UX Services | Elkana Jnr"
        />
        <meta
          property="og:description"
          content="Explore full-stack web development, UI/UX design, system planning, and analytics services by Elkana Jnr, tailored to your business needs."
        />
        <meta property="og:image" content="/assets/images/og-services.jpg" />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development & UI/UX Design - Elkana Jnr"
        />
        <meta
          name="twitter:description"
          content="Professional and scalable solutions for businesses. Elkana Jnr provides full-stack engineering and design services for your digital growth."
        />
        <meta name="twitter:image" content="/assets/images/og-services.jpg" />
      </Head>

      <section className="min-h-screen pt-20 pb-20 flex flex-col justify-center items-center px-6 text-center bg-white text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 hover:scale-[1.02] group"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-center group-hover:text-black transition">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
