"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import OpsScrollFeed from "./OpsScrollFeed";

const STATS = [
  { number: "40+",     label: "Hours Saved Per Month" },
  { number: "$120K+",  label: "Waste Identified in First 30 Days" },
  { number: "4 Weeks", label: "Average Deployment Time" },
  { number: "3",       label: "Clients Onboarded" },
];

const TRUST_TAGS = [
  "Live in 4 weeks",
  "Built on YOUR data",
  "Fixed price. No surprises.",
];

export default function HeroSection() {
  const scrollToCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080810] dot-grid pt-16">

      {/* Ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] rounded-full bg-[#f59e0b]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6  w-[500px] h-[400px] rounded-full bg-[#f59e0b]/[0.03] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT - copy */}
          <motion.div
            initial={{ x: -24 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Scarcity badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/[0.07] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] dot-blink" />
              <span className="text-[#f59e0b] text-xs font-semibold tracking-widest uppercase">Now Accepting 3 New Clients for Q2</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.15rem] xl:text-[3.5rem] font-black tracking-tight leading-[1.08] mb-6 text-white">
              Your $10M&ndash;$100M Business<br className="hidden sm:block" />{" "}
              <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                Deserves Better Than<br />Spreadsheets<br />and Gut Instinct.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#6b7280] leading-relaxed mb-4 max-w-xl">
              We build custom AI dashboards and automation systems that show you{" "}
              <span className="text-[#9ca3af]">exactly where you&apos;re bleeding money</span> &mdash; in real time.
            </p>

            <p className="text-sm text-[#4b5563] mb-8 max-w-xl">
              30 minutes. No pitch deck. Just clarity on what&apos;s costing you.
            </p>

            {/* CTA */}
            <a
              href="#cta"
              onClick={scrollToCTA}
              className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#080810] font-bold rounded-full text-base transition-all duration-200 mb-8"
            >
              Book Your Free Operations Audit &rarr;
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {TRUST_TAGS.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#6b7280] text-xs font-medium">
                  <Check className="w-3 h-3 text-[#22c55e]" /> {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - OPS BOARD */}
          <motion.div
            initial={{ x: 24 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="hidden md:block"
          >
            <div
              className="rounded-2xl overflow-hidden board-shimmer"
              style={{
                background: "#0d0d18",
                border: "1px solid rgba(245,158,11,0.22)",
                boxShadow: "0 0 60px rgba(245,158,11,0.07), 0 24px 64px rgba(0,0,0,0.6)",
              }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]"
                style={{ background: "rgba(255,255,255,0.025)" }}>
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs font-semibold tracking-widest uppercase text-[#6b7280]">AxonEdge Ops Board</span>
                <span className="ml-auto flex items-center gap-1.5 text-[10px] text-[#22c55e] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] dot-blink" />LIVE
                </span>
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-[8px_1fr_auto] gap-3 px-4 py-2 border-b border-white/[0.04]">
                <span />
                <span className="text-[10px] uppercase tracking-widest text-[#374151] font-semibold">Event</span>
                <span className="text-[10px] uppercase tracking-widest text-[#374151] font-semibold">Time</span>
              </div>

              {/* Scrolling feed */}
              <OpsScrollFeed />

              {/* Footer */}
              <div className="px-4 py-2.5 border-t border-white/[0.05] flex items-center justify-between"
                style={{ background: "rgba(255,255,255,0.015)" }}>
                <span className="text-[10px] text-[#374151] tracking-wider">Powered by AxonEdge Intelligence</span>
                <span className="text-[10px] text-[#22c55e] font-semibold">&#9679; All systems nominal</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* STATS BAR */}
      <motion.div
        initial={{ y: 16 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, delay: 0.9 }}
        className="relative z-10 w-full border-t border-white/[0.06]"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-6 px-4">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">{s.number}</span>
                <span className="text-[#4b5563] text-xs font-medium mt-1 text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
