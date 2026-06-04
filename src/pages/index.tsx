import Layout from '@/components/Layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const PHRASES = [
  "Scalable Web Apps",
  "Business Process Automation",
  "Data-Driven Solutions",
  "Digital Transformation"
];

const VERSES = [
  { text: "Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.", ref: "Filipi 4:13" },
  { text: "Demikian juga Roh membantu kita dalam kelemahan kita; sebab kita tidak tahu, bagaimana sebenarnya harus berdoa; tetapi Roh sendiri berdoa untuk kita kepada Allah dengan keluhan-keluhan yang tidak terucapkan.", ref: "Roma 8:26" },
  { text: "Janganlah takut, sebab Aku menyertai engkau, janganlah bimbang, sebab Akulah Allahmu; Aku akan meneguhkan, bahkan akan menolong engkau; Aku akan memegang engkau dengan tangan kanan-Ku yang membawa kemenangan.", ref: "Yesaya 41:10" },
  { text: "Jangan seorang pun menganggap engkau rendah karena engkau muda. Jadilah teladan bagi orang-orang percaya, dalam perkataanmu, dalam tingkah lakumu, dalam kasihmu, dalam kesetiaanmu dan dalam kesucianmu.", ref: "1 Timotius 4:12" },
  { text: "Sebab TUHAN, Dia sendiri akan berjalan di depanmu, Dia sendiri akan menyertai engkau, Dia tidak akan membiarkan engkau dan tidak akan meninggalkan engkau; janganlah takut dan janganlah patah hati.", ref: "Ulangan 31:8" },
  { text: "Jikalau keangkuhan tiba, tiba juga cemooh, tetapi hikmat ada pada orang yang rendah hati.", ref: "Amsal 11:2" }
];

export default function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [fadeVerse, setFadeVerse] = useState(true);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % PHRASES.length;
      const fullText = PHRASES[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 90);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const verseTimer = setInterval(() => {
      setFadeVerse(false);
      setTimeout(() => {
        setCurrentVerse((prev) => (prev + 1) % VERSES.length);
        setFadeVerse(true);
      }, 500);
    }, 10000);

    return () => clearInterval(verseTimer);
  }, []);

  return (
    <Layout>
      <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-16 pb-20 overflow-hidden bg-navy-900">
        <div 
          className="absolute inset-0 bg-[url('/assets/images/background-home.jpg')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent"></div>
        <div className="absolute -bottom-[100px] -right-[100px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="relative z-10">
          <p className="font-mono text-[0.7rem] tracking-[0.25em] text-gold-500 uppercase mb-5 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Full Stack Engineer · Bandar Lampung, Indonesia
          </p>
          
          <h1 className="font-serif text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.95] tracking-[-0.02em] text-cream-50 mb-2.5 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Elkana<br /><em className="italic text-gold-500">Juanro.</em>
          </h1>
          
          <p className="font-serif text-[clamp(1.2rem,2.5vw,2rem)] font-light text-cream-200 mb-10 animate-fade-up h-[3rem] md:h-auto" style={{ animationDelay: '0.7s' }}>
            Building&nbsp;<span className="text-gold-400">{text}</span>
            <span className="inline-block w-[2px] h-[1.1em] bg-gold-500 align-text-bottom animate-blink"></span>
          </p>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <div className="flex items-center gap-2 font-mono text-[0.7rem] text-cream-200 tracking-[0.06em]">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>2.5 Years Experience
            </div>
            <div className="flex items-center gap-2 font-mono text-[0.7rem] text-cream-200 tracking-[0.06em]">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>Laravel · React · Python · Supabase
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-12 animate-fade-up" style={{ animationDelay: '1.1s' }}>
            <Link href="/project" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 text-navy-900 font-mono text-[0.75rem] font-medium tracking-[0.1em] uppercase hover:bg-gold-400 hover:-translate-y-0.5 transition-all">
              View Projects 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-cream-100 border border-gold-500/30 font-mono text-[0.75rem] tracking-[0.1em] uppercase hover:border-gold-500 hover:text-gold-500 hover:-translate-y-0.5 transition-all">
              Let's Talk
            </Link>
          </div>
        </div>

        <div className="hidden md:flex absolute right-16 bottom-20 flex-col items-center gap-5 animate-fade-left z-10" style={{ animationDelay: '1.3s' }}>
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-gold-500 mb-2"></div>
          <a href="https://linkedin.com/in/elkanajnrmanullang" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center border border-gold-500/20 text-cream-200 text-[0.8rem] hover:border-gold-500 hover:text-gold-500 hover:scale-110 transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://github.com/elkanajnrmanullang" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center border border-gold-500/20 text-cream-200 text-[0.8rem] hover:border-gold-500 hover:text-gold-500 hover:scale-110 transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        </div>
      </section>

      <section className="relative py-20 px-6 md:px-16 overflow-hidden bg-navy-800">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,168,76,0.06)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-500 rounded-full font-mono text-[0.65rem] tracking-[0.15em] uppercase text-gold-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
            Life Verse
          </div>
          <div className={`transition-all duration-500 ${fadeVerse ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <p className="font-serif text-[clamp(1.3rem,2.8vw,2.1rem)] font-light italic text-cream-100 leading-relaxed mb-6 min-h-[120px] md:min-h-[80px]">
              "{VERSES[currentVerse].text}"
            </p>
            <p className="font-mono text-[0.75rem] tracking-[0.12em] text-gold-500 uppercase">
              — {VERSES[currentVerse].ref}
            </p>
          </div>
          
          <div className="flex justify-center gap-2 mt-10">
            {VERSES.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => {
                  setFadeVerse(false);
                  setTimeout(() => {
                    setCurrentVerse(idx);
                    setFadeVerse(true);
                  }, 500);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentVerse === idx ? 'bg-gold-500 scale-150' : 'bg-navy-700 hover:bg-gold-500/50'}`}
                aria-label={`Go to verse ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 text-center max-w-5xl mx-auto">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-cream-50 leading-tight mb-6">
          Architecting systems that solve <br className="hidden md:block" /> <em className="italic text-gold-500">complex bottlenecks.</em>
        </h2>
        <p className="text-cream-200 text-lg leading-relaxed mb-12 max-w-3xl mx-auto font-light">
          Dedicated to transforming manual operations into highly efficient digital ecosystems. Proven track record of boosting operational efficiency by up to 90% through data-driven workflows, scalable API development, and robust automation.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border border-gold-500/15 bg-gold-500/15">
          <div className="bg-navy-800 py-8 px-4 hover:bg-navy-700 transition-colors">
            <div className="font-serif text-4xl text-gold-500 mb-3">2.5+</div>
            <div className="font-mono text-[0.65rem] text-cream-200 tracking-widest uppercase">Years Exp</div>
          </div>
          <div className="bg-navy-800 py-8 px-4 hover:bg-navy-700 transition-colors">
            <div className="font-serif text-4xl text-gold-500 mb-3">10+</div>
            <div className="font-mono text-[0.65rem] text-cream-200 tracking-widest uppercase">Projects Built</div>
          </div>
          <div className="bg-navy-800 py-8 px-4 hover:bg-navy-700 transition-colors">
            <div className="font-serif text-4xl text-gold-500 mb-3">90%</div>
            <div className="font-mono text-[0.65rem] text-cream-200 tracking-widest uppercase">Efficiency ↑</div>
          </div>
          <div className="bg-navy-800 py-8 px-4 flex items-center justify-center hover:bg-navy-700 transition-colors group">
            <Link href="/about" className="font-mono text-[0.7rem] text-gold-500 tracking-widest uppercase flex items-center gap-2 group-hover:text-gold-400">
              Read More 
              <svg className="transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}