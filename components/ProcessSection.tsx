"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    title: "Free Operations Audit",
    body: "We start with a 30-minute conversation about how your business actually runs  the tools, the workflows, the blind spots. We'll tell you exactly what's possible before you commit to anything.",
    tag: "No cost. No obligation.",
  },
  {
    number: "02",
    title: "Custom Intelligence Blueprint",
    body: "We map your data sources, identify the highest-value dashboards and automations for your specific operation, and deliver a clear plan for what we'll build and what it will do for you.",
    tag: "Your ops. Your roadmap.",
  },
  {
    number: "03",
    title: "We Build It",
    body: "Our team connects your existing systems, builds your Power BI dashboards, and deploys the AI automation layer. We work alongside your team  not over them  so nothing breaks and nobody gets left behind.",
    tag: "Connected in weeks, not months.",
  },
  {
    number: "04",
    title: "You Run Clearer",
    body: "Your team has real-time visibility into margins, inventory, and job performance. Alerts fire before problems escalate. Decisions get made with data instead of gut. You scale with confidence.",
    tag: "Ongoing support included.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-28 bg-[#07111f] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/15 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#f59e0b]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/8 text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-5">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            From first call to full clarity.<br />
            <span className="text-[#94a3b8] font-normal">Here&apos;s what to expect.</span>
          </h2>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            We keep it simple because your time is valuable. No bloated discovery phases, no 90-page proposals. Just a clear path from where you are to where you need to be.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute left-[2.75rem] top-8 bottom-8 w-px bg-gradient-to-b from-[#f59e0b]/30 via-[#f59e0b]/15 to-transparent" />

          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className="flex gap-6 group"
              >
                {/* Number bubble */}
                <div className="shrink-0 w-[3.5rem] h-[3.5rem] rounded-xl border border-[#f59e0b]/25 bg-[#f59e0b]/8 flex items-center justify-center group-hover:border-[#f59e0b]/50 group-hover:bg-[#f59e0b]/12 transition-all">
                  <span className="text-[#f59e0b] font-black text-sm">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#f59e0b] transition-colors">{step.title}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-xs font-medium">
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-[#94a3b8] leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
