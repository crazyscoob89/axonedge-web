"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowPopup(false), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[#150f1f] border border-[#386aff]/20 text-white placeholder-[#606080] focus:outline-none focus:border-[#386aff] focus:ring-1 focus:ring-[#386aff]/30 transition-all duration-200 text-sm";

  return (
    <section id="contact" className="py-32 bg-[#150f1f] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#386aff]/5 blur-3xl pointer-events-none" />

      {/* Thank You Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-8 right-8 z-50 max-w-sm w-full"
          >
            <div className="bg-[#0d0d1a] border border-[#386aff]/40 rounded-2xl p-6 shadow-2xl shadow-[#386aff]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#386aff]/20 flex items-center justify-center text-xl flex-shrink-0">
                  
                </div>
                <div>
                  <div className="font-bold text-white text-base mb-1">Message sent!</div>
                  <div className="text-[#a0a0b8] text-sm">
                    Thanks for reaching out. We&apos;ll get back to you at <span className="text-[#386aff]">{formData.email || "your email"}</span> shortly.
                  </div>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-[#606080] hover:text-white transition-colors ml-auto flex-shrink-0"
                >
                  
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial={{ x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#386aff]/20 bg-[#386aff]/10 text-[#386aff] text-xs font-semibold tracking-widest uppercase mb-6">
              Get in Touch
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Let&apos;s Build{" "}
              <span className="bg-gradient-to-r from-[#386aff] to-[#a78bfa] bg-clip-text text-transparent">Something</span>
            </h2>
            <p className="text-[#a0a0b8] text-lg mb-10 leading-relaxed">
              Have an app idea? Need AI integrated into your business? Looking for reliable IT services? Let&apos;s talk.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#a0a0b8]">
                <div className="w-10 h-10 rounded-lg bg-[#386aff]/10 border border-[#386aff]/20 flex items-center justify-center text-lg"></div>
                <div>
                  <div className="text-xs text-[#606080] mb-0.5">Email</div>
                  <a href="mailto:alexm@axonedge.tech" className="text-white hover:text-[#386aff] transition-colors font-medium">alexm@axonedge.tech</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#a0a0b8]">
                <div className="w-10 h-10 rounded-lg bg-[#386aff]/10 border border-[#386aff]/20 flex items-center justify-center text-lg"></div>
                <div>
                  <div className="text-xs text-[#606080] mb-0.5">Location</div>
                  <span className="text-white font-medium">Miami, Florida</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl p-10 space-y-6 border border-white/10">
              <div>
                <label className="block text-xs font-semibold text-[#a0a0b8] uppercase tracking-widest mb-2">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Alex Martinez" required className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#a0a0b8] uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#a0a0b8] uppercase tracking-widest mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us what you're building..." required rows={5} className={`${inputClass} resize-none`} />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-5 bg-[#386aff] hover:bg-[#4f7eff] disabled:opacity-60 text-white font-bold rounded-xl transition-all duration-200 glow-blue hover:glow-blue-strong flex items-center justify-center gap-2 text-base"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message "}
              </button>
              {status === "error" && (
                <p className="text-center text-xs text-red-400">
                  Something went wrong. Email us directly at{" "}
                  <a href="mailto:alexm@axonedge.tech" className="text-[#386aff] hover:underline">alexm@axonedge.tech</a>
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
