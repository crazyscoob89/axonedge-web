"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VERTICALS = [
  {
    icon: "🏗️",
    industry: "Metal Fabrication",
    problems: ["Job costing that's always off", "Inventory you can't trust", "Quotes built from memory"],
    solution: "Real-time job cost tracking, automated material reorder triggers, and AI-assisted quoting that pulls from your actual cost history.",
  },
  {
    icon: "🏠",
    industry: "Roofing Contractors",
    problems: ["No visibility into crew productivity", "Margin bleed on large jobs", "Manual estimating that takes hours"],
    solution: "Live job performance dashboards, per-job margin tracking, and automated estimating workflows that turn a 3-hour process into 20 minutes.",
  },
  {
    icon: "🚛",
    industry: "Freight Forwarding",
    problems: ["Load profitability you calculate after the fact", "No early warning on at-risk shipments", "Carrier data living in five places"],
    solution: "Live load profitability dashboards, automated anomaly alerts for at-risk shipments, and a single source of truth for carrier and customer data.",
  },
  {
    icon: "🏥",
    industry: "Medical Practices",
    problems: ["Revenue cycle blind spots", "No proactive scheduling optimization", "Collections you chase manually"],
    solution: "Payer mix dashboards, scheduling efficiency analytics, and automated collections follow-up workflows that reduce AR days without adding headcount.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
} as const;

const card = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
} as const;

export default function VerticalsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="verticals" className="py-28 bg-[#080810] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-5">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Not a generic tool.<br />
            <span className="text-[#f59e0b]">Your industry. Your logic.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-base text-[#6b7280] max-w-3xl mb-14 leading-relaxed"
        >
          Every industry has its own KPIs, its own ops rhythms, and its own version of &ldquo;the thing everyone knows but nobody tracks.&rdquo; We build for the specifics — not a one-size-fits-all dashboard with your logo on it.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {VERTICALS.map((v) => (
            <motion.div
              key={v.industry}
              variants={card}
              className="group p-6 rounded-xl border border-white/[0.07] hover:border-[#f59e0b]/25 transition-all duration-300 flex flex-col"
              style={{ background: "#0d0d18" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{v.icon}</span>
                <h3 className="text-base font-bold text-white group-hover:text-[#f59e0b] transition-colors">{v.industry}</h3>
              </div>

              <div className="mb-5">
                <p className="text-[10px] font-semibold text-[#374151] uppercase tracking-widest mb-3">Common pain points</p>
                <ul className="space-y-1.5">
                  {v.problems.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-red-500/60 text-[10px]">✗</span>
                      <span className="text-[#6b7280] text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/[0.05] mb-5" />

              <div className="mt-auto">
                <p className="text-[10px] font-semibold text-[#f59e0b] uppercase tracking-widest mb-2">What we build</p>
                <p className="text-[#6b7280] text-sm leading-relaxed">{v.solution}</p>
              </div>
            </motion.div>
          ))}

          {/* Don't see yours */}
          <motion.div
            variants={card}
            className="p-6 rounded-xl border border-dashed border-white/[0.08] flex flex-col items-center justify-center text-center min-h-[240px]"
            style={{ background: "transparent" }}
          >
            <span className="text-3xl mb-4">🔍</span>
            <p className="text-white font-bold text-sm mb-2">Don&apos;t see your industry?</p>
            <p className="text-[#4b5563] text-sm leading-relaxed mb-5">
              If your operation runs on chaos and you know there&apos;s a better way — we&apos;d like to talk.
            </p>
            <a
              href="#cta"
              onClick={(e) => { e.preventDefault(); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#080810] text-sm font-bold rounded-full transition-all"
            >
              Let&apos;s Talk →
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
