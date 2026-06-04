import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/project' },
  ];

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      {/* Floating Navbar */}
      <div className="fixed top-4 md:top-6 left-0 right-0 z-[9000] flex justify-center px-4 md:px-8">
        <nav
          className={`w-full max-w-5xl flex items-center justify-between px-6 py-3.5 md:py-4 rounded-full transition-all duration-500 border ${
            scrolled
              ? 'bg-navy-900/80 backdrop-blur-xl border-gold-500/30 shadow-lg shadow-navy-900/50'
              : 'bg-navy-900/40 backdrop-blur-md border-gold-500/10'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="font-serif text-[1.25rem] md:text-[1.35rem] font-semibold text-gold-500 tracking-wide z-[9002] relative">
            EJM<span className="text-cream-100">.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`font-mono text-[0.7rem] tracking-[0.15em] uppercase transition-all duration-300 relative group px-2 py-1 ${
                    router.pathname === link.path ? 'text-gold-500' : 'text-cream-200 hover:text-gold-400'
                  }`}
                >
                  {link.name}
                  {/* Active Indicator Dot */}
                  <span
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-500 transition-all duration-300 ${
                      router.pathname === link.path ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-4 z-[9002]">
            <Link
              href="/contact"
              className="hidden md:inline-flex font-mono text-[0.65rem] tracking-[0.15em] uppercase px-5 py-2.5 bg-gold-500/10 border border-gold-500/30 text-gold-500 rounded-full hover:bg-gold-500 hover:text-navy-900 transition-all duration-300"
            >
              Contact
            </Link>

            {/* Hamburger Icon */}
            <div
              className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-5 h-[1.5px] bg-gold-500 transition-transform duration-300 origin-center ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
              <span className={`block w-5 h-[1.5px] bg-gold-500 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-[1.5px] bg-gold-500 transition-transform duration-300 origin-center ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-navy-900/98 backdrop-blur-2xl z-[8999] transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`font-mono text-sm tracking-widest uppercase transition-colors duration-250 ${
                  router.pathname === link.path ? 'text-gold-500' : 'text-cream-200 hover:text-gold-500'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm tracking-widest uppercase px-8 py-3 border border-gold-500 text-gold-500 rounded-full hover:bg-gold-500 hover:text-navy-900 transition-all duration-250 inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}