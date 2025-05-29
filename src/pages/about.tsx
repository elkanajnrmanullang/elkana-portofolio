import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* SEO Meta Tags */}
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
        <meta property="og:title" content="About - Elkana Juanro Manullang" />
        <meta
          property="og:description"
          content="Explore Elkana Juanro Manullang's journey as a Full-Stack Developer from ITERA with solid experience in Laravel, React, and system design through projects like Celestern Times."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/images/profile.jpg"
        />
      </Head>

      <section className="min-h-screen pt-20 pb-10 flex flex-col justify-center items-center px-6 text-center bg-white text-gray-800">
        <h2 className="text-4xl font-bold mb-2">About Me</h2>
        <div className="text-2xl mb-6">✻</div>
        <p className="max-w-xl text-gray-600 mb-10">
          I&apos;m currently a 6th-semester student majoring in Informatics Engineering at Institut Teknologi Sumatera (ITERA), passionate about web technologies and backend development.
        </p>
        <Image
          src="/assets/images/profile.jpg"
          alt="Elkana Juanro Manullang"
          width={192}
          height={192}
          className="rounded-full object-cover shadow-md mb-6"
          style={{ height: "auto" }}
        />
        <h3 className="text-3xl font-light">
          Hello! <span className="font-bold">I&apos;m Elkana Juanro Manullang</span>
        </h3>
        <p className="text-lg text-gray-700 mt-2">
          Full-Stack Developer &nbsp;·&nbsp; UI/UX Designer &nbsp;·&nbsp; System Enthusiast
        </p>
        <p className="max-w-3xl mt-6 text-gray-600 leading-relaxed">
          I have hands-on experience in building full-stack applications using Laravel for backend APIs and React.js for modern frontend interfaces. Beyond coding, I contribute as a lab assistant at my university and actively collaborate on real-world projects through Celestara Eterna — a creative and digital tech agency I co-develop. I&apos;m driven by a vision to create scalable solutions and aim to become a key figure in future tech-based enterprises.
        </p>
      </section>

      {/* EDUCATION & EXPERIENCE */}
      <section className="bg-gray-50 py-16 px-4 sm:px-10 lg:px-24 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-2">Education & Experience</h2>
        <div className="text-center text-gray-500 mb-12 text-sm">
          A quick overview of my academic background and career growth.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Education */}
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-black p-6 shadow-sm rounded-md">
              <h4 className="font-semibold text-md mb-1">2022 - Present</h4>
              <p className="font-bold">Institut Teknologi Sumatera</p>
              <p className="text-sm text-gray-600">Bachelor of Informatics Engineering</p>
            </div>
            <div className="bg-white border-l-4 border-black p-6 shadow-sm rounded-md">
              <h4 className="font-semibold text-md mb-1">2019 - 2022</h4>
              <p className="font-bold">SMA Budi Mulia Bogor</p>
              <p className="text-sm text-gray-600">Science Major (IPA)</p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-black p-6 shadow-sm rounded-md">
              <h4 className="font-semibold text-md mb-1">Feb 2025 - Present</h4>
              <p className="font-bold">Laravel Developer (Intern) - PT. Winnicode Garuda Indonesia</p>
              <p className="text-sm text-gray-600">Responsible for developing responsive, scalable Laravel-based systems with a focus on performance and security.</p>
            </div>
            <div className="bg-white border-l-4 border-black p-6 shadow-sm rounded-md">
              <h4 className="font-semibold text-md mb-1">Mar 2024 - Present</h4>
              <p className="font-bold">Founder & CEO - Celestara Eterna</p>
              <p className="text-sm text-gray-600">Lead web & app development, branding, and digital tech strategies for diverse client needs.</p>
            </div>
            <div className="bg-white border-l-4 border-black p-6 shadow-sm rounded-md">
              <h4 className="font-semibold text-md mb-1">Sep 2024 - Jan 2025</h4>
              <p className="font-bold">Lab Assistant - ITERA</p>
              <p className="text-sm text-gray-600">The IT division plays a role in facilitating and implementing hosting PMK website which has been created by the IT Department.</p>
            </div>
            <div className="bg-white border-l-4 border-black p-6 shadow-sm rounded-md">
              <h4 className="font-semibold text-md mb-1">Feb 2024 - Jan 2025</h4>
              <p className="font-bold">Staff of IT</p>
              <p className="text-sm text-gray-600">Supported the practicum of Computer & Software Introduction with VBA, Ms. Excel, and Ms. Word fundamentals.</p>
            </div>
            <div className="bg-white border-l-4 border-black p-6 shadow-sm rounded-md">
              <h4 className="font-semibold text-md mb-1">Mei 2024 - Des 2025</h4>
              <p className="font-bold">Staff of Kaderisasi (Operational)</p>
              <p className="text-sm text-gray-600">This division carries out coaching processes, maintaining and evaluating the organization&apos;s control over the values that have been implemented.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILL OVERVIEW */}
      <section className="bg-white py-16 px-4 sm:px-10 lg:px-24 text-left text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Skill Overview</h2>

        <div className="space-y-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-1">Full-Stack Web Development</h3>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-black h-full" style={{ width: "95%" }}></div>
            </div>
            <p className="text-sm text-gray-600">Laravel, React.js, REST API — Used in all major systems: The Celestern Times, Rental System, etc</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Backend Engineering</h3>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-black h-full" style={{ width: "84%" }}></div>
            </div>
            <p className="text-sm text-gray-600">Laravel, Sanctum, PostgreSQL — Designed secured APIs, authentication, and data flows.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Frontend Engineering</h3>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-black h-full" style={{ width: "90%" }}></div>
            </div>
            <p className="text-sm text-gray-600">React.js, Tailwind CSS, Responsive UI — Used in admin panel, portal news, and portfolio sites.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">UI/UX Design</h3>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-black h-full" style={{ width: "80%" }}></div>
            </div>
            <p className="text-sm text-gray-600">Wireframe, Layout System, Prototyping — Custom interface designs for all web systems.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">System Architecture Planning</h3>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-black h-full" style={{ width: "75%" }}></div>
            </div>
            <p className="text-sm text-gray-600">Modular structure, API separation, and microservice-based projects (e.g. Celestern Times).</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Version Control & Dev Tools</h3>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-black h-full" style={{ width: "85%" }}></div>
            </div>
            <p className="text-sm text-gray-600">Git, GitHub, VSCode, CLI — Used in all development workflow and project collaboration.</p>
          </div>
        </div>
      </section>
    </>
  );
}
