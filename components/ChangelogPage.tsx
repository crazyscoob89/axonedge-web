"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type ChangelogEntry = {
  date: string;
  title: string;
  type: "Launch" | "Update" | "Fix" | "Milestone" | "New Feature" | "Admin";
  summary: string;
  items: string[];
  clientNote?: string;
};

const TYPE_STYLES: Record<ChangelogEntry["type"], string> = {
  Launch:       "bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30",
  Milestone:    "bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/30",
  "New Feature":"bg-[#3b82f6]/15 text-[#3b82f6] border border-[#3b82f6]/30",
  Update:       "bg-[#8b5cf6]/15 text-[#8b5cf6] border border-[#8b5cf6]/30",
  Fix:          "bg-[#ef4444]/15 text-[#ef4444] border border-[#ef4444]/30",
  Admin:        "bg-white/[0.07] text-[#9ca3af] border border-white/10",
};

type Props = {
  clientName: string;
  projectName: string;
  logoUrl?: string;
  entries: ChangelogEntry[];
};

export default function ChangelogPage({ clientName, projectName, entries }: Props) {
  return (
    <main className="bg-[#080810] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 px-4 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] dot-blink" />
              Live Updates
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
              {projectName}
            </h1>
            <p className="text-[#6b7280] text-base">
              Everything that&apos;s been built and delivered for{" "}
              <span className="text-[#d1d5db] font-medium">{clientName}</span>.
              Updated every time something changes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Entries */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.06]" />

            <div className="space-y-12">
              {entries.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#f59e0b] border-2 border-[#080810] shadow-[0_0_10px_rgba(245,158,11,0.5)]" />

                  {/* Card */}
                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-200">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-[#6b7280] text-xs font-medium">{entry.date}</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${TYPE_STYLES[entry.type]}`}>
                        {entry.type}
                      </span>
                    </div>

                    <h2 className="text-white font-bold text-lg mb-2 leading-snug">{entry.title}</h2>
                    <p className="text-[#9ca3af] text-sm mb-4 leading-relaxed">{entry.summary}</p>

                    {entry.items.length > 0 && (
                      <ul className="space-y-2">
                        {entry.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-[#d1d5db]">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f59e0b] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {entry.clientNote && (
                      <div className="mt-4 pt-4 border-t border-white/[0.06]">
                        <p className="text-xs text-[#6b7280] italic">{entry.clientNote}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
