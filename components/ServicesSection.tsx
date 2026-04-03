"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  {
    icon: "📊",
    title: "Live Business Dashboards",
    subtitle: "See everything. In real time. In one place.",
    body: "We connect Power BI to your existing systems — QuickBooks, your ERP, your job management software — and build you a live command center. Margins, inventory, job costs, cash flow. No manual pulling. No end-of-month surprises.",
    bullets: [
      "Custom-built for your workflow — not a generic template",
      "Connects to tools you already use",
      "Real-time margin and job cost visibility",
      "Anomaly alerts before small problems become big ones",
    ],
  },
  {
    icon: "🤖",
    title: "AI Automation",
    subtitle: "Your operations run themselves.",
    body: "We deploy AI automation that monitors your business 24/7 — sending alerts when inventory hits reorder thresholds, flagging jobs that are running over budget, and helping your team generate accurate quotes faster than ever.",
    bullets: [
      "Automated reorder triggers and inventory alerts",
      "Job costing anomaly detection",
      "AI-assisted quoting and estimating",
      "Automated reporting so your team stops pulling numbers manually",
    ],
  },
  {
    icon: "🎯",
    title: "Built for Your Vertical",
    subtitle: "We know your industry. Not a guess — by design.",
    body: "We don't sell a generic platform and call it custom. We've built intelligence stacks specifically for metal fabrication, roofing, freight forwarding, law firms, and medical practices — because the KPIs, workflows, and pain points are completely different in each.",
    bullets: [
      "Industry-specific KPIs and reporting logic",
      "Workflows mapped to how your business actually runs",
      "No translating your business to fit our tool",
      "Built with your ops team, not over them",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 bg-[#050d1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/15 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#f59e0b]/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/8 text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-5">
            What We Build
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            A custom intelligence stack.<br />
            <span className="text-[#f59e0b]">Built on what you already have.</span>
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            No ripping out your systems. No six-month implementation projects. We connect to your existing tools and build the operational visibility layer on top.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              variants={card}
              className={`group flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                i === 1
                  ? "border-[#f59e0b]/30 bg-[#f59e0b]/5 hover:border-[#f59e0b]/50"
                  : "border-white/6 bg-[#07111f] hover:border-[#f59e0b]/20"
              }`}
            >
              {/* Icon */}
              <div className="text-4xl mb-5">{s.icon}</div>

              {/* Heading */}
              <h3 className={`text-xl font-bold mb-1.5 transition-colors ${
                i === 1 ? "text-[#f59e0b]" : "text-white group-hover:text-[#f59e0b]"
              }`}>{s.title}</h3>
              <p className="text-sm font-semibold text-[#94a3b8] mb-4">{s.subtitle}</p>

              {/* Body */}
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{s.body}</p>

              {/* Bullets */}
              <ul className="mt-auto space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#f59e0b]/15 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                    </span>
                    <span className="text-[#94a3b8] text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 text-center"
        >
          <a
            href="mailto:info@axonedge.tech"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#050d1a] font-bold rounded-xl text-base transition-all duration-200 shadow-xl shadow-[#f59e0b]/20 hover:shadow-[#f59e0b]/35"
          >
            Book Your Free Operations Audit →
          </a>
          <p className="text-xs text-[#94a3b8] mt-3">No commitment. No pitch deck. Just a 30-minute conversation about your ops.</p>
        </motion.div>

      </div>
    </section>
  );
}
