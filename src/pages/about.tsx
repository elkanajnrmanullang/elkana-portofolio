import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const lastUpdated = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return {
    props: {
      lastUpdated,
    },
  };
}

export default function About({ lastUpdated }: { lastUpdated: string }) {
  return (
    <>
      <Head>
        <title>About - Elkana Juanro Manullang</title>
        <meta
          name="description"
          content="Elkana Juanro Manullang is a Fresh Graduate in Informatics Engineering from Institut Teknologi Sumatera with hands-on experience in Laravel, React.js, Python, and scalable system architecture."
        />
        <meta
          name="keywords"
          content="Elkana Juanro Manullang, Full-Stack Developer, UI/UX Designer, Laravel Developer, React Developer, Web Developer Indonesia, Celestern Times, Celestara Eterna"
        />
        <meta name="author" content="Elkana Juanro Manullang" />
      </Head>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <section className="min-h-screen pt-24 pb-10 flex flex-col justify-center items-center px-6 text-center bg-white text-gray-800">
        <h2 className="text-4xl font-bold mb-2 tracking-tight">About Me</h2>
        <div className="text-2xl mb-6 text-gray-400">✻</div>

        <p className="max-w-xl text-gray-600 mb-10 text-lg leading-relaxed">
          I&apos;m a Software Engineer specializing in Full-Stack Web
          Development, focusing on backend systems, AI automation, and
          performance-driven interfaces. As a fresh graduate in Informatics 
          Engineering from Institut Teknologi Sumatera (ITERA), I combine academic 
          expertise with 2 years of hands-on experience in building scalable, 
          production-ready applications using Laravel, React.js, and Python.
        </p>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src="/assets/images/about_profile.jpg"
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
          With a proven track record of improving operational efficiency by up to 
          90% and boosting client business performance, I have collaborated with 
          teams to deliver tailor-made web solutions. My experience includes 
          developing scalable backend APIs, AI-driven automation pipelines, 
          and responsive UI interfaces for real-world projects. I’m passionate about 
          transforming complex data challenges into elegant, maintainable systems. 
          With every project, my focus remains on clean architecture, reliability, 
          and measurable business value. If you’re looking for a developer who 
          understands both technology and digital growth, let&apos;s build something 
          impactful together.
        </p>
      </section>
      <section className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-24 text-gray-800 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-2">
          Education & Experience
        </h2>
        <div className="text-center text-gray-500 mb-16 text-sm uppercase tracking-widest">
          My Academic Journey & Career Path
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-xl font-bold border-b-2 border-black pb-2 inline-block">
              Education
            </h3>

            <div className="bg-white border-l-4 border-black p-8 shadow-sm hover:shadow-md transition rounded-r-xl">
              <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded mb-2">
                Aug 2022 - Apr 2026
              </span>
              <p className="font-bold text-lg">Institut Teknologi Sumatera</p>
              <p className="text-gray-600">
                Bachelor of Informatics Engineering (GPA: 3.38)
              </p>
              <p className="text-sm text-gray-500 mt-2 italic">
                Graduated with a strong focus on software engineering, backend
                architecture, and AI integration. Actively involved in campus
                activities as a student organization leader (HMIF ITERA) and 
                frontend developer, consistently delivering real-world digital
                solutions.
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

          <div className="space-y-8">
            <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 inline-block">
              Experience
            </h3>

            <div className="bg-white border-l-4 border-purple-600 p-8 shadow-sm hover:shadow-md transition rounded-r-xl">
              <h4 className="font-semibold text-md mb-1 text-purple-600">
                Mar 2024 - Feb 2026
              </h4>
              <p className="font-bold text-lg">Full-Stack Engineer - Celestara Eterna</p>
              <p className="text-sm text-gray-600 mt-2">
                Developed responsive web applications and scalable backend systems 
                using ReactJS, TypeScript, HTML5, CSS3, and PHP (Laravel). Improved 
                client business performance by up to 27% by translating product 
                requirements into interactive UI/UX designs and integrating 
                RESTful APIs for seamless data flow.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-8 shadow-sm hover:shadow-md transition rounded-r-xl relative">
              <h4 className="font-semibold text-md mb-1 text-blue-600">
                Jun 2025 - Aug 2025
              </h4>
              <p className="font-bold text-lg">
                Software Developer Intern - PT. Telkom Indonesia
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Developed an automated backend system using Python Pandas and Flask 
                to process over 40,000 operational data records daily. Improved 
                reporting usability by building interactive web-based dashboards 
                (HTML5/CSS3), reducing manual errors and increasing monitoring 
                efficiency across the department.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-8 shadow-sm hover:shadow-md transition rounded-r-xl">
              <h4 className="font-semibold text-md mb-1 text-blue-600">
                Mar 2025 - Jul 2025
              </h4>
              <p className="font-bold text-lg">
                Laravel Developer Intern - PT. Winnicode Garuda Teknologi
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Developed a full-stack web-based news portal and RESTful API 
                using PHP (Laravel) and React. Implemented system integration 
                for real-time content synchronization, optimized backend performance 
                for stability, and integrated Google OAuth authentication to 
                enhance the frontend user experience.
              </p>
            </div>

            <div className="bg-white border-l-4 border-gray-800 p-8 shadow-sm hover:shadow-md transition rounded-r-xl">
              <h4 className="font-semibold text-md mb-1 text-gray-800">
                Feb 2024 - Jan 2025
              </h4>
              <p className="font-bold text-lg">
                Frontend Developer - Christian Student Association ITERA
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Developed a centralized organizational profile website using React, 
                JavaScript, and Tailwind CSS. Enhanced internal user experience 
                by building intuitive interfaces, ensuring stable content delivery 
                through REST API integration, and improving cross-device consistency.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-24 px-6 sm:px-10 lg:px-24 text-gray-800 pb-12">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Expertise & Skills</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            I design and build scalable, data-driven systems that bridge backend
            performance, frontend experience, and automation intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
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
              desc: "API design, authentication, and data flow optimization using Python, PostgreSQL, and Laravel.",
            },
            {
              title: "AI & Automation",
              level: "88%",
              color: "from-violet-500 to-purple-700",
              desc: "Workflow automation and AI-powered decision systems built with Python, Pandas, and LLM integrations.",
            },
            {
              title: "Frontend Engineering",
              level: "85%",
              color: "from-sky-400 to-blue-600",
              desc: "Responsive and accessible interfaces with React, TypeScript, Tailwind CSS, and Framer Motion.",
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

        <div className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving",
              "Analytical Thinking",
              "System Thinking",
              "Teamwork & Collaboration",
              "Communication",
              "Adaptability",
              "Ownership & Responsibility"
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="bg-white text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center mt-16 pt-8 border-t border-gray-100 flex flex-col items-center justify-center">
          <p className="text-xs text-gray-500 mb-3">
            Daily Tools: VS Code, Postman, Docker, Figma, Notion, JIRA <br />
            Preferred Stack: Laravel + React.js + PostgreSQL + Tailwind + Python
          </p>
          <span className="inline-block bg-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-full font-mono mt-2">
            Last updated: {lastUpdated}
          </span>
        </div>
      </section>
    </>
  );
}