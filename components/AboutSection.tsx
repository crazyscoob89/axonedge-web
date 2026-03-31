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
    highlight: "Cortex AI",
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
    <section id="about" className="py-24 bg-[#0d0d1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#386aff]/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#6d40ff]/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#386aff]/20 bg-[#386aff]/10 text-[#386aff] text-xs font-semibold tracking-widest uppercase mb-4">
            What We Do
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-[#a0a0b8] text-lg max-w-2xl mx-auto">
            Three core disciplines. One mission: give you technology you actually own.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:animate-float inline-block">
                {service.icon}
              </div>

              {/* Badge */}
              <div className="inline-block px-2.5 py-1 rounded-md bg-[#386aff]/15 text-[#386aff] text-xs font-semibold mb-4">
                {service.highlight}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[#a0a0b8] leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#386aff] to-[#a78bfa] transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
