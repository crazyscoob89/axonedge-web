"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Briefcase, Shield, User } from "lucide-react";

const WHY_CARDS = [
  {
    icon: <Briefcase className="w-5 h-5 text-[#f59e0b]" />,
    title: "We've Run Operations Too",
    body: "Our founder spent 15+ years managing IT infrastructure for companies doing $10M–$100M. We don't just build dashboards — we understand the operational reality behind the data.",
  },
  {
    icon: <Shield className="w-5 h-5 text-[#f59e0b]" />,
    title: "You Built On Enterprise-Grade Infrastructure",
    body: "We build on Microsoft, AWS, and Azure  the same stack Fortune 500s run. Your data stays secure, your dashboards stay fast, and your operations run on infrastructure that scales with you. No fragile DIY tools.",
  },
  {
    icon: <User className="w-5 h-5 text-[#f59e0b]" />,
    title: "Fixed Price. No Surprises.",
    body: "Every engagement starts with a fixed-price scope. You know exactly what you're getting, what it costs, and when it's done. No hourly billing surprises.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 bg-[#080810] dot-grid relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/15 to-transparent" />
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-[#f59e0b]/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-5">
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Built by operators.<br />
            <span className="text-[#f59e0b]">Not consultants.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left: Founder card */}
          <motion.div
            initial={{ y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-1 rounded-xl p-6 border border-[#f59e0b]/25"
            style={{ background: "rgba(245,158,11,0.05)" }}
          >
            {/* Founder headshot */}
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#f59e0b]/30">
              <Image
                src="/alex-headshot.png"
                alt="Alex Martinez — Founder & CEO"
                width={80}
                height={80}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="text-lg font-bold text-white mb-1">Alex Martinez</h3>
            <p className="text-[#f59e0b] text-sm font-semibold mb-1">Founder & CEO</p>
            <div className="flex items-center gap-1.5 text-[#6b7280] text-xs mb-4">
              <MapPin className="w-3 h-3" />
              South Florida
            </div>

            <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
              15+ years managing IT infrastructure and operations for companies doing $10M&ndash;$100M in revenue. Built and scaled MSP operations from the ground up.
            </p>

            <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
              After watching mid-market companies waste hundreds of thousands on enterprise tools they never fully used  or run critical operations on spreadsheets  Alex built AxonEdge to fill the gap: real intelligence systems, built fast, at a price that makes sense.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Power BI", "AI/ML", "Infrastructure", "Operations"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#f59e0b] border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Why cards */}
          <div className="lg:col-span-2 space-y-4">
            {WHY_CARDS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-xl border border-white/[0.07] hover:border-[#f59e0b]/20 transition-all duration-200"
                style={{ background: "#0d0d18" }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(245,158,11,0.1)" }}>
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-base font-bold mb-1">{c.title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
