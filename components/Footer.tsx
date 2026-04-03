"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0f1623] border-t border-[#f59e0b]/8 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#475569]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#f59e0b] flex items-center justify-center">
              <svg width="10" height="14" viewBox="0 0 12 16" fill="none">
                <path d="M2 2L10 8L2 14" stroke="#0f1623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold text-white">AxonEdge Technologies</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#475569]">
            <a href="https://axonedge.tech" className="hover:text-[#f59e0b] transition-colors">axonedge.tech</a>
            <span>·</span>
            <a href="mailto:info@axonedge.tech" className="hover:text-[#f59e0b] transition-colors">info@axonedge.tech</a>
            <span>·</span>
            <span>© 2026 AxonEdge Technologies LLC</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
