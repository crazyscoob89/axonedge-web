"use client";

import { motion } from "framer-motion";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[#050d1a] border-t border-[#f59e0b]/8 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#f59e0b] flex items-center justify-center">
                <svg width="10" height="14" viewBox="0 0 12 16" fill="none">
                  <path d="M2 2L10 8L2 14" stroke="#050d1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-white">AxonEdge Technologies</span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              AI Operations Consulting for growing businesses. We turn your data into decisions.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-4">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "The Problem", href: "#pain" },
                { label: "What We Build", href: "#services" },
                { label: "How It Works", href: "#process" },
                { label: "Industries", href: "#verticals" },
              ].map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-[#94a3b8] hover:text-[#f59e0b] transition-colors text-sm text-left"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-4">Get in Touch</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@axonedge.tech"
                className="flex items-center gap-2.5 text-sm text-[#94a3b8] hover:text-[#f59e0b] transition-colors">
                <span className="text-base">📧</span>
                info@axonedge.tech
              </a>
              <a href="https://axonedge.tech"
                className="flex items-center gap-2.5 text-sm text-[#94a3b8] hover:text-[#f59e0b] transition-colors">
                <span className="text-base">🌐</span>
                axonedge.tech
              </a>
              <a href="mailto:info@axonedge.tech"
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-[#f59e0b] hover:bg-[#fbbf24] text-[#050d1a] text-sm font-bold rounded-lg transition-all w-fit">
                Book Free Audit →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569]">
          <span>© 2026 AxonEdge Technologies, LLC. All rights reserved.</span>
          <span>Miami, Florida · Built with Next.js · Deployed on Vercel</span>
        </div>

      </div>
    </footer>
  );
}
