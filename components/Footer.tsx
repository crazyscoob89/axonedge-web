"use client";

import { Phone, Mail, MapPin } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/[0.07] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#f59e0b] flex items-center justify-center"
                style={{ boxShadow: "0 0 12px rgba(245,158,11,0.3)" }}>
                <svg width="10" height="14" viewBox="0 0 12 16" fill="none">
                  <path d="M2 2L10 8L2 14" stroke="#080810" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-white text-sm">AxonEdge Technologies</span>
            </div>
            <p className="text-[#4b5563] text-xs leading-relaxed mb-3">
              Custom dashboards + AI automation for $10M&ndash;$100M companies. Built in weeks, not years.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#22c55e] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] dot-blink" />
              All systems operational
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+13057126416" className="flex items-center gap-2 text-[#6b7280] hover:text-[#f59e0b] transition-colors text-sm">
                  <Phone className="w-3.5 h-3.5" />
                  (305) 712-6416
                </a>
              </li>
              <li>
                <a href="mailto:info@axonedge.tech" className="flex items-center gap-2 text-[#6b7280] hover:text-[#f59e0b] transition-colors text-sm">
                  <Mail className="w-3.5 h-3.5" />
                  info@axonedge.tech
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#6b7280] text-sm">
                <MapPin className="w-3.5 h-3.5" />
                South Florida
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "The Problem", href: "#pain" },
                { label: "What We Build", href: "#services" },
                { label: "Industries", href: "#verticals" },
                { label: "About", href: "#about" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#6b7280] hover:text-[#f59e0b] transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Legal */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Connect</h4>
            <ul className="space-y-2.5 mb-6">
              <li>
                <a href="https://www.linkedin.com/company/axonedge" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#6b7280] hover:text-[#f59e0b] transition-colors text-sm">
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://axonedge.tech" className="text-[#6b7280] hover:text-[#f59e0b] transition-colors text-sm">
                  axonedge.tech
                </a>
              </li>
            </ul>

            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-[#4b5563] hover:text-[#f59e0b] transition-colors text-xs">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-[#4b5563] hover:text-[#f59e0b] transition-colors text-xs">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[#374151] text-xs"> 2026 AxonEdge Technologies LLC. All rights reserved.</span>
          <span className="text-[#374151] text-xs">
            Founded by Alex Martinez  15+ years in enterprise IT
          </span>
        </div>
      </div>
    </footer>
  );
}

