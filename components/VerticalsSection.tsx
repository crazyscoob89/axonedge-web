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
    icon: "⚖️",
    industry: "Law Firms",
    problems: ["Billable hour leakage", "Matter profitability mystery", "Client intake bottlenecks"],
    solution: "Attorney productivity dashboards, matter-level P&L visibility, and automated intake workflows that keep your pipeline clean and accounted for.",
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
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function VerticalsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="verticals" className="py-28 bg-[#050d1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/8 text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-5">
            Industries We Serve
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Not a generic tool.<br />
            <span className="text-[#f59e0b]">Your industry. Your logic.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#94a3b8] max-w-3xl mb-14 leading-relaxed"
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
              className="group p-7 rounded-2xl border border-white/6 bg-[#07111f] hover:border-[#f59e0b]/25 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#f59e0b] transition-colors">{v.industry}</h3>
              </div>

              {/* Problems */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-3">Common pain points</p>
                <ul className="space-y-1.5">
                  {v.problems.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 shrink-0 text-red-400/70 text-xs">✗</span>
                      <span className="text-[#94a3b8] text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="border-t border-white/5 mb-5" />

              {/* Solution */}
              <div className="mt-auto">
                <p className="text-xs font-semibold text-[#f59e0b] uppercase tracking-widest mb-2">What we build</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{v.solution}</p>
              </div>
            </motion.div>
          ))}

          {/* Coming soon card */}
          <motion.div
            variants={card}
            className="p-7 rounded-2xl border border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center text-center min-h-[260px]"
          >
            <span className="text-3xl mb-4">🔍</span>
            <p className="text-white font-bold mb-2">Don&apos;t see your industry?</p>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
              If you&apos;re running a business with real operational complexity and disconnected data, we&apos;d like to talk.
            </p>
            <a
              href="mailto:info@axonedge.tech"
              className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#050d1a] text-sm font-bold rounded-lg transition-all"
            >
              Let&apos;s Talk →
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
