"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "The Problem", href: "#pain" },
  { label: "What We Build", href: "#services" },
  { label: "Industries",   href: "#verticals" },
  { label: "About",        href: "#about" },
  { label: "FAQ",          href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/[0.06] ${
        scrolled ? "bg-[#080810]/92 shadow-2xl shadow-black/50" : "bg-[#080810]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#f59e0b] flex items-center justify-center transition-all duration-200 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.55)]">
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                <path d="M2 2L10 8L2 14" stroke="#080810" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">AxonEdge</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}
                className="text-[#6b7280] hover:text-white transition-colors text-sm font-medium">
                {l.label}
              </a>
            ))}

            {/* Phone number */}
            <a href="tel:+13057126416" className="flex items-center gap-1.5 text-[#9ca3af] hover:text-[#f59e0b] transition-colors text-sm font-medium">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">(305) 712-6416</span>
            </a>

            <a href="#cta" onClick={(e) => scrollTo(e, "#cta")}
              className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#080810] text-sm font-bold rounded-full transition-all duration-200 shadow-lg shadow-[#f59e0b]/25 hover:shadow-[#f59e0b]/45">
              Book Free Audit 
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/[0.06]"
            style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", background: "rgba(8,8,16,0.97)" }}>
            <div className="px-4 py-5 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}
                  className="text-[#6b7280] hover:text-white transition-colors py-1.5 text-base font-medium">
                  {l.label}
                </a>
              ))}

              {/* Phone in mobile menu */}
              <a href="tel:+13057126416" className="flex items-center gap-2 text-[#f59e0b] py-1.5 text-base font-medium">
                <Phone className="w-4 h-4" />
                (305) 712-6416
              </a>

              <a href="#cta" onClick={(e) => scrollTo(e, "#cta")}
                className="mt-2 px-5 py-3.5 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#080810] text-sm font-bold rounded-full text-center transition-all">
                Book Your Free Operations Audit 
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
