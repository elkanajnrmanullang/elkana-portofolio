import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-gold-500/20 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-serif text-2xl font-semibold text-gold-500 tracking-wide">
            EJM<span className="text-cream-100">.</span>
          </Link>
          <p className="font-sans text-sm text-cream-200 leading-relaxed font-light pr-4">
            Software Engineer specializing in end-to-end web application development, clean architectures, and business process automation.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-[0.7rem] tracking-[0.15em] text-gold-500 uppercase">Navigation</h3>
          <div className="flex flex-col gap-2.5">
            <Link href="/" className="font-sans text-sm text-cream-200 hover:text-gold-400 transition-colors w-fit">Home</Link>
            <Link href="/about" className="font-sans text-sm text-cream-200 hover:text-gold-400 transition-colors w-fit">About</Link>
            <Link href="/experience" className="font-sans text-sm text-cream-200 hover:text-gold-400 transition-colors w-fit">Experience</Link>
            <Link href="/project" className="font-sans text-sm text-cream-200 hover:text-gold-400 transition-colors w-fit">Projects</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-[0.7rem] tracking-[0.15em] text-gold-500 uppercase">Connect</h3>
          <p className="font-sans text-sm text-cream-200 font-light mb-2">
            Kota Bogor, Indonesia <br />
            <a href="mailto:elkanamanullang7@gmail.com" className="hover:text-gold-400 transition-colors">Email: elkanamanullang7@gmail.com</a>
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/elkanajnrmanullang" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-gold-500/30 text-cream-100 hover:bg-gold-500 hover:text-navy-900 transition-all rounded-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/elkanajnrmanullang" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-gold-500/30 text-cream-100 hover:bg-gold-500 hover:text-navy-900 transition-all rounded-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://instagram.com/elkanajnr_manullang" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center border border-gold-500/30 text-cream-100 hover:bg-gold-500 hover:text-navy-900 transition-all rounded-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-gold-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[0.65rem] text-cream-300 tracking-[0.1em] uppercase">
          © {new Date().getFullYear()} Elkana Juanro Manullang. All rights reserved.
        </p>
        <p className="font-mono text-[0.65rem] text-cream-300 tracking-[0.1em] uppercase">
          Built with El JNR Manullang
        </p>
      </div>
    </footer>
  );
}