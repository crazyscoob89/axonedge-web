"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PAIN_POINTS = [
  "You're running a multi-million dollar operation on QuickBooks and gut instinct",
  "You find out about margin leaks weeks after they happen",
  "Your team is drowning in manual data entry instead of making decisions",
  "You know you need better systems — but enterprise software costs a fortune and takes years to implement",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
} as const;

export default function PainSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pain" className="py-28 bg-[#0a111e] relative overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/8 text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-5">
            Sound Familiar?
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
            Sound familiar?
          </h2>
        </motion.div>

        {/* Pain points list */}
        <motion.ul
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-4 max-w-3xl mb-16"
        >
          {PAIN_POINTS.map((p) => (
            <motion.li
              key={p}
              variants={item}
              className="flex items-start gap-4 p-6 rounded-2xl border border-white/6 bg-[#0f1623] hover:border-[#f59e0b]/20 transition-all duration-300"
            >
              <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#f59e0b]/15 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              </span>
              <span className="text-[#cbd5e1] text-base leading-relaxed">{p}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Credibility bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-8 rounded-2xl border border-[#f59e0b]/15 bg-[#f59e0b]/5"
        >
          <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
            AxonEdge builds custom intelligence systems in weeks, not years — at a fraction of enterprise cost.
          </p>
          <p className="text-[#94a3b8] mt-4 text-base leading-relaxed">
            Built specifically for the $20M–$100M business that&apos;s been left behind by both enterprise vendors and generic IT companies.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
