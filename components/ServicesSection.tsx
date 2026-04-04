"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const VERTICALS_CYCLE = ["Metal Fab", "Roofing", "Freight", "Medical"];

const SERVICES = [
  {
    icon:  "📊",
    title: "Live Business Dashboards",
    status: "Online",
    body:  "See your margins, inventory, and job costs in real time. No more waiting for month-end reports.",
    metrics: [
      { label: "Reports generated today", value: "847"       },
      { label: "Data sources connected",  value: "24"        },
      { label: "Last sync",               value: "14 sec ago" },
      { label: "Uptime",                  value: "99.9%"     },
    ],
    featured: false,
    cycleIndustry: false,
    quote: "",
  },
  {
    icon:  "🤖",
    title: "AI Automation",
    status: "Online",
    body:  "Automated alerts, reorder triggers, anomaly detection, and AI-assisted quoting. Your operations run themselves.",
    metrics: [
      { label: "Alerts fired today",   value: "47" },
      { label: "Quotes generated",     value: "31" },
      { label: "Anomalies detected",   value: "12" },
    ],
    featured: true,
    cycleIndustry: false,
    quote: "",
  },
  {
    icon:  "✅",
    title: "Proven In The Field",
    status: "Online",
    body:  "Real results from real deployments. Every number below is from AxonEdge's actual work this past month — not a demo, not a projection.",
    metrics: [
      { label: "Automations built",   value: "27"       },
      { label: "Campaigns deployed",  value: "27"       },
      { label: "Docs delivered",      value: "59"       },
      { label: "Build time",          value: "< 30 days" },
      { label: "Client satisfaction", value: "100%"     },
    ],
    featured: false,
    cycleIndustry: false,
    quote: "From zero to fully operational — workflows, dashboards, automations, and training — in under 30 days.",
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

  const [verticalIdx, setVerticalIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVerticalIdx((prev) => (prev + 1) % VERTICALS_CYCLE.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
                    <span className={`text-xs font-bold font-mono ${s.featured ? "text-[#f59e0b]" : "text-white"}`}>
                      {m.value === "CYCLE" ? VERTICALS_CYCLE[verticalIdx] : m.value}
                    </span>
                  </div>
                ))}
                {s.quote ? (
                  <blockquote className="mt-3 border-l-2 border-[#22c55e]/50 pl-3 text-[11px] text-[#6b7280] italic leading-relaxed">
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
