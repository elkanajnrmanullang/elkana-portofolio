"use client";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Elkana Juanro Manullang</title>
        <meta
          name="description"
          content="Elkana Juanro Manullang is an Informatics Engineering student at Institut Teknologi Sumatera with hands-on experience in Laravel, React.js, UI/UX Design, and scalable system architecture."
        />
        <meta
          name="keywords"
          content="Elkana Juanro Manullang, Full-Stack Developer, UI/UX Designer, Laravel Developer, React Developer, Web Developer Indonesia, Celestern Times, Celestara Eterna"
        />
        <meta name="author" content="Elkana Juanro Manullang" />
      </Head>
      {/* Navbar Fixed di atas */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      {/* HERO / BIO SECTION */}
      <section className="min-h-screen pt-24 pb-10 flex flex-col justify-center items-center px-6 text-center bg-white text-gray-800">
        <h2 className="text-4xl font-bold mb-2 tracking-tight">About Me</h2>
        <div className="text-2xl mb-6 text-gray-400">✻</div>

        <p className="max-w-xl text-gray-600 mb-10 text-lg leading-relaxed">
          I&apos;m a Software Engineer specializing in Full-Stack Web
          Development, focusing on backend systems, AI automation, and
          performance-driven interfaces. Currently pursuing my 8th semester in
          Informatics Engineering at Institut Teknologi Sumatera (ITERA), I
          combine academic expertise with hands-on experience in building
          scalable, production-ready applications using Laravel, React.js, and
          Next.js.
        </p>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src="/assets/images/profile.jpg"
            alt="Elkana Juanro Manullang"
            width={192}
            height={192}
            className="relative rounded-full object-cover shadow-xl mb-6 border-4 border-white"
            style={{ height: "auto" }}
          />
        </div>

        <h3 className="text-3xl font-light mt-4">
          Hello!{" "}
          <span className="font-bold">I&apos;m Elkana Juanro Manullang</span>
        </h3>
        <p className="text-lg text-gray-700 mt-2 font-medium">
          Full-Stack Developer &nbsp;·&nbsp; AI Automation &nbsp;·&nbsp;
          Scalable Systems Builder
        </p>
        <p className="max-w-3xl mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
          As the founder of Celestara Eterna, a hybrid digital tech & creative
          agency, I&apos;ve collaborated with clients and teams to deliver
          tailor-made web solutions that enhance efficiency and user experience.
          My experience includes developing backend APIs, AI-driven automation
          tools, and modern UI interfaces for real-world projects — from
          business process automation to intelligent data systems. I’m
          passionate about transforming complex challenges into elegant,
          maintainable systems. With every project, my focus remains on clean
          architecture, reliability, and measurable business value. If you’re
          looking for a developer who understands both technology and the bigger
          picture of digital growth, let&apos;s build something impactful
          together.
        </p>
      </section>
      {/* EDUCATION & EXPERIENCE */}
      <section className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-24 text-gray-800 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-2">
          Education & Experience
        </h2>
        <div className="text-center text-gray-500 mb-16 text-sm uppercase tracking-widest">
          My Academic Journey & Career Path
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold border-b-2 border-black pb-2 inline-block">
              Education
            </h3>

            <div className="bg-white border-l-4 border-black p-8 shadow-sm hover:shadow-md transition rounded-r-xl">
              <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded mb-2">
                2022 - Present
              </span>
              <p className="font-bold text-lg">Institut Teknologi Sumatera</p>
              <p className="text-gray-600">
                Bachelor of Informatics Engineering
              </p>
              <p className="text-sm text-gray-500 mt-2 italic">
                Currently pursuing a Bachelor’s degree in Informatics
                Engineering with a strong focus on software engineering, web
                technologies, and AI integration. Actively involved in campus
                activities as a laboratory assistant and student organization
                leader, contributing to academic and operational projects.
                Through coursework and extracurriculars, I’ve developed a solid
                foundation in backend architecture, frontend frameworks, and
                data-driven systems, preparing me to deliver real-world digital
                solutions in professional environments.
              </p>
            </div>

            <div className="bg-white border-l-4 border-gray-400 p-8 shadow-sm hover:shadow-md transition rounded-r-xl opacity-80 hover:opacity-100">
              <span className="inline-block bg-gray-600 text-white text-xs px-2 py-1 rounded mb-2">
                2019 - 2022
              </span>
              <p className="font-bold text-lg">SMA Budi Mulia Bogor</p>
              <p className="text-gray-600">Science Major (IPA)</p>
            </div>
          </div>

          {/* Experience Column */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 inline-block">
              Experience
            </h3>

            <div className="bg-white border-l-4 border-purple-600 p-8 shadow-sm hover:shadow-md transition rounded-r-xl">
              <h4 className="font-semibold text-md mb-1 text-purple-600">
                Mar 2024 - Present
              </h4>
              <p className="font-bold text-lg">Founder - Celestara Eterna</p>
              <p className="text-sm text-gray-600 mt-2">
                As the founder of Celestara Eterna, a hybrid digital tech and
                creative agency, I lead the development of full-stack web and
                automation solutions tailored to client needs. My work spans
                system architecture, backend development (Laravel, PostgreSQL),
                and frontend engineering (React.js, Next.js, Tailwind CSS). I
                oversee Agile-style project workflows, ensuring scalability,
                maintainability, and measurable outcomes for clients.
                Additionally, I integrate AI automation pipelines and optimize
                backend performance for businesses aiming to modernize their
                digital infrastructure.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-8 shadow-sm hover:shadow-md transition rounded-r-xl relative">
              {/* <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                LATEST
              </div> */}
              <h4 className="font-semibold text-md mb-1 text-blue-600">
                Jun 2025 - Aug 2025
              </h4>
              <p className="font-bold text-lg">
                Software Developer Intern - Telkom Indonesia
              </p>
              <p className="text-sm text-gray-600 mt-2">
                During my internship at Telkom Indonesia, I developed an
                automated reporting system using Python (Flask, Pandas) and
                PostgreSQL, replacing manual Excel-based workflows. The system
                handled over 40,000 data rows, reducing report generation time
                by more than 80% through automated data merging, validation, and
                export pipelines using OpenPyXL and XlsxWriter. I also
                implemented a real-time dashboard for tracking daily STB
                Replacement and Dismantling activities, aligned with Telkom
                Akses operational standards.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-8 shadow-sm hover:shadow-md transition rounded-r-xl">
              <h4 className="font-semibold text-md mb-1 text-blue-600">
                Mar 2025 - Aug 2025
              </h4>
              <p className="font-bold text-lg">
                Laravel Developer (Intern) - PT. Winnicode Garuda Indonesia
              </p>
              <p className="text-sm text-gray-600 mt-2">
                As a Laravel Developer Intern, I worked on enhancing and
                maintaining existing Laravel-based enterprise systems, focusing
                on API integration, authentication modules, and database
                optimization. I contributed to developing The Celestern Times, a
                full-stack news portal built with Laravel and React.js,
                featuring role-based access control (RBAC) and an integrated
                admin dashboard. Throughout the project, I actively collaborated
                using GitHub workflow (branching, pull requests, code reviews)
                and participated in Agile sprints for feature delivery and
                documentation.
              </p>
            </div>

            <div className="bg-white border-l-4 border-gray-800 p-8 shadow-sm hover:shadow-md transition rounded-r-xl">
              <h4 className="font-semibold text-md mb-1 text-gray-800">
                Sep 2024 - Jan 2025
              </h4>
              <p className="font-bold text-lg">
                Lab Assistant - Institut Teknologi Sumatera (ITERA)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                As a lab assistant in the Informatics Department, I facilitated
                practical sessions on computer fundamentals and Excel VBA
                automation for first-year students. I guided students in
                building macros, data manipulation scripts, and process
                automation, ensuring a solid understanding of applied
                programming concepts and problem-solving in a technical
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* "use client"; import {motion} from "framer-motion"; */}
      {/* SKILL OVERVIEW - Animated Version */}
      <section className="bg-gray-50 py-24 px-6 sm:px-10 lg:px-24 text-gray-800">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            I design and build scalable, data-driven systems that bridge backend
            performance, frontend experience, and automation intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Full-Stack Development",
              level: "95%",
              color: "from-blue-500 to-indigo-600",
              desc: "End-to-end web apps, scalable architecture, and performance optimization using Laravel, Next.js, and React.js.",
            },
            {
              title: "Backend Engineering",
              level: "96%",
              color: "from-gray-700 to-gray-900",
              desc: "API design, authentication, and data flow optimization using Python, PostgreSQL, and Laravel Sanctum.",
            },
            {
              title: "AI & Automation",
              level: "88%",
              color: "from-violet-500 to-purple-700",
              desc: "Workflow automation and AI-powered decision systems built with Python, Pandas, NumPy, and LLM integrations.",
            },
            {
              title: "Frontend Engineering",
              level: "85%",
              color: "from-sky-400 to-blue-600",
              desc: "Responsive and accessible interfaces with Tailwind CSS, Framer Motion, and SEO-focused design.",
            },
            {
              title: "DevOps & Tools",
              level: "85%",
              color: "from-orange-400 to-red-500",
              desc: "Deployment automation, version control, and CI/CD workflows using Git, Linux, and VPS environments.",
            },
            {
              title: "Mobile Development",
              level: "75%",
              color: "from-teal-400 to-cyan-500",
              desc: "Cross-platform app prototyping and clean UI implementation using Flutter and Dart.",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition rounded-2xl p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">{skill.title}</h3>
                <span className="text-sm font-mono text-gray-500">
                  {skill.level}
                </span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-3">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center mt-14">
          <p className="text-xs text-gray-500">
            Daily Tools: VS Code, Postman, Docker, Figma, Notion, JIRA <br />
            Preferred Stack: Laravel + React.js + PostgreSQL + Tailwind + Flask
          </p>
        </div>
      </section>
    </>
  );
}
