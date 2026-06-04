import Layout from '@/components/Layout';

const workExperiences = [
  {
    id: 1,
    title: "Full-Stack Engineer",
    company: "Celestara Eterna · Freelance",
    date: "Mar 2024 - April 2026 · 2 yrs+",
    location: "On-site",
    description: "Acted as a Full-Stack Engineer fully responsible for designing and building web-based systems from scratch tailored to specific client business needs. Scope included managing project lifecycles using Agile Scrum methodologies, negotiating digital requirements with clients, and integrating third-party services such as OAuth authentication and AI/LLM APIs for automated data processing.",
    achievements: [
      "Built 3+ scalable internal web tools, including integrated e-commerce platforms and the AltaQuant financial analysis system.",
      "Integrated AI/LLM technology and NLP pipelines to automate complex quantitative data processing and build decision support systems.",
      "Developed modular backend architectures using PHP (Laravel) and PostgreSQL, alongside responsive user interfaces using React/Next.js and TypeScript."
    ],
    impact: [
      "Boosted client operational efficiency by up to 90% by digitalizing internal workflows into tailored web-based systems.",
      "Increased client revenue by up to 27% by digitalizing manual sales workflows into integrated e-commerce applications.",
      "Accelerated financial analysis efficiency by 80% through the development and integration of an AI-powered system."
    ]
  },
  {
    id: 2,
    title: "Software Developer",
    company: "Telkom Indonesia · Internship",
    date: "Jun 2025 - Aug 2025 · 3 mos",
    location: "Bogor, West Java, Indonesia · On-site",
    description: "Worked as a Software Developer Intern at Telkom Witel Bogor, primarily focused on automating operational reporting workflows previously handled manually via Excel. Responsible for building ETL pipelines, backend systems, and real-time monitoring dashboards to ensure data transparency and integrity for stakeholders.",
    achievements: [
      "Developed the STB Dismantling & Replacement Reporting System using Python (Flask, Pandas) and PostgreSQL.",
      "Engineered automated daily calculation features and Excel data export functions to expedite the reporting process.",
      "Built real-time monitoring dashboards using Tailwind CSS and Alpine.js for seamless operational data visualization."
    ],
    impact: [
      "Automated the processing of 40,000+ daily operational data records, ensuring 100% data accuracy.",
      "Reduced manual reporting time by over 75% through the migration of Excel-based workflows to a fully automated web system.",
      "Accelerated operational decision-making by 50% by delivering real-time data visibility to stakeholders."
    ]
  },
  {
    id: 3,
    title: "Laravel Developer",
    company: "PT.Winnicode Garuda Indonesia · Internship",
    date: "Mar 2025 - Aug 2025 · 6 mos",
    location: "Bogor, West Java, Indonesia · Remote",
    description: "Participated in the MBKM Independent Internship program as a Laravel Developer, responsible for developing the backend of a modern news portal and providing RESTful APIs. Worked within a cross-functional Agile team to ensure real-time content synchronization between the admin panel and public platform while maintaining system security through modern authentication standards.",
    achievements: [
      "Developed \"The Celestern Times\" news platform featuring full CRUD operations, Google OAuth integration, and scheduled publishing.",
      "Implemented secure authentication using Laravel Sanctum and optimized database queries for high performance.",
      "Collaborated on a modular architecture using React.js and TypeScript to support long-term system maintainability."
    ],
    impact: [
      "Reduced content publishing delays by 40% by programming a real-time synchronization backend and RESTful APIs.",
      "Improved server response time by 30% and prevented data inconsistencies through database optimization.",
      "Delivered 5+ core system features on time within an Agile environment, ensuring production-ready code via Git CI/CD."
    ]
  },
  {
    id: 4,
    title: "Computer and Software Introduction - Lab Assistant",
    company: "Institut Teknologi Sumatera · Full-time",
    date: "Aug 2024 - Jan 2025 · 6 mos",
    location: "South Lampung Regency, Lampung, Indonesia · On-site",
    description: "Served as a Lab Assistant for the Computer and Software Introduction course, providing hands-on technical guidance and troubleshooting for students. Focused on facilitating student understanding of data processing and basic programming logic.",
    achievements: [
      "Provided technical mentoring and lab guidance on data processing using Microsoft Excel for over 100 students.",
      "Taught basic automation techniques using VBA to streamline student data processing workflows."
    ],
    impact: [
      "Improved the technical understanding and learning effectiveness of over 100 students in data processing and basic automation."
    ]
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "Persekutuan Mahasiswa Kristen Institut Teknologi Sumatera (PMK ITERA) · Full-time",
    date: "Jan 2024 - Jan 2025 · 1 yr",
    location: "Lampung, Indonesia · On-site",
    description: "Acted as the organization's Frontend Developer to build and maintain its digital profile and information platform. Focused on creating responsive and intuitive user interfaces to centralize information access for all organizational members.",
    achievements: [
      "Developed responsive frontend features using React, JavaScript, and Tailwind CSS.",
      "Integrated RESTful APIs to ensure stable and structured content delivery and continuous information updates."
    ],
    impact: [
      "Improved website usability and accessibility across multiple devices, resulting in a more consistent user experience.",
      "Enhanced internal user experience by centralizing content access and streamlining communication channels."
    ]
  }
];

const orgExperiences = [
  {
    id: 1,
    title: "Field Coordinator Lead",
    company: "Executive Board of Informatics Class of 2022",
    date: "May 2023 – Feb 2026",
    description: "Coordinated on-site execution for multiple departmental events, managing field teams, task distributions, and real-time problem-solving under pressure.",
    achievements: [
      "Strategically distributed tasks across operational areas and ensured equipment and technical readiness.",
      "Streamlined cross-divisional communication between the core committee and operational staff."
    ],
    impact: [
      "Maintained smooth and integrated execution of events, effectively preventing on-site technical delays.",
      "Fostered highly efficient operational workflows and team synergy, resulting in fast, data-informed resolutions to real-time issues."
    ]
  },
  {
    id: 2,
    title: "Head of Operational — Leadership Development Program",
    company: "Informatics Engineering Student Association",
    date: "May 2024 – Jan 2025",
    description: "Led the planning and execution of operational activities for a large-scale leadership program. Directed budget negotiations, managed cross-functional team workflows, and ensured all logistical requirements were met seamlessly.",
    achievements: [
      "Designed and developed a comprehensive digital leadership curriculum, including weekly training modules and graduation parameters.",
      "Managed and supervised 5+ sub-teams, distributing tasks using digital collaboration tools like Miro.",
      "Conducted comprehensive post-activity evaluations and rigorous quality control across all event sections."
    ],
    impact: [
      "Secured cost-efficient operational agreements and long-term vendor contracts, optimizing the overall program budget.",
      "Enhanced team collaboration and problem-solving efficiency by 30% during program execution.",
      "Achieved 100% operational fulfillment with minimal technical issues for over 100 participants."
    ]
  },
  {
    id: 3,
    title: "Head of Operational",
    company: "Informatics x Pharmacy Christmas Celebration 2024",
    date: "Oct 2024 – Dec 2024",
    description: "Directed end-to-end event operations for a cross-departmental team, managing technical setups, logistics, and real-time monitoring. Coordinated with multiple divisions to ensure alignment with organizational goals.",
    achievements: [
      "Designed engaging visual communications and presentation materials using Canva to align committee members.",
      "Organized technical and logistical requirements while conducting real-time monitoring of the event flow."
    ],
    impact: [
      "Successfully delivered a seamless event for 200+ attendees, maintaining smooth operations from preparation to completion.",
      "Ensured 100% alignment with organizational targets and event timelines.",
      "Optimized budget and resource allocation within strict financial constraints."
    ]
  },
  {
    id: 4,
    title: "Head of Security Division",
    company: "Informatics Festival 2024",
    date: "Jan 2024 – May 2024",
    description: "Managed comprehensive event security systems to ensure safety and order throughout the festival, coordinating with internal teams and external parties.",
    achievements: [
      "Organized and deployed security teams across strategic locations.",
      "Monitored on-site conditions to anticipate and mitigate potential risks."
    ],
    impact: [
      "Maintained a 100% secure environment with zero major disruptions or safety breaches.",
      "Established improved security protocols that increased effectiveness for future organizational events."
    ]
  },
  {
    id: 5,
    title: "Field Coordinator Lead",
    company: "Wizzy Academia - First Gathering INFORMATICS BATCH 2023",
    date: "Sep 2023 – Sep 2023",
    description: "Led on-site event execution and logistics, directing field teams and ensuring all technical setups met operational standards.",
    achievements: [
      "Managed field team task distribution across multiple event areas.",
      "Supervised real-time event flow and resolved on-site issues efficiently."
    ],
    impact: [
      "Delivered a well-organized event that ran strictly according to the planned timeline.",
      "Contributed directly to the overall success of the gathering through zero-delay logistical setups."
    ]
  }
];

export default function Experience() {
  return (
    <Layout title="Experience | Elkana Juanro Manullang">
      <section className="pt-32 pb-20 px-6 md:px-16 min-h-screen bg-navy-900">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-20 animate-fade-up">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-gold-500 uppercase mb-3 block">02 / Experience</span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-cream-50 leading-tight">
              Professional <br className="hidden md:block" />
              <em className="italic text-gold-500">Track Record.</em>
            </h1>
            <div className="w-16 h-[1px] bg-gold-500 mt-6"></div>
          </div>

          {/* Work Experience Section */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12 border-b border-gold-500/20 pb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <h2 className="font-serif text-3xl text-cream-50 font-light">Work Experience</h2>
            </div>

            <div className="relative border-l border-gold-500/20 ml-3 md:ml-4 space-y-12">
              {workExperiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 md:pl-12 animate-fade-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  {/* Timeline Dot */}
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-500 ring-4 ring-navy-900"></span>
                  
                  <div className="bg-navy-800/50 border border-gold-500/10 p-6 md:p-8 hover:border-gold-500/30 transition-colors group">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-sans text-xl text-cream-50 font-medium mb-1 group-hover:text-gold-400 transition-colors">{exp.title}</h3>
                        <div className="font-serif text-[1.1rem] text-gold-500 mb-1">{exp.company}</div>
                        {exp.location && <div className="font-mono text-xs text-cream-300 tracking-wide">{exp.location}</div>}
                      </div>
                      <div className="font-mono text-[0.65rem] text-gold-500 tracking-widest uppercase shrink-0 px-3 py-1 bg-gold-500/10 border border-gold-500/20 w-fit">
                        {exp.date}
                      </div>
                    </div>
                    
                    <p className="font-sans text-[0.95rem] text-cream-200 leading-relaxed font-light mb-6">
                      {exp.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-mono text-[0.65rem] tracking-[0.15em] text-cream-300 uppercase mb-3 border-b border-gold-500/10 pb-2">Achievements</h4>
                        <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-cream-100 font-light leading-relaxed">
                              <span className="text-gold-500 mt-1 shrink-0">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-mono text-[0.65rem] tracking-[0.15em] text-gold-500 uppercase mb-3 border-b border-gold-500/10 pb-2">Impact</h4>
                        <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                          {exp.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-cream-100 font-light leading-relaxed">
                              <svg className="w-3.5 h-3.5 text-gold-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizational Experience Section */}
          <div>
            <div className="flex items-center gap-4 mb-12 border-b border-gold-500/20 pb-4 animate-fade-up">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <h2 className="font-serif text-3xl text-cream-50 font-light">Organizational Experience</h2>
            </div>

            <div className="relative border-l border-gold-500/20 ml-3 md:ml-4 space-y-12">
              {orgExperiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 md:pl-12 animate-fade-up">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-500 ring-4 ring-navy-900"></span>
                  
                  <div className="bg-navy-800/50 border border-gold-500/10 p-6 md:p-8 hover:border-gold-500/30 transition-colors group">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-sans text-xl text-cream-50 font-medium mb-1 group-hover:text-gold-400 transition-colors">{exp.title}</h3>
                        <div className="font-serif text-[1.1rem] text-gold-500 mb-1">{exp.company}</div>
                      </div>
                      <div className="font-mono text-[0.65rem] text-gold-500 tracking-widest uppercase shrink-0 px-3 py-1 bg-gold-500/10 border border-gold-500/20 w-fit">
                        {exp.date}
                      </div>
                    </div>
                    
                    <p className="font-sans text-[0.95rem] text-cream-200 leading-relaxed font-light mb-6">
                      {exp.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-mono text-[0.65rem] tracking-[0.15em] text-cream-300 uppercase mb-3 border-b border-gold-500/10 pb-2">Achievements</h4>
                        <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-cream-100 font-light leading-relaxed">
                              <span className="text-gold-500 mt-1 shrink-0">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-mono text-[0.65rem] tracking-[0.15em] text-gold-500 uppercase mb-3 border-b border-gold-500/10 pb-2">Impact</h4>
                        <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
                          {exp.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-cream-100 font-light leading-relaxed">
                              <svg className="w-3.5 h-3.5 text-gold-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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