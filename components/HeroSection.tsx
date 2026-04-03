"use client";

import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

const VERTICALS = [
  "Metal Fabrication",
  "Roofing Contractors",
  "Freight Forwarding",
  "Law Firms",
  "Medical Practices",
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#050d1a]">
      <ParticleCanvas />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Amber glow orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#f59e0b]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#d97706]/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/8 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
            <span className="text-[#f59e0b] text-sm font-semibold tracking-wide">AI Operations Consulting for SMBs</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-white block">Operational Clarity.</span>
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] bg-clip-text text-transparent block mt-1">
              Built for Your Business.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl text-[#94a3b8] max-w-3xl leading-relaxed mb-4"
          >
            We turn your QuickBooks, spreadsheets, and gut instinct into a{" "}
            <span className="text-white font-semibold">real-time intelligence system</span>{" "}
            — so you can stop guessing and start scaling.
          </motion.p>

          {/* Target qualifier */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="text-base text-[#f59e0b]/80 font-medium mb-10"
          >
            Built for businesses running enterprise-level operations on small-business tools.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="mailto:info@axonedge.tech"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#050d1a] font-bold rounded-xl text-base transition-all duration-200 shadow-xl shadow-[#f59e0b]/20 hover:shadow-[#f59e0b]/35"
            >
              Book Your Free Operations Audit →
            </a>
            <a
              href="#pain"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#pain");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-[#f59e0b]/30 text-[#94a3b8] hover:text-white font-semibold rounded-xl text-base transition-all duration-200 hover:bg-white/[0.03]"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Vertical tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-3">Industries We Serve</p>
            <div className="flex flex-wrap gap-2">
              {VERTICALS.map((v) => (
                <span key={v} className="px-3 py-1.5 rounded-full border border-white/10 text-[#94a3b8] text-xs font-medium hover:border-[#f59e0b]/30 hover:text-white transition-colors">
                  {v}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-[#f59e0b]/25 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#f59e0b]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
