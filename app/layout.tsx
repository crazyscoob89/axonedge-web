import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AxonEdge Technologies — Operational Clarity. Built for Your Business.",
  description:
    "AxonEdge turns your QuickBooks, spreadsheets, and gut instinct into a real-time intelligence system. Power BI dashboards + AI automation for SMBs doing $20M–$100M/year.",
  keywords:
    "AI operations consulting, Power BI dashboards, SMB automation, metal fabrication, roofing, freight forwarding, law firm technology, medical practice automation, AxonEdge",
  openGraph: {
    title: "AxonEdge Technologies — Operational Clarity. Built for Your Business.",
    description:
      "We turn your existing tools into a real-time intelligence system — custom Power BI dashboards + AI automation for businesses doing $20M–$100M/year.",
    type: "website",
    url: "https://axonedge.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#050d1a]">{children}</body>
    </html>
  );
}
