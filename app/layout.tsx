import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "AxonEdge Technologies | AI-Powered Operations for $10M-$100M Companies",
  description:
    "Custom AI dashboards and automation for $10M-$100M companies. Real-time operations intelligence built in weeks, not years.",
  keywords:
    "AI operations consulting, Power BI dashboards, SMB automation, metal fabrication, roofing contractors, freight forwarding, medical practice automation, AxonEdge, business intelligence, operations dashboard",
  openGraph: {
    title: "AxonEdge Technologies | AI-Powered Operations for $10M-$100M Companies",
    description:
      "Custom AI dashboards and automation for $10M-$100M companies. Built in weeks, not years.",
    type: "website",
    url: "https://axonedge.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#080810]">
        <noscript>
          <style>{`
            [style*="opacity: 0"], [style*="opacity:0"] {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
        {children}
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="69dbb48ed69ee8052a84cf2e"
        strategy="lazyOnload"
      />
      </body>
    </html>
  );
}
