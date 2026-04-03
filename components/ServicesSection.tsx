"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  {
    icon:  "📊",
    title: "Live Business Dashboards",
    status: "Online",
    body:  "See your margins, inventory, and job costs in real time. No more waiting for month-end reports.",
    metrics: [
      { label: "Reports generated today", value: "12"     },
      { label: "Data sources connected",  value: "8"      },
      { label: "Last sync",               value: "2m ago" },
    ],
    featured: false,
  },
  {
    icon:  "🤖",
    title: "AI Automation",
    status: "Online",
    body:  "Automated alerts, reorder triggers, anomaly detection, and AI-assisted quoting. Your operations run themselves.",
    metrics: [
      { label: "Alerts fired today",   value: "4"  },
      { label: "Quotes generated",     value: "7"  },
      { label: "Anomalies detected",   value: "2"  },
    ],
    featured: true,
  },
  {
    icon:  "🎯",
    title: "Built For Your Vertical",
    status: "Active",
    body:  "Metal fabrication, roofing, freight forwarding, medical practices. Not a generic tool — a custom solution for your industry.",
    metrics: [
      { label: "Industry",       value: "Metal Fab" },
      { label: "Custom rules",   value: "24"        },
      { label: "Accuracy",       value: "98.7%"     },
    ],
    featured: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const;

const card = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
} as const;

export default function ServicesSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 bg-[#080810] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/15 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#f59e0b]/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-5">
            What We Build
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            A real-time intelligence system.<br />
            <span className="text-[#f59e0b]">Built for your operation.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={card}
              className="group flex flex-col rounded-xl overflow-hidden border transition-all duration-300"
              style={{
                background:   s.featured ? "rgba(245,158,11,0.05)" : "#0d0d18",
                borderColor:  s.featured ? "rgba(245,158,11,0.35)" : "rgba(255,255,255,0.07)",
                boxShadow:    s.featured ? "0 0 40px rgba(245,158,11,0.07)" : "none",
              }}
            >
              {/* Card title bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.025)" }}>
                <span className="text-xl">{s.icon}</span>
                <span className={`text-sm font-bold flex-1 ${s.featured ? "text-[#f59e0b]" : "text-white"}`}>{s.title}</span>
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-[#22c55e]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] dot-blink" />
                  {s.status}
                </span>
              </div>

              {/* Body */}
              <div className="px-5 py-4 flex-1">
                <p className="text-[#6b7280] text-sm leading-relaxed">{s.body}</p>
              </div>

              {/* Metrics */}
              <div className="px-5 pb-5 space-y-2">
                {s.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between border-t border-white/[0.04] pt-2">
                    <span className="text-[#4b5563] text-[11px]">{m.label}</span>
                    <span className={`text-xs font-bold font-mono ${s.featured ? "text-[#f59e0b]" : "text-white"}`}>{m.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
