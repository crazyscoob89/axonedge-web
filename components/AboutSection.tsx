"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "📱",
    title: "Mobile Apps",
    description:
      "Consumer mobile apps for iOS and Android. Games, tools, and platforms built for the Latin market and beyond.",
    highlight: "iOS & Android",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "Custom AI systems that plug into your business. From ticket automation to natural language data queries.",
    highlight: "ARGUS AI",
  },
  {
    icon: "💼",
    title: "IT Services",
    description:
      "Managed IT services for growing businesses. Infrastructure, support, and strategy.",
    highlight: "Managed IT",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-[#0d0d1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#386aff]/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#6d40ff]/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
          ref={ref}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#386aff]/20 bg-[#386aff]/10 text-[#386aff] text-xs font-semibold tracking-widest uppercase mb-4">
            What We Do
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4">
            What We <span className="bg-gradient-to-r from-[#386aff] to-[#a78bfa] bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-[#a0a0b8] text-lg max-w-2xl mx-auto">
            Three core disciplines. One mission: give you technology you actually own.
          </p>
        </motion.div>

        {/* Service cards — border-only, spacious */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="relative rounded-2xl p-10 group cursor-default border border-white/10 hover:border-[#386aff]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#386aff] to-[#a78bfa] transition-all duration-500 rounded-full" />

              {/* Very subtle bg on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#386aff]/5 to-transparent rounded-2xl" />

              {/* Icon */}
              <div className="relative z-10 text-5xl mb-6 group-hover:animate-float inline-block">
                {service.icon}
              </div>

              {/* Badge */}
              <div className="relative z-10 inline-block px-2.5 py-1 rounded-md bg-[#386aff]/15 text-[#386aff] text-xs font-semibold mb-4">
                {service.highlight}
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="relative z-10 text-[#a0a0b8] leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
