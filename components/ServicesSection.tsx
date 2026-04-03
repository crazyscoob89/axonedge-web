"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  {
    icon: "📊",
    title: "Live Business Dashboards",
    body: "See your margins, inventory, and job costs in real time. No more waiting for month-end reports.",
  },
  {
    icon: "🤖",
    title: "AI Automation",
    body: "Automated alerts, reorder triggers, anomaly detection, and AI-assisted quoting. Your operations run themselves.",
  },
  {
    icon: "🎯",
    title: "Built For Your Vertical",
    body: "We specialize in metal fabrication, roofing contractors, freight forwarding, and medical practices. Not a generic tool — a custom solution for your industry.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
} as const;

const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 bg-[#0f1623] relative overflow-hidden">
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
            A real-time intelligence system.<br />
            <span className="text-[#f59e0b]">Built for your industry.</span>
          </h2>
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
                  : "border-white/6 bg-[#0a111e] hover:border-[#f59e0b]/20"
              }`}
            >
              {/* Icon */}
              <div className="text-5xl mb-6">{s.icon}</div>

              {/* Heading */}
              <h3 className={`text-xl font-bold mb-4 transition-colors ${
                i === 1 ? "text-[#f59e0b]" : "text-white group-hover:text-[#f59e0b]"
              }`}>{s.title}</h3>

              {/* Body */}
              <p className="text-[#94a3b8] text-base leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
