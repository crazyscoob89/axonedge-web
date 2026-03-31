"use client";

import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#150f1f]"
    >
      <ParticleCanvas />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,106,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,106,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 sm:py-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#386aff]/30 bg-[#386aff]/10 text-[#386aff] text-sm font-medium mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#386aff] animate-pulse" />
          Technology Built for Ownership
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-none"
        >
          <span className="text-white">Build.</span>{" "}
          <span className="bg-gradient-to-r from-[#386aff] to-[#a78bfa] bg-clip-text text-transparent">Ship.</span>{" "}
          <span className="text-white">Own.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-lg sm:text-xl text-[#a0a0b8] max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          We build mobile apps, AI systems, and technology solutions that you
          own — no lock-in, no middlemen.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#apps"
            className="w-full sm:w-auto px-10 py-5 bg-[#386aff] hover:bg-[#4f7eff] text-white font-bold rounded-xl transition-all duration-200 glow-blue hover:glow-blue-strong text-lg"
          >
            Our Apps
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-5 border border-[#386aff]/40 hover:border-[#386aff] text-white font-semibold rounded-xl transition-all duration-200 hover:bg-[#386aff]/10 text-lg"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "12+", label: "Apps in Pipeline" },
            { value: "100%", label: "Client Ownership" },
            { value: "$0", label: "Vendor Lock-in" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-sm text-[#a0a0b8] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[#a0a0b8]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-[#386aff]/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#386aff]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
