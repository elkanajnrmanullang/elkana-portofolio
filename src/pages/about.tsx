import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <Layout title="About | Elkana Juanro Manullang">
      <section className="pt-32 pb-20 px-6 md:px-16 min-h-screen bg-navy-900">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 animate-fade-up">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-gold-500 uppercase mb-3 block">01 / About Me</span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-cream-50 leading-tight">
              Software Engineer driving <br className="hidden md:block" />
              <em className="italic text-gold-500">Digital Transformation.</em>
            </h1>
            <div className="w-16 h-[1px] bg-gold-500 mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
            
            <div className="lg:col-span-4 animate-fade-right" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-[3/4] w-full group">
                <div className="absolute inset-0 bg-navy-800 overflow-hidden">
                  <Image 
                    src="/assets/images/about_profile.jpg" 
                    alt="Elkana Juanro Manullang" 
                    fill 
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/60 to-transparent"></div>
                </div>
                <div className="absolute top-4 left-4 -right-4 -bottom-4 border border-gold-500/30 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              </div>

              <div className="mt-12 flex flex-col gap-4">
                <div className="border-b border-gold-500/10 pb-4">
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] text-gold-500 uppercase mb-1">Education</div>
                  <div className="font-sans text-sm text-cream-100">Bachelor Degree in Informatics Engineering</div>
                  <div className="font-sans text-sm text-cream-300">Institut Teknologi Sumatera (2022 - 2026)</div>
                </div>
                <div className="border-b border-gold-500/10 pb-4">
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] text-gold-500 uppercase mb-1">Location</div>
                  <div className="font-sans text-sm text-cream-100">Bandar Lampung, Indonesia</div>
                </div>
                <div className="border-b border-gold-500/10 pb-4">
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] text-gold-500 uppercase mb-1">Languages</div>
                  <div className="font-sans text-sm text-cream-100">Indonesian <span className="text-cream-300">(Native)</span></div>
                  <div className="font-sans text-sm text-cream-100">English <span className="text-cream-300">(Intermediate / TOEFL 500)</span></div>
                </div>
                <div className="pb-4">
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] text-gold-500 uppercase mb-1">Status</div>
                  <div className="font-sans text-sm text-green-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Open to Work
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 animate-fade-left" style={{ animationDelay: '0.4s' }}>
              <div className="prose prose-invert max-w-none font-sans text-cream-200 text-[1.05rem] leading-relaxed font-light">
                <p className="mb-6">
                  Hello! I am a Software Engineer with a Bachelor's degree in Informatics Engineering, specializing in end-to-end web application development. My engineering passion lies in architecting clean, scalable systems and solving complex operational bottlenecks through automation.
                </p>
                <p className="mb-6">
                  On the frontend, I build responsive, component-based interfaces using <strong className="text-cream-50 font-medium">React.js, Next.js, and TypeScript</strong>. On the backend, I design modular server architectures and robust Extract, Transform, Load (ETL) pipelines utilizing <strong className="text-cream-50 font-medium">PHP (Laravel), Python (Flask, Pandas), and PostgreSQL</strong>.
                </p>
                <p className="mb-8">
                  My technical foundation is supported by intermediate C++ skills acquired through university coursework in data structures and algorithms, which drives my logical approach to problem-solving. Furthermore, I have practical experience implementing microservices-style integrations, such as isolating public and admin environments into separate web directories, and ensuring system reliability through End-to-End (E2E) testing with Cypress and API validation via Postman.
                </p>

                <div className="border-l-2 border-gold-500 pl-6 my-10 py-2 bg-gradient-to-r from-gold-500/5 to-transparent">
                  <h3 className="font-mono text-[0.7rem] tracking-[0.15em] text-gold-500 uppercase mb-4">Measurable Impact</h3>
                  <ul className="flex flex-col gap-3 font-sans text-[0.95rem] text-cream-100 m-0 p-0 list-none">
                    <li className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gold-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Automated the processing of <strong>40,000+ daily operational data records</strong> via centralized ETL pipelines, ensuring complete data integrity.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gold-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Programmed a real-time synchronization backend that reduced content publishing delays by <strong>40%</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gold-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Boosted operational efficiency by reducing layout production time from <strong>12 hours to under 1 hour</strong> through an automated system.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gold-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Integrated LLM and NLP pipelines to accelerate quantitative data processing and financial analysis efficiency by <strong>80%</strong>.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 mt-10">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 text-navy-900 font-mono text-[0.75rem] font-medium tracking-[0.1em] uppercase hover:bg-gold-400 hover:-translate-y-0.5 transition-all">
                    Hire Me 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                  <a href="/assets/files/ElkanaJuanroManullang_Full Stack Engineer_CV.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-cream-100 border border-gold-500/30 font-mono text-[0.75rem] tracking-[0.1em] uppercase hover:border-gold-500 hover:text-gold-500 hover:-translate-y-0.5 transition-all">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-4 mb-10 border-b border-gold-500/20 pb-4">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              <h2 className="font-serif text-3xl text-cream-50 font-light">Technical Expertise</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              <div className="bg-navy-800 rounded-sm overflow-hidden border border-gold-500/10 hover:border-gold-500/40 transition-colors">
                <div className="bg-gold-500/10 px-6 py-4 border-b border-gold-500/10">
                  <h3 className="font-sans text-lg text-gold-500 font-medium tracking-wide">Frontend Architecture</h3>
                </div>
                <div className="p-6 flex flex-wrap gap-2.5">
                  {['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Zustand', 'Redux', 'TanStack Query', 'HTML5 & CSS3'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-navy-900 text-cream-100 font-sans text-[0.95rem] rounded-md border border-navy-700 shadow-sm hover:border-gold-500/50 hover:text-gold-400 transition-all">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-navy-800 rounded-sm overflow-hidden border border-gold-500/10 hover:border-gold-500/40 transition-colors">
                <div className="bg-gold-500/10 px-6 py-4 border-b border-gold-500/10">
                  <h3 className="font-sans text-lg text-gold-500 font-medium tracking-wide">Backend & APIs</h3>
                </div>
                <div className="p-6 flex flex-wrap gap-2.5">
                  {['Laravel', 'Node.js', 'Python (Flask, Pandas)', 'NestJS', 'RESTful APIs', 'Supabase', 'Golang (Beginner to Intermediate)', 'GraphQL (Beginner to Intermediate)'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-navy-900 text-cream-100 font-sans text-[0.95rem] rounded-md border border-navy-700 shadow-sm hover:border-gold-500/50 hover:text-gold-400 transition-all">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-navy-800 rounded-sm overflow-hidden border border-gold-500/10 hover:border-gold-500/40 transition-colors">
                <div className="bg-gold-500/10 px-6 py-4 border-b border-gold-500/10">
                  <h3 className="font-sans text-lg text-gold-500 font-medium tracking-wide">Databases</h3>
                </div>
                <div className="p-6 flex flex-wrap gap-2.5">
                  {['PostgreSQL', 'MySQL', 'Redis', 'Prisma ORM'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-navy-900 text-cream-100 font-sans text-[0.95rem] rounded-md border border-navy-700 shadow-sm hover:border-gold-500/50 hover:text-gold-400 transition-all">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-navy-800 rounded-sm overflow-hidden border border-gold-500/10 hover:border-gold-500/40 transition-colors">
                <div className="bg-gold-500/10 px-6 py-4 border-b border-gold-500/10">
                  <h3 className="font-sans text-lg text-gold-500 font-medium tracking-wide">Systems & Practices</h3>
                </div>
                <div className="p-6 flex flex-wrap gap-2.5">
                  {['ETL Pipelines', 'PWA', 'Microservices', 'Git / CI-CD', 'Cypress (E2E)', 'Postman', 'Agile/Scrum', 'VPS Hosting'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-navy-900 text-cream-100 font-sans text-[0.95rem] rounded-md border border-navy-700 shadow-sm hover:border-gold-500/50 hover:text-gold-400 transition-all">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-10 border-b border-gold-500/20 pb-4">
              <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <h2 className="font-serif text-3xl text-cream-50 font-light">Professional Soft Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Agile Leadership", desc: "Leading cross-functional teams and managing project lifecycles efficiently." },
                { title: "Problem Solving", desc: "Resolving real-time technical delays and complex operational bottlenecks." },
                { title: "Team Collaboration", desc: "Streamlining communication between core committees and operational staff." },
                { title: "Adaptability", desc: "Quickly learning and integrating new AI/LLM tools and frameworks." },
                { title: "Technical Mentoring", desc: "Providing hands-on guidance and simplifying complex logical concepts." },
                { title: "Time Management", desc: "Delivering core system features strictly within organizational targets." }
              ].map((skill, idx) => (
                <div key={idx} className="bg-navy-800/50 border-t-2 border-gold-500/30 hover:border-gold-500 p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  <h4 className="font-sans text-[1.1rem] text-cream-50 font-medium mb-2">{skill.title}</h4>
                  <p className="font-sans text-[0.95rem] text-cream-200 leading-relaxed font-light">{skill.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}