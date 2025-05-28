import { useEffect, useState } from "react";
import Image from "next/image"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Works", href: "/projects" },
    { label: "Clients", href: "/clients" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/65 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/images/icon.png"
            alt="Elkana Logo"
            width={90} 
            height={40}
            priority 
          />
        </div>

        {/* Menu */}
        <ul className="flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white font-medium hover:text-neutral-400 relative group"
              >
                {item.label}
                <span className="block h-[2px] max-w-0 bg-white group-hover:max-w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
