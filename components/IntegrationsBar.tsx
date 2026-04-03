"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TOOLS = [
  "QuickBooks", "Excel", "Power BI", "Google Sheets",
  "Salesforce", "Slack", "Microsoft Teams", "NetSuite",
];

export default function IntegrationsBar() {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="border-y border-white/[0.06] bg-[#080810]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[10px] font-semibold tracking-widest uppercase text-[#374151] mb-5"
        >
          Works with your existing tools
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {TOOLS.map((t) => (
            <span
              key={t}
              className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#6b7280] text-xs font-medium hover:border-[#f59e0b]/30 hover:text-[#9ca3af] transition-all duration-200"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
