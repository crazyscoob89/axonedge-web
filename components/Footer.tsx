"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0a0712] border-t border-[#386aff]/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#386aff] flex items-center justify-center glow-blue">
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L10 8L2 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-sm">AxonEdge Technologies</div>
              <div className="text-xs text-[#606080]">Build. Ship. Own.</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#a0a0b8]">
            <a href="#apps" className="hover:text-white transition-colors">Apps</a>
            <a href="#about" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-[#606080] text-center md:text-right">
            <div>© 2026 AxonEdge Technologies, LLC</div>
            <div className="mt-0.5">All rights reserved.</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#404060]">
          <span>Built with Next.js · Deployed on Vercel</span>
          <span>
            <a href="mailto:alexm@axonedge.tech" className="hover:text-[#386aff] transition-colors">
              alexm@axonedge.tech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
