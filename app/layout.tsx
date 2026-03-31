import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AxonEdge Technologies — Build. Ship. Own.",
  description:
    "AxonEdge Technologies builds mobile apps, AI systems, and technology solutions that you own — no lock-in, no middlemen.",
  keywords: "mobile apps, AI solutions, IT services, technology, AxonEdge",
  openGraph: {
    title: "AxonEdge Technologies — Build. Ship. Own.",
    description:
      "Mobile apps, AI systems, and technology solutions. No lock-in. No middlemen.",
    type: "website",
    url: "https://axonedge.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
