import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const darkPages = ["/"];
  const isWhiteBg = !darkPages.includes(router.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Works", href: "/works" },
    { label: "Contact", href: "/contact" },
  ];

  const navbarBg = isWhiteBg
    ? "bg-white"
    : scrolled
    ? "bg-black/70 backdrop-blur"
    : "bg-transparent";

  const textColor = isWhiteBg ? "text-black" : "text-white";
  const underlineColor = isWhiteBg ? "after:bg-black" : "after:bg-white";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/images/icon.png"
            alt="Elkana Logo"
            width={100}
            height={100}
            priority
            style={{ height: "auto" }}
          />
        </Link>

        {/* Menu */}
        <ul className="flex space-x-6">
          {menuItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    ${textColor} font-medium relative transition
                    after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all after:duration-300
                    ${underlineColor}
                    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
