"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    stat: "100%",
    label: "Ownership",
    description: "Your data, your code, your product. We build it — you own it forever.",
    icon: "🔑",
  },
  {
    stat: "$0",
    label: "Lock-in",
    description: "No SaaS dependency, no vendor control. Deploy anywhere. Migrate anytime.",
    icon: "🔓",
  },
  {
    stat: "Full",
    label: "Stack",
    description: "Mobile, AI, web, infrastructure. One team, every layer, zero handoffs.",
    icon: "⚡",
  },
];

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="py-32 bg-[#0d0d1a] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #386aff,
            #386aff 1px,
            transparent 1px,
            transparent 30px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#386aff]/20 bg-[#386aff]/10 text-[#386aff] text-xs font-semibold tracking-widest uppercase mb-4">
            The AxonEdge Difference
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Why <span className="bg-gradient-to-r from-[#386aff] to-[#a78bfa] bg-clip-text text-transparent">AxonEdge?</span>
          </h2>
          <p className="text-[#a0a0b8] text-lg max-w-2xl mx-auto">
            In a world of subscription traps and vendor lock-in, we built something different.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative rounded-2xl p-10 text-center group cursor-default border border-white/10 hover:border-[#386aff]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#386aff] to-[#a78bfa] transition-all duration-500 rounded-full" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#386aff]/5 to-transparent rounded-2xl" />

              <div className="relative z-10 text-4xl mb-4 group-hover:animate-float inline-block">
                {item.icon}
              </div>
              <div className="relative z-10 text-5xl font-black gradient-text mb-1">
                {item.stat}
              </div>
              <div className="relative z-10 text-xl font-bold text-white mb-3">
                {item.label}
              </div>
              <p className="relative z-10 text-[#a0a0b8] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl border border-[#386aff]/20 bg-gradient-to-r from-[#386aff]/10 to-[#6d40ff]/10 p-10 sm:p-14 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready to own your technology?
          </h3>
          <p className="text-[#a0a0b8] mb-8 max-w-xl mx-auto">
            Tell us what you&apos;re building. We&apos;ll help you ship it — and make sure it&apos;s yours.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#386aff] hover:bg-[#4f7eff] text-white font-bold rounded-xl transition-all duration-200 glow-blue hover:glow-blue-strong text-lg"
          >
            Let&apos;s Build Together
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
