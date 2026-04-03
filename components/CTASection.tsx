"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TRUST_POINTS = [
  { icon: "🕐", text: "30-minute conversation. That's all we ask." },
  { icon: "🚫", text: "No commitment. No proposal you didn't ask for." },
  { icon: "💬", text: "We'll tell you exactly what's possible — and what isn't." },
  { icon: "🔒", text: "Confidential. What you share stays between us." },
];

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="py-28 bg-[#07111f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />

      {/* Amber glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-[#f59e0b]/6 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/8 text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-6">
            Ready to See Clearly?
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Your first step is<br />
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
              a free conversation.
            </span>
          </h2>

          <p className="text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free Operations Audit and we&apos;ll show you exactly what your data could tell you — and what it&apos;s costing you to not know.
          </p>

          {/* Trust grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left max-w-2xl mx-auto">
            {TRUST_POINTS.map((t) => (
              <div key={t.text} className="flex items-start gap-3 px-4 py-3 rounded-xl border border-white/6 bg-[#050d1a]">
                <span className="text-xl shrink-0">{t.icon}</span>
                <span className="text-[#94a3b8] text-sm leading-relaxed">{t.text}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="mailto:info@axonedge.tech"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#050d1a] font-black rounded-xl text-lg transition-all duration-200 shadow-2xl shadow-[#f59e0b]/25 hover:shadow-[#f59e0b]/40 hover:-translate-y-0.5"
          >
            Book Your Free Operations Audit →
          </a>
          <p className="text-xs text-[#94a3b8] mt-4">
            Email us at{" "}
            <a href="mailto:info@axonedge.tech" className="text-[#f59e0b] hover:underline">info@axonedge.tech</a>
            {" "}— we respond within one business day.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
