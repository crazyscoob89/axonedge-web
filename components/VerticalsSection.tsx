"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Home, Truck, Stethoscope, Search } from "lucide-react";

const VERTICALS = [
  {
    icon: <Factory className="w-6 h-6 text-[#f59e0b]" />,
    industry: "Metal Fabrication",
    featured: true,
    problems: ["Job costing that's always off", "Inventory you can't trust", "Quotes built from memory"],
    solution: "Real-time job cost tracking, automated material reorder triggers, and AI-assisted quoting that pulls from your actual cost history.",
    bullets: [
      "Real-time job cost vs. estimate tracking",
      "Automated material reorder triggers",
      "Quote generation in < 2 seconds",
    ],
  },
  {
    icon: <Home className="w-6 h-6 text-[#f59e0b]" />,
    industry: "Roofing & Construction",
    featured: false,
    problems: ["No visibility into crew productivity", "Margin bleed on large jobs", "Manual estimating that takes hours"],
    solution: "Live job performance dashboards, per-job margin tracking, and automated estimating workflows.",
    bullets: [
      "Live project margin dashboards",
      "Crew scheduling with conflict resolution",
      "Automated supply reordering",
    ],
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-[#f59e0b]" />,
    industry: "Medical Practices",
    featured: false,
    problems: ["Revenue cycle blind spots", "No proactive scheduling optimization", "Collections you chase manually"],
    solution: "Payer mix dashboards, scheduling efficiency analytics, and automated collections follow-up workflows.",
    bullets: [
      "Claims aging dashboard (30/60/90 day)",
      "Automated patient follow-up sequences",
      "Billing leakage detection and alerts",
    ],
  },
  {
    icon: <Truck className="w-6 h-6 text-[#f59e0b]" />,
    industry: "Freight & Logistics",
    featured: false,
    problems: ["Load profitability you calculate after the fact", "No early warning on at-risk shipments", "Carrier data in five places"],
    solution: "Live load profitability dashboards, automated anomaly alerts, and a single source of truth for carrier and customer data.",
    bullets: [
      "Real-time shipment status dashboards",
      "Delay prediction and proactive rerouting",
      "Automated customer status updates",
    ],
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
          initial={{ y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-5">
            Built For Your Industry
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            We Don&apos;t Do Generic.<br />
            <span className="text-[#f59e0b]">We Build For How You Actually Work.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-base text-[#6b7280] max-w-3xl mb-14 leading-relaxed"
        >
          Every industry has its own KPIs, its own ops rhythms, and its own version of &ldquo;the thing everyone knows but nobody tracks.&rdquo; We build for the specifics  not a one-size-fits-all dashboard with your logo on it.
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
              className={`group p-6 rounded-xl border transition-all duration-300 flex flex-col ${
                v.featured
                  ? "border-[#f59e0b]/35 md:col-span-2 xl:col-span-1"
                  : "border-white/[0.07] hover:border-[#f59e0b]/25"
              }`}
              style={{
                background: v.featured ? "rgba(245,158,11,0.05)" : "#0d0d18",
                boxShadow: v.featured ? "0 0 40px rgba(245,158,11,0.07)" : "none",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                {v.icon}
                <h3 className="text-base font-bold text-white group-hover:text-[#f59e0b] transition-colors">{v.industry}</h3>
                {v.featured && (
                  <span className="ml-auto text-[10px] font-semibold text-[#f59e0b] uppercase tracking-widest px-2 py-0.5 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/[0.08]">
                    Featured
                  </span>
                )}
              </div>

              <div className="mb-5">
                <p className="text-[10px] font-semibold text-[#374151] uppercase tracking-widest mb-3">Common pain points</p>
                <ul className="space-y-1.5">
                  {v.problems.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-red-500/60 text-[10px]"></span>
                      <span className="text-[#6b7280] text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/[0.05] mb-5" />

              <div className="mt-auto">
                <p className="text-[10px] font-semibold text-[#f59e0b] uppercase tracking-widest mb-2">What we build</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-3">{v.solution}</p>
                <ul className="space-y-1">
                  {v.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[#9ca3af] text-xs">
                      <span className="text-[#22c55e] mt-0.5"></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Don't see yours */}
          <motion.div
            variants={card}
            className="p-6 rounded-xl border border-dashed border-white/[0.08] flex flex-col items-center justify-center text-center min-h-[240px]"
            style={{ background: "transparent" }}
          >
            <Search className="w-8 h-8 text-[#4b5563] mb-4" />
            <p className="text-white font-bold text-sm mb-2">Don&apos;t see your industry?</p>
            <p className="text-[#4b5563] text-sm leading-relaxed mb-5">
              If your operation runs on chaos and you know there&apos;s a better way  we&apos;d like to talk.
            </p>
            <a
              href="#cta"
              onClick={(e) => { e.preventDefault(); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#080810] text-sm font-bold rounded-full transition-all"
            >
              Let&apos;s Talk 
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
