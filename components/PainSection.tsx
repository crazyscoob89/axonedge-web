"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PAIN_POINTS = [
  {
    icon: "📊",
    title: "You're flying blind on margins",
    body: "You know you're making money — but you don't know exactly where, how much, or why it changes month to month. The data is there. It's just buried in three different places.",
  },
  {
    icon: "⚙️",
    title: "Your ops run on tribal knowledge",
    body: "Key decisions live in someone's head — or a spreadsheet only one person can read. When that person is out, everything slows down or breaks.",
  },
  {
    icon: "🔄",
    title: "You're reactive, not predictive",
    body: "You find out about a problem after it's already cost you. Inventory runs short. A job goes over budget. A client slips through the cracks. You fix it. Then it happens again.",
  },
  {
    icon: "📉",
    title: "Your tools don't talk to each other",
    body: "QuickBooks over here. A spreadsheet over there. A job board somewhere else. Nothing connects. Reconciling it all costs you hours every week — and you still don't have a complete picture.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function PainSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pain" className="py-28 bg-[#07111f] relative overflow-hidden">
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
            You built a $20M+ business.<br />
            <span className="text-[#94a3b8] font-normal">Your systems didn&apos;t grow with it.</span>
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            Most growing businesses hit a wall — not because of strategy, not because of effort, but because their operational tools were designed for companies a fraction of their size. When the business outgrows the tools, gut instinct fills the gap. And gut instinct doesn&apos;t scale.
          </p>
        </motion.div>

        {/* Pain points grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {PAIN_POINTS.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="group p-7 rounded-2xl border border-white/6 bg-[#050d1a] hover:border-[#f59e0b]/20 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors">{p.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl border border-[#f59e0b]/15 bg-[#f59e0b]/5 text-center"
        >
          <p className="text-xl sm:text-2xl font-bold text-white">
            The problem isn&apos;t your data — it&apos;s that your data isn&apos;t working for you.
          </p>
          <p className="text-[#94a3b8] mt-3 text-base">
            We build the intelligence layer your business should have had years ago.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
