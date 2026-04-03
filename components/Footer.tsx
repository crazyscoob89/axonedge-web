"use client";

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/[0.07] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo + copyright */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#f59e0b] flex items-center justify-center"
              style={{ boxShadow: "0 0 12px rgba(245,158,11,0.3)" }}>
              <svg width="10" height="14" viewBox="0 0 12 16" fill="none">
                <path d="M2 2L10 8L2 14" stroke="#080810" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="font-bold text-white text-sm">AxonEdge Technologies</span>
              <span className="text-[#374151] text-xs ml-2">© 2026</span>
            </div>
          </div>

          {/* Center links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#374151]">
            <a href="https://axonedge.tech" className="hover:text-[#f59e0b] transition-colors">axonedge.tech</a>
            <span>·</span>
            <a href="mailto:info@axonedge.tech" className="hover:text-[#f59e0b] transition-colors">info@axonedge.tech</a>
          </div>

          {/* Status */}
          <div className="flex items-center gap-1.5 text-xs text-[#22c55e] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] dot-blink" />
            All systems operational
          </div>

        </div>
      </div>
    </footer>
  );
}
