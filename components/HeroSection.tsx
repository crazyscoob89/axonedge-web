"use client";

import { motion } from "framer-motion";

const BOARD_ROWS = [
  { dot: "#22c55e", label: "Inventory Alert",           detail: "Reorder triggered for Steel Sheet 4x8",      time: "2m ago"  },
  { dot: "#f59e0b", label: "Job Cost Anomaly",           detail: "$4,200 variance flagged on Project #1047",   time: "5m ago"  },
  { dot: "#22c55e", label: "Dashboard Updated",          detail: "847 new data points synced",                 time: "8m ago"  },
  { dot: "#22c55e", label: "AI Quote Generated",         detail: "Response time: 1.4s",                        time: "11m ago" },
  { dot: "#22c55e", label: "Margin Report Ready",        detail: "Q1 summary delivered to team",               time: "15m ago" },
  { dot: "#22c55e", label: "Scheduling Conflict",        detail: "Auto-resolved — crew reassigned",            time: "19m ago" },
  { dot: "#f59e0b", label: "Billing Leakage Detected",   detail: "3 unbilled hours on Matter #882",            time: "23m ago" },
  { dot: "#22c55e", label: "Supply Order Triggered",     detail: "Roofing materials reordered automatically",  time: "28m ago" },
  { dot: "#22c55e", label: "Patient Follow-up Sent",     detail: "12 reminders dispatched",                    time: "34m ago" },
  { dot: "#f59e0b", label: "Revenue Cycle Alert",        detail: "4 claims pending > 30 days",                 time: "40m ago" },
  { dot: "#22c55e", label: "Freight Delay Flagged",      detail: "Shipment #4421 rerouted successfully",       time: "47m ago" },
  { dot: "#22c55e", label: "Weekly Intelligence Digest", detail: "Delivered to team",                          time: "1h ago"  },
  { dot: "#f59e0b", label: "Overtime Alert",             detail: "Crew hours exceeded threshold on Job #14",   time: "1h ago"  },
  { dot: "#22c55e", label: "New Quote Request",          detail: "AI response in 1.2s",                        time: "1h ago"  },
  { dot: "#22c55e", label: "Anomaly Cleared",            detail: "False positive resolved automatically",      time: "2h ago"  },
  { dot: "#22c55e", label: "Dashboard Sync",             detail: "Connected 6 data sources",                   time: "2h ago"  },
  { dot: "#f59e0b", label: "Cost Overrun Warning",       detail: "Job #338 at 94% of budget",                  time: "2h ago"  },
  { dot: "#22c55e", label: "Compliance Check",           detail: "All records current — no action needed",     time: "3h ago"  },
];

const STATS = [
  { number: "847",    label: "Data Points Synced Daily" },
  { number: "< 2s",  label: "AI Response Time"         },
  { number: "99.9%", label: "System Uptime"            },
  { number: "40hrs+",label: "Saved Per Month"          },
];

export default function HeroSection() {
  const scrollToCTA = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080810] dot-grid pt-16">

      {/* Ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] rounded-full bg-[#f59e0b]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6  w-[500px] h-[400px] rounded-full bg-[#f59e0b]/[0.03] blur-3xl pointer-events-none" />

      {/* ── TWO-COLUMN HERO ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/[0.07] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] dot-blink" />
              <span className="text-[#f59e0b] text-xs font-semibold tracking-widest uppercase">AI Operations — Live</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.15rem] xl:text-[3.5rem] font-black tracking-tight leading-[1.08] mb-6 text-white">
              Built for the Business Owner<br className="hidden sm:block" />{" "}
              <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                Who&apos;s Done Guessing.
              </span>
            </h1>

            {/* Sub */}
            <p className="text-lg sm:text-xl text-[#6b7280] leading-relaxed mb-8 max-w-xl">
              We build custom intelligence systems —{" "}
              <span className="text-[#9ca3af]">real-time dashboards, AI automation, and operational clarity</span>{" "}
              — so you can stop staring at spreadsheets at midnight and start making decisions with confidence.
            </p>

            {/* CTA */}
            <a
              href="#cta"
              onClick={scrollToCTA}
              className="btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#080810] font-bold rounded-full text-base transition-all duration-200 mb-8"
            >
              Book Your Free Operations Audit →
            </a>

            {/* Micro trust badges */}
            <div className="flex flex-wrap gap-3">
              {["Built in weeks", "Your data, your system"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#6b7280] text-xs font-medium">
                  <span className="text-[#22c55e] text-[10px]">✓</span> {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — OPS BOARD */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          >
            <div
              className="rounded-2xl overflow-hidden board-shimmer"
              style={{
                background: "#0d0d18",
                border: "1px solid rgba(245,158,11,0.22)",
                boxShadow: "0 0 60px rgba(245,158,11,0.07), 0 24px 64px rgba(0,0,0,0.6)",
              }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]"
                style={{ background: "rgba(255,255,255,0.025)" }}>
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs font-semibold tracking-widest uppercase text-[#6b7280]">AxonEdge Ops Board</span>
                <span className="ml-auto flex items-center gap-1.5 text-[10px] text-[#22c55e] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] dot-blink" />LIVE
                </span>
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-[8px_1fr_auto] gap-3 px-4 py-2 border-b border-white/[0.04]">
                <span />
                <span className="text-[10px] uppercase tracking-widest text-[#374151] font-semibold">Event</span>
                <span className="text-[10px] uppercase tracking-widest text-[#374151] font-semibold">Time</span>
              </div>

              {/* Rows — auto-scrolling live feed */}
              <style>{`
                @keyframes ops-scroll {
                  0%   { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }
                .ops-scroll-inner {
                  animation: ops-scroll 36s linear infinite;
                }
                .ops-scroll-inner:hover {
                  animation-play-state: paused;
                }
              `}</style>
              <div style={{ height: '220px', overflow: 'hidden' }} className="relative">
                <div className="ops-scroll-inner divide-y divide-white/[0.04]">
                  {[...BOARD_ROWS, ...BOARD_ROWS].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[8px_1fr_auto] gap-3 px-4 py-2.5 items-center"
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: row.dot, boxShadow: `0 0 6px ${row.dot}88` }}
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-white text-xs font-semibold">{row.label}</span>
                          <span className="text-[#4b5563] text-xs">—</span>
                          <span className="text-[#6b7280] text-xs truncate">{row.detail}</span>
                        </div>
                      </div>
                      <span className="text-[#374151] text-[10px] font-mono whitespace-nowrap">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 border-t border-white/[0.05] flex items-center justify-between"
                style={{ background: "rgba(255,255,255,0.015)" }}>
                <span className="text-[10px] text-[#374151] tracking-wider">Powered by AxonEdge Intelligence</span>
                <span className="text-[10px] text-[#22c55e] font-semibold">● All systems nominal</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── STATS BAR ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.9 }}
        className="relative z-10 w-full border-t border-white/[0.06]"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-6 px-4">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">{s.number}</span>
                <span className="text-[#4b5563] text-xs font-medium mt-1 text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
