"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "30-min discovery call",
    body:  "We listen. You talk. No pitch deck.",
  },
  {
    n: "02",
    title: "Custom intelligence build",
    body:  "Built on your data, your workflows, your operation.",
  },
  {
    n: "03",
    title: "Live in weeks",
    body:  "We deploy, monitor, and keep improving.",
  },
];

const VERTICALS_OPTIONS = [
  "Metal Fabrication",
  "Roofing",
  "Freight Forwarding",
  "Medical Practice",
  "Other",
];

export default function CTASection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      name:     (form.elements.namedItem("name")     as HTMLInputElement).value,
      email:    (form.elements.namedItem("email")    as HTMLInputElement).value,
      phone:    (form.elements.namedItem("phone")    as HTMLInputElement).value,
      vertical: (form.elements.namedItem("vertical") as HTMLSelectElement).value,
      message:  (form.elements.namedItem("message")  as HTMLTextAreaElement).value,
    };

    try {
      await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });
    } catch {
      // fire-and-forget — still show success
    }
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-28 bg-[#080810] dot-grid relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[600px] rounded-full bg-[#f59e0b]/[0.04] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── LEFT ── */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/[0.07] text-[#f59e0b] text-xs font-semibold tracking-widest uppercase mb-6">
                Book Your Audit
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                Your Business Intelligence<br />System Is Ready to Build.
              </h2>

              <p className="text-[#6b7280] text-base leading-relaxed mb-10 max-w-md">
                Book a free 30-min operations audit. We&apos;ll map out exactly where time and money are slipping through the cracks — and show you what a custom intelligence system would look like for your business.
              </p>

              {/* Steps */}
              <div className="space-y-5">
                {STEPS.map((s) => (
                  <div key={s.n} className="flex items-start gap-4">
                    <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-black text-[#080810] bg-[#f59e0b]">
                      {s.n}
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">{s.title}</p>
                      <p className="text-[#4b5563] text-sm mt-0.5">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[#374151] text-sm">
                Or email us directly:{" "}
                <a href="mailto:info@axonedge.tech" className="text-[#f59e0b] hover:underline font-medium">
                  info@axonedge.tech
                </a>
              </p>
            </div>

            {/* ── RIGHT — FORM ── */}
            <div
              className="rounded-2xl overflow-hidden border border-white/[0.08]"
              style={{ background: "#0d0d18" }}
            >
              {/* Form title bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]"
                style={{ background: "rgba(255,255,255,0.025)" }}>
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" style={{ boxShadow: "0 0 6px #22c55e88" }} />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#6b7280]">Free Operations Audit — No Obligation</span>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center px-8 py-16">
                  <span className="text-4xl mb-4">✅</span>
                  <h3 className="text-white text-xl font-black mb-2">You&apos;re in.</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    We&apos;ll reach out within one business day to schedule your audit.
                    <br />Check your inbox — it&apos;s coming from info@axonedge.tech.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">

                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#4b5563] uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-[#f59e0b]">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Alex Martinez"
                      className="w-full px-4 py-2.5 rounded-lg text-white text-sm placeholder-[#374151] outline-none focus:border-[#f59e0b]/50 transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#4b5563] uppercase tracking-wider mb-1.5">
                      Business Email <span className="text-[#f59e0b]">*</span>
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="you@yourcompany.com"
                      className="w-full px-4 py-2.5 rounded-lg text-white text-sm placeholder-[#374151] outline-none focus:border-[#f59e0b]/50 transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#4b5563] uppercase tracking-wider mb-1.5">
                      Phone <span className="text-[#374151]">(optional)</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-lg text-white text-sm placeholder-[#374151] outline-none focus:border-[#f59e0b]/50 transition-colors"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    />
                  </div>

                  {/* Vertical */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#4b5563] uppercase tracking-wider mb-1.5">
                      Primary Vertical <span className="text-[#f59e0b]">*</span>
                    </label>
                    <select
                      name="vertical"
                      required
                      defaultValue=""
                      className="w-full px-4 py-2.5 rounded-lg text-white text-sm outline-none focus:border-[#f59e0b]/50 transition-colors appearance-none"
                      style={{ background: "#131320", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <option value="" disabled>Select your industry…</option>
                      {VERTICALS_OPTIONS.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#4b5563] uppercase tracking-wider mb-1.5">
                      Tell us about your business
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="What does your operation look like? What's eating your team's time right now?"
                      className="w-full px-4 py-2.5 rounded-lg text-white text-sm placeholder-[#374151] outline-none focus:border-[#f59e0b]/50 transition-colors resize-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 rounded-full font-black text-[#080810] text-base transition-all duration-200 disabled:opacity-70"
                    style={{
                      background:  "#f59e0b",
                      boxShadow:   "0 0 24px rgba(245,158,11,0.35)",
                    }}
                  >
                    {sending ? "Sending…" : "Book My Free Operations Audit →"}
                  </button>

                  <p className="text-center text-[#374151] text-xs pt-1">
                    No spam. No pressure. Just clarity.
                  </p>
                </form>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
