"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="py-28 bg-[#0a111e] relative overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Ready to see what your business<br />
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
              actually looks like in real time?
            </span>
          </h2>

          {/* CTA button */}
          <a
            href="mailto:info@axonedge.tech"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#0f1623] font-black rounded-xl text-lg transition-all duration-200 shadow-2xl shadow-[#f59e0b]/25 hover:shadow-[#f59e0b]/40 hover:-translate-y-0.5 mb-6"
          >
            Book Your Free Operations Audit →
          </a>

          <p className="text-lg text-[#94a3b8] mt-4">
            No pitch. No pressure. Just clarity.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
