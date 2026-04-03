import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AxonEdge Technologies — AI Operations Consulting",
  description:
    "Stop running a $50M business on a $500 software stack. AxonEdge builds real-time intelligence systems — Power BI dashboards + AI automation — custom-built for $20M–$100M SMBs.",
  keywords:
    "AI operations consulting, Power BI dashboards, SMB automation, metal fabrication, roofing, freight forwarding, law firm technology, medical practice automation, AxonEdge",
  openGraph: {
    title: "AxonEdge Technologies — AI Operations Consulting",
    description:
      "We build you a real-time intelligence system — dashboards, AI automation, and operational clarity — custom-built for your industry.",
    type: "website",
    url: "https://axonedge.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0f1623]">{children}</body>
    </html>
  );
}
