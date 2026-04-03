"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PAIN_POINTS = [
  "You're running your operation on spreadsheets, gut instinct, and tribal knowledge",
  "You find out about margin leaks and problems weeks after they happen",
  "Your team is drowning in manual data entry instead of making decisions",
  "You know you need better systems — but off-the-shelf software doesn't fit and enterprise tools cost a fortune",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
} as const;

export default function PainSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pain" className="py-28 bg-[#080810] dot-grid relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/15 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#f59e0b]/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-5">
            Sound Familiar?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            If you&apos;ve ever stared at a spreadsheet<br className="hidden sm:block" />{" "}
            <span className="text-[#6b7280] font-normal">wondering if there&apos;s a better way —</span>
            <br className="hidden sm:block" /> there is.
          </h2>
        </motion.div>

        {/* Pain board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left: pain list */}
          <div className="lg:col-span-2">
            <motion.ul
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-3"
            >
              {PAIN_POINTS.map((p) => (
                <motion.li
                  key={p}
                  variants={item}
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] hover:border-[#f59e0b]/20 transition-all duration-200"
                  style={{ background: "#0d0d18" }}
                >
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(245,158,11,0.12)" }}>
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]"
                      style={{ boxShadow: "0 0 6px rgba(245,158,11,0.5)" }} />
                  </span>
                  <span className="text-[#9ca3af] text-base leading-relaxed">{p}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: credibility card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="rounded-xl p-6 border border-[#f59e0b]/25"
            style={{ background: "rgba(245,158,11,0.05)" }}
          >
            <p className="text-base font-bold text-white leading-relaxed mb-3">
              This isn&apos;t just a big-company problem.
            </p>
            <p className="text-[#6b7280] text-sm leading-relaxed mb-5">
              Whether you&apos;re doing $2M or $20M, if your data is scattered and your decisions are based on gut — you&apos;re leaving money on the table.
            </p>
            <p className="text-sm font-semibold text-white leading-relaxed">
              AxonEdge builds custom intelligence systems in weeks — not years — at a price that makes sense for growing businesses.
            </p>
            <a
              href="#cta"
              onClick={(e) => { e.preventDefault(); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }); }}
              className="mt-5 inline-flex items-center gap-1.5 text-[#f59e0b] text-sm font-semibold hover:underline"
            >
              See if it&apos;s right for you →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
