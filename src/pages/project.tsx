import Layout from '@/components/Layout';

const projects = [
  {
    id: 1,
    title: "Sistem POS Kasir Grosir Sembako",
    role: "Full-Stack Engineer",
    date: "Jan 2026 - May 2026",
    background: "Wholesale grocery businesses rely on manual or generic POS systems that fail to handle FIFO batch inventory, accurate HPP calculation, and tiered pricing, causing profit leakage and inaccurate financial reporting.",
    achievements: [
      "Architected a full-stack POS system with a FIFO batch stock engine maintaining one global selling price while tracking HPP per batch.",
      "Built an HPP engine with dynamic pricing recommendations, price change audit trail, and weighted-average profit calculation.",
      "Implemented permission-based RBAC with Redis-cached guards, scalable from single-store to multi-branch.",
      "Built a multi-tier membership system with BullMQ-automated nightly tier evaluation."
    ],
    stack: ["NestJS", "Next.js 14", "PostgreSQL", "Zustand", "Prisma ORM", "BullMQ", "TypeScript", "Tailwind CSS", "shadcn/ui", "React-PDF"]
  },
  {
    id: 2,
    title: "Glorya Motor POS & Management Inventory System",
    role: "Full-Stack Engineer",
    date: "Apr 2026 - Present",
    background: "An automotive workshop struggled with highly inefficient manual operational workflows. This resulted in slow checkout queues, severe physical stock discrepancies, and a complete lack of real-time financial accountability.",
    achievements: [
      "Architected and deployed a highly responsive, multi-role Progressive Web App (PWA) POS system.",
      "Engineered ACID-compliant database transactions and enforced Row Level Security (RLS) to manage concurrent real-time inventory locks.",
      "Developed a secure Cashier Session management module featuring automated financial discrepancy calculations.",
      "Integrated ESC/POS thermal printing capabilities directly from the browser utilizing the WebUSB API."
    ],
    stack: ["Next.js 14", "TypeScript", "Supabase", "Zustand", "TanStack Query", "Tailwind CSS", "WebUSB API", "PWA"]
  },
  {
    id: 3,
    title: "LeafGenn - Automated Retail Leaflet Generator",
    role: "Full-Stack Engineer",
    date: "Oct 2025 - Dec 2025",
    background: "Retail businesses struggle with manual leaflet design, which is highly time-consuming (taking up to 12 hours per batch) and prone to human errors in pricing and layout formatting.",
    achievements: [
      "Built an automated end-to-end web system using React (TypeScript) and PHP (Laravel) to digitize manual workflows.",
      "Engineered automated data validation and dynamic visual generation algorithms."
    ],
    stack: ["React", "TypeScript", "PHP", "Laravel"]
  },
  {
    id: 4,
    title: "AltaQuant (AI Trading Decision Support System)",
    role: "AI & Backend Engineer",
    date: "Sep 2025 - Dec 2025",
    background: "Financial and cryptocurrency investment analysis is often hindered by subjective human bias, inconsistent decision-making, and the inability to efficiently process large volumes of complex quantitative market data.",
    achievements: [
      "Developed a hybrid backend architecture combining rule-based logic with Artificial Intelligence.",
      "Built a decision support system utilizing Python, NLP pipelines, and Large Language Model (LLM) integration to process market data."
    ],
    stack: ["Python", "NLP", "LLM", "AI Integration"]
  },
  {
    id: 5,
    title: "MaNIST: End-to-End Handwritten Digit Recognition System",
    role: "Backend & ML Integration Engineer",
    date: "Nov 2025 - Dec 2025",
    background: "Static machine learning models often remain isolated and lack real-world utility because they do not have accessible user interfaces for end-users to interact with the AI easily.",
    achievements: [
      "Transformed a static Machine Learning model into a production-ready web application.",
      "Built a scalable backend API using Python (Flask, NumPy) to connect the trained model seamlessly with the frontend."
    ],
    stack: ["Python", "Flask", "NumPy", "Machine Learning"]
  },
  {
    id: 6,
    title: "STB Dismantling & Replacement Reporting System",
    role: "Software Developer Internship",
    date: "June 2025 - Aug 2025",
    background: "Operational reporting heavily relied on manual Excel workflows. This approach was inefficient, error-prone, and struggled to handle the massive volume of 40,000+ daily data entries.",
    achievements: [
      "Engineered a centralized web-based reporting platform and automated ETL pipeline using Python (Flask, Pandas) and PostgreSQL.",
      "Developed a real-time monitoring dashboard with automated daily calculations and Excel export features."
    ],
    stack: ["Python", "Flask", "Pandas", "PostgreSQL", "ETL"]
  },
  {
    id: 7,
    title: "The Celestern Times (AI-Powered Modern News Platform)",
    role: "Laravel Developer Internship",
    date: "Mar 2025 - Aug 2025",
    background: "Traditional news organizations face content synchronization delays, inefficient editorial workflows, and lack scalable architectures required to support high-traffic delivery.",
    achievements: [
      "Built a highly flexible full-stack news platform using React.js, PHP (Laravel), and PostgreSQL within an Agile team.",
      "Implemented full CRUD functionalities, secure Google OAuth authentication, role-based access, and scheduled publishing."
    ],
    stack: ["React.js", "PHP", "Laravel", "PostgreSQL", "OAuth"]
  },
  {
    id: 8,
    title: "Next.js Full-Stack Developer Portfolio",
    role: "Full-Stack Developer",
    date: "May 2025 - May 2025",
    background: "In a competitive tech industry, demonstrating enterprise-level tech stack mastery requires a performant, SEO-friendly, and production-ready digital footprint.",
    achievements: [
      "Built a modern, responsive portfolio web application using Next.js.",
      "Integrated third-party APIs, including WhatsApp API for real-time communication and Captcha for enhanced security."
    ],
    stack: ["Next.js", "SSR", "SEO", "Third-party APIs"]
  },
  {
    id: 9,
    title: "Employee Performance Monitoring System - UPTD Balai Pengawasan Mutu dan Keamanan Pangan Provinsi Lampung ",
    role: "Android Frontend Developer",
    date: "Sep 2024 - Nov 2024",
    background: "A government agency relied on manual WhatsApp messages for tracking employee tasks, leading to untracked activities and inefficient monitoring across departments.",
    achievements: [
      "Translated complex administrative workflows into an intuitive mobile interface using Flutter and Firebase.",
      "Implemented real-time geo-tagging and structured daily task tracking features."
    ],
    stack: ["Flutter", "Firebase", "Geo-tagging", "Mobile App"]
  },
  {
    id: 10,
    title: "Retail Inventory Management System",
    role: "Full-Stack Developer",
    date: "Oct 2024 - Oct 2024",
    background: "A traditional retail store struggled with manual stock tracking methods, resulting in frequent data discrepancies, missing inventory, and highly inefficient day-to-day stock management operations.",
    achievements: [
      "Designed and developed a real-time web-based inventory management system using PHP, MySQL, and JavaScript.",
      "Implemented secure CRUD operations, data validation, session management, and Object-Oriented Programming (OOP) principles."
    ],
    stack: ["PHP", "MySQL", "JavaScript", "OOP"]
  },
  {
    id: 11,
    title: "PNBWDC - Web Design Competition (Top 8 National)",
    role: "Frontend Developer",
    date: "Aug 2024 - Sep 2024",
    background: "The local tourism sector needed a highly engaging, responsive, and performant digital platform to attract digital users and effectively showcase Bandung City's tourism potential on a national level.",
    achievements: [
      "Built an interactive tourism information platform from scratch using HTML, CSS, and JavaScript.",
      "Applied User-Centered Design (UCD) principles to ensure clean code and visually engaging interfaces."
    ],
    stack: ["HTML", "CSS", "JavaScript", "UI/UX"]
  }
];

const certifications = [
  { id: 1, title: "Software Engineer", issuer: "HackerRank", year: "2026" },
  { id: 2, title: "Frontend Developer (React)", issuer: "HackerRank", year: "2026" },
  { id: 3, title: "Intermediate Full Stack JavaScript Web Developer", issuer: "ITBOX", year: "2024" }
];

export default function Project() {
  return (
    <Layout title="Projects | Elkana Juanro Manullang">
      <section className="pt-32 pb-20 px-6 md:px-16 min-h-screen bg-navy-900">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-20 animate-fade-up">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-gold-500 uppercase mb-3 block">03 / Projects & Certifications</span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-cream-50 leading-tight">
              Selected <br className="hidden md:block" />
              <em className="italic text-gold-500">Works.</em>
            </h1>
            <div className="w-16 h-[1px] bg-gold-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-navy-800/50 border border-gold-500/10 p-6 flex flex-col hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 animate-fade-up group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-serif text-xl text-cream-50 font-medium leading-snug group-hover:text-gold-400 transition-colors">{project.title}</h3>
                  </div>
                  <div className="font-mono text-[0.65rem] text-gold-500 tracking-widest uppercase mb-1">{project.role}</div>
                  <div className="font-mono text-[0.6rem] text-cream-300 tracking-wider uppercase">{project.date}</div>
                </div>

                <div className="mb-6 flex-grow">
                  <p className="font-sans text-sm text-cream-200 leading-relaxed font-light mb-4">
                    {project.background}
                  </p>
                  <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                    {project.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 font-sans text-xs text-cream-100 font-light leading-relaxed">
                        <svg className="w-3 h-3 text-gold-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gold-500/10 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-navy-900 border border-navy-700 text-cream-200 text-[0.65rem] font-mono rounded-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10 border-b border-gold-500/20 pb-4 animate-fade-up">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <h2 className="font-serif text-3xl text-cream-50 font-light">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className="flex items-start gap-4 p-5 bg-navy-800/30 border border-gold-500/10 hover:border-gold-500/30 transition-colors animate-fade-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-gold-500/30 rounded-full bg-gold-500/5 text-gold-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h3 className="font-sans text-[0.95rem] text-cream-50 font-medium mb-1">{cert.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[0.65rem] text-cream-300 tracking-widest uppercase">{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-gold-500/50"></span>
                      <span className="font-mono text-[0.65rem] text-gold-500 tracking-widest">{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}