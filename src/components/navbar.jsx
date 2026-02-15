import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navbar.css";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "Who We Are", id: "who-we-are" },
  { label: "Services", id: "services" },
  { label: "Technology", id: "technology" },
  { label: "Training", id: "training" },
  { label: "About Us", id: "about-us" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);

    // If not on home page, navigate first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300
        border-b border-white/10
        ${scrolled
          ? "bg-brand-dark/90 backdrop-blur"
          : "bg-transparent border-transparent"}
      `}
    >

      {/* FIXED HEIGHT + SAFE PADDING WRAPPER */}
      <nav className="mx-auto max-w-7xl h-[80px]">
        <div className="flex h-full items-center justify-between px-6">
          
          {/* Logo */}
          <div
            className="navbar-logo-jpeg"
            onClick={() => handleNavClick("hero")}
          >
            <img src="/logo.jpeg" alt="Vooplein logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer text-brand-text/80 hover:text-brand-primary transition"
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-sm font-medium text-brand-text"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur border-t border-white/10">
          <ul className="flex flex-col px-6 py-6 space-y-4 text-sm">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer text-brand-text/80 hover:text-brand-primary transition"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
