"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How much does this cost?",
    a: "The enterprise market charges $500K+ for implementations like this, plus $5K+/month per user. We don't. Our implementations are flat-fee $25K$50K depending on scope, with ongoing support starting at $2,500/month  flat, never per-user. You'll get an exact number after your free operations audit. No surprises, no hidden seat fees.",
  },
  {
    q: "How long until we're live?",
    a: "Most clients go from kickoff to live dashboard in 4 weeks. Complex deployments with multiple data sources may take 68 weeks.",
  },
  {
    q: "Do we need to replace our existing software?",
    a: "No. We connect to your existing tools  QuickBooks, Excel, your ERP, whatever you're using. We make your data work together, not throw it away.",
  },
  {
    q: "What if it doesn't work for us?",
    a: "Every engagement starts with a free 30-minute operations audit and a fixed-price scope, so you know exactly what you're getting before you commit. We stand behind our work  if we ever miss a deliverable in the scope, we fix it on our dime. No surprises, no hidden fees, no hourly billing creep.",
  },
  {
    q: "Who actually builds this?",
    a: "AxonEdge was founded by Alex Martinez, who spent 15+ years managing IT infrastructure for companies doing $10M&ndash;$100M. Every system is built by our core team  not outsourced to contractors.",
  },
  {
    q: "Can I talk to a current client?",
    a: "Yes. We'll connect you with a reference during the evaluation process.",
  },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: 16 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-white/[0.07] rounded-xl overflow-hidden transition-all duration-200 hover:border-[#f59e0b]/20"
      style={{ background: "#0d0d18" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-white text-sm sm:text-base font-bold pr-4">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#f59e0b] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60" : "max-h-0"}`}
      >
        <p className="px-6 pb-5 text-[#6b7280] text-sm leading-relaxed">
          {faq.a}
        </p>
      </div>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-28 bg-[#080810] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/15 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        <motion.div
          initial={{ y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-5">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {inView && (
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
