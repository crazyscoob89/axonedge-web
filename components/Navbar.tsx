"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Apps", href: "#apps" },
  { label: "Why AxonEdge", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#150f1f]/90 backdrop-blur-xl border-b border-[#386aff]/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#386aff] flex items-center justify-center glow-blue group-hover:glow-blue-strong transition-all">
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5C5.5 3.067 7.067 1.5 9 1.5C10.933 1.5 12.5 3.067 12.5 5C12.5 6.933 10.933 8.5 9 8.5C7.067 8.5 5.5 6.933 5.5 5Z" stroke="white" strokeWidth="1.5"/>
                <path d="M9 5C9 3.067 10.567 1.5 12.5 1.5C14.433 1.5 16 3.067 16 5C16 6.933 14.433 8.5 12.5 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 5C9 6.933 7.433 8.5 5.5 8.5C3.567 8.5 2 6.933 2 5C2 3.067 3.567 1.5 5.5 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              AxonEdge
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#a0a0b8] hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-4 py-2 bg-[#386aff] hover:bg-[#4f7eff] text-white text-sm font-semibold rounded-lg transition-all duration-200 glow-blue hover:glow-blue-strong"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#150f1f]/95 backdrop-blur-xl border-t border-[#386aff]/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[#a0a0b8] hover:text-white transition-colors duration-200 py-2 text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-4 py-3 bg-[#386aff] hover:bg-[#4f7eff] text-white text-sm font-semibold rounded-lg transition-all duration-200 text-center"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
