"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleCanvas from "./ParticleCanvas";

const ACTIVITY_ITEMS = [
  "✅ AxonEdge Technologies, LLC — Filed",
  "🚀 axonedge.tech — Deployed to Vercel",
  "📱 Google Play Developer — Account Live",
  "⚙️ El Fichazo — Build complete",
  "🎵 Soundboard Latino — Spec ready",
  "💰 La Vaca — MVP planned",
  "🔧 12 app specs — Complete",
  "🌐 axonedge.tech — DNS propagating...",
];

const PROJECTS = [
  { emoji: "🟢", name: "El Fichazo", status: "App Store Review", color: "text-green-400" },
  { emoji: "🔵", name: "Soundboard Latino", status: "In Development", color: "text-blue-400" },
  { emoji: "🟡", name: "La Vaca", status: "Spec Complete", color: "text-yellow-400" },
];

const TECH_PILLS = [
  "App Store", "Google Play", "React Native", "Supabase", "Vercel",
  "Next.js", "Expo", "RevenueCat", "Cloudflare", "TypeScript",
];

const STATS = [
  { value: "12", label: "Apps In Pipeline" },
  { value: "iOS + Android", label: "Both Platforms" },
  { value: "100%", label: "Source Code Yours" },
  { value: "$0", label: "Vendor Lock-in" },
];

export default function HeroSection() {
  const [activityFeed, setActivityFeed] = useState(ACTIVITY_ITEMS.slice(0, 4));
  const [activityIndex, setActivityIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => {
        const next = prev % ACTIVITY_ITEMS.length;
        setActivityFeed((feed) => {
          const newFeed = [ACTIVITY_ITEMS[next], ...feed.slice(0, 3)];
          return newFeed;
        });
        return next + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-[#150f1f]"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── LEFT COLUMN ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col gap-7"
            >
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-[#386aff]/30 bg-[#386aff]/10 text-sm font-medium text-[#a0a0b8]">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white">12 Apps In Development</span>
              </div>

              {/* Main headline */}
              <h1 className="text-6xl sm:text-7xl font-black tracking-tight leading-[1.05]">
                <span className="text-white block">YOUR TECH,</span>
                <span className="block mt-1">
                  <span className="text-white">BUILT.</span>{" "}
                  <span className="bg-gradient-to-r from-[#386aff] to-[#a78bfa] bg-clip-text text-transparent">
                    SHIPPED.
                  </span>{" "}
                  <span className="text-white">OWNED.</span>
                </span>
              </h1>

              {/* Subline */}
              <p className="text-lg text-[#a0a0b8] max-w-xl leading-relaxed">
                AxonEdge builds mobile apps, AI systems, and technology solutions — fast, clean, and 100% yours. No lock-in. No middlemen.
              </p>

              {/* Checkmark items */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {["✓ Full source code", "✓ No vendor lock-in", "✓ Live in weeks"].map((item) => (
                  <span key={item} className="text-sm font-semibold text-green-400">
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apps"
                  className="px-8 py-4 bg-[#386aff] hover:bg-[#4f7eff] text-white font-bold rounded-xl transition-all duration-200 text-base text-center shadow-lg shadow-[#386aff]/20 hover:shadow-[#386aff]/40"
                >
                  See Our Apps →
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-[#386aff]/40 hover:border-[#386aff] text-white font-semibold rounded-xl transition-all duration-200 hover:bg-[#386aff]/10 text-base text-center"
                >
                  Get in Touch &gt;
                </a>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN — BUILD STATUS CARD ── */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="hidden sm:block"
            >
              <div className="bg-[#0d0d1a] border border-[#386aff]/30 rounded-2xl p-6 shadow-xl shadow-[#386aff]/5">

                {/* Card Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#386aff]/10 border border-[#386aff]/20">
                    <span className="text-[#386aff] text-xs font-bold tracking-widest uppercase">
                      AxonEdge Build Status
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-semibold tracking-wide uppercase">Active</span>
                  </div>
                </div>

                {/* Projects List */}
                <div className="flex flex-col gap-3 mb-5">
                  {PROJECTS.map((proj) => (
                    <div
                      key={proj.name}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/5"
                    >
                      <div className="flex items-center gap-2">
                        <span>{proj.emoji}</span>
                        <span className="text-white text-sm font-semibold">{proj.name}</span>
                      </div>
                      <span className={`text-xs font-medium ${proj.color}`}>{proj.status}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-[#386aff]/15 mb-4" />

                {/* Live Activity Feed Label */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#386aff] text-xs font-bold tracking-widest uppercase">Live Activity</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#386aff] animate-pulse" />
                </div>

                {/* Activity Feed */}
                <div className="flex flex-col gap-2 overflow-hidden" style={{ minHeight: "120px" }}>
                  <AnimatePresence initial={false} mode="popLayout">
                    {activityFeed.map((item, i) => (
                      <motion.div
                        key={item + i}
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: i === 0 ? 1 : 0.55 - i * 0.1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="text-xs text-[#a0a0b8] px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 truncate"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3 border-t border-[#386aff]/10">
                  <span className="text-[#a0a0b8] text-xs">Last updated just now</span>
                </div>
              </div>
            </motion.div>

          </div>
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

      {/* ── STATS BAR ── */}
      <div className="bg-[#150f1f] border-y border-[#386aff]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center text-center border border-[#386aff]/20 rounded-xl px-4 py-6 hover:border-[#386aff]/40 transition-colors"
              >
                <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#386aff] to-[#a78bfa] bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm text-[#a0a0b8] mt-1 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTEGRATION PILLS BAR ── */}
      <div className="bg-[#150f1f] pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-hidden">
            <span className="text-xs font-bold tracking-widest text-[#a0a0b8] uppercase whitespace-nowrap shrink-0">
              Built With
            </span>
            <div className="relative flex-1 overflow-hidden">
              {/* Left fade */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#150f1f] to-transparent z-10" />
              {/* Right fade */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#150f1f] to-transparent z-10" />
              <motion.div
                className="flex gap-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                style={{ width: "max-content" }}
              >
                {[...TECH_PILLS, ...TECH_PILLS].map((pill, i) => (
                  <span
                    key={`${pill}-${i}`}
                    className="px-4 py-2 rounded-full border border-[#386aff]/20 text-[#a0a0b8] text-xs font-medium whitespace-nowrap hover:border-[#386aff]/50 hover:text-white transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
