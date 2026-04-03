"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "The Problem", href: "#pain" },
  { label: "What We Build", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Industries", href: "#verticals" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050d1a]/95 backdrop-blur-xl border-b border-[#f59e0b]/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#f59e0b] flex items-center justify-center transition-opacity group-hover:opacity-90">
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                <path d="M2 2L10 8L2 14" stroke="#050d1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">AxonEdge</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}
                className="text-[#94a3b8] hover:text-white transition-colors text-sm font-medium">
                {l.label}
              </a>
            ))}
            <a href="mailto:info@axonedge.tech"
              className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#050d1a] text-sm font-bold rounded-lg transition-all duration-200 shadow-lg shadow-[#f59e0b]/20">
              Book Free Audit →
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050d1a]/98 backdrop-blur-xl border-t border-[#f59e0b]/10">
            <div className="px-4 py-5 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}
                  className="text-[#94a3b8] hover:text-white transition-colors py-1.5 text-base font-medium">
                  {l.label}
                </a>
              ))}
              <a href="mailto:info@axonedge.tech"
                className="mt-2 px-5 py-3.5 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#050d1a] text-sm font-bold rounded-lg text-center transition-all">
                Book Your Free Operations Audit →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
