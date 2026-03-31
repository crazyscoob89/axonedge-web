"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const apps = [
  {
    name: "El Fichazo",
    description: "Cuban dominoes — the classic way",
    platform: "iOS & Google Play",
    status: "launch",
    icon: "🁣",
    emoji: "🎲",
    color: "#386aff",
  },
  {
    name: "Cubilete",
    description: "Cuban dice game for 2–6 players",
    platform: "Mobile",
    status: "soon",
    icon: "🎯",
    emoji: "🎰",
    color: "#6d40ff",
  },
  {
    name: "Parqués",
    description: "The Colombian board game, digital",
    platform: "Mobile",
    status: "soon",
    icon: "♟️",
    emoji: "♟️",
    color: "#a78bfa",
  },
  {
    name: "Lotería Real",
    description: "Mexican bingo reinvented",
    platform: "Mobile",
    status: "soon",
    icon: "🃏",
    emoji: "🃏",
    color: "#386aff",
  },
  {
    name: "La Vaca",
    description: "Group savings made simple",
    platform: "Mobile",
    status: "soon",
    icon: "💰",
    emoji: "💰",
    color: "#6d40ff",
  },
  {
    name: "Soundboard Latino",
    description: "Latin sounds & memes, on demand",
    platform: "Mobile",
    status: "soon",
    icon: "🎵",
    emoji: "🎵",
    color: "#a78bfa",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function AppsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apps" className="py-24 bg-[#150f1f] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#386aff]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#386aff]/20 bg-[#386aff]/10 text-[#386aff] text-xs font-semibold tracking-widest uppercase mb-4">
            App Studio
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">Apps</span>
          </h2>
          <p className="text-[#a0a0b8] text-lg max-w-2xl mx-auto">
            Building the digital playground for the Latin community — and the
            world.
          </p>
        </motion.div>

        {/* App grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {apps.map((app) => (
            <motion.div
              key={app.name}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 group hover:scale-[1.03] transition-all duration-300 cursor-default relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${app.color}15 0%, transparent 70%)`,
                }}
              />

              {/* App icon */}
              <div className="relative z-10 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${app.color}20`, border: `1px solid ${app.color}30` }}
                >
                  {app.emoji}
                </div>
              </div>

              {/* App info */}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{app.name}</h3>
                  {app.status === "launch" ? (
                    <span className="shrink-0 px-2.5 py-1 rounded-full bg-[#386aff] text-white text-xs font-bold animate-pulse-glow">
                      Launching
                    </span>
                  ) : (
                    <span className="shrink-0 px-2.5 py-1 rounded-full bg-white/10 text-[#a0a0b8] text-xs font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-[#a0a0b8] text-sm leading-relaxed mb-4">
                  {app.description}
                </p>

                <div className="flex items-center gap-2">
                  {app.status === "launch" ? (
                    <>
                      <span
                        className="text-xs font-medium px-2 py-1 rounded-md"
                        style={{
                          background: `${app.color}15`,
                          color: app.color,
                        }}
                      >
                        📱 App Store
                      </span>
                      <span
                        className="text-xs font-medium px-2 py-1 rounded-md"
                        style={{
                          background: `${app.color}15`,
                          color: app.color,
                        }}
                      >
                        🤖 Google Play
                      </span>
                    </>
                  ) : (
                    <span className="text-xs text-[#a0a0b8]">
                      🔔 In development
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-[#a0a0b8] text-sm mt-10"
        >
          12+ apps in the pipeline. The Latin app store doesn&apos;t exist yet.{" "}
          <span className="text-[#386aff] font-semibold">We&apos;re building it.</span>
        </motion.p>
      </div>
    </section>
  );
}
