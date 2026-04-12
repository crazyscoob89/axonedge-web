import Link from "next/link";

export const metadata = {
  title: "Terms of Service  AxonEdge Technologies",
  description: "Terms of service for AxonEdge Technologies.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#080810] min-h-screen">
      {/* Nav bar */}
      <nav className="border-b border-white/[0.06] bg-[#080810]/90" style={{ backdropFilter: "blur(20px)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#f59e0b] flex items-center justify-center">
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                <path d="M2 2L10 8L2 14" stroke="#080810" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">AxonEdge</span>
          </Link>
          <Link href="/" className="text-[#6b7280] hover:text-white text-sm transition-colors">
             Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Terms of Service</h1>
        <p className="text-[#4b5563] text-sm mb-12">Last updated: April 4, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-[#9ca3af]">
          <section>
            <h2 className="text-white text-lg font-bold mb-3">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the AxonEdge Technologies website (axonedge.tech) and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">2. Services</h2>
            <p className="leading-relaxed">
              AxonEdge Technologies provides custom AI dashboard development, business intelligence solutions, and operational automation services for mid-market companies. Specific deliverables, timelines, and pricing are defined in individual client agreements.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">3. Client Engagements</h2>
            <p className="leading-relaxed">
              All client engagements are governed by separate service agreements that specify scope of work, deliverables, timeline, pricing, and payment terms. These Terms of Service govern use of our website and general interactions with our company.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              The content, design, and code of this website are the property of AxonEdge Technologies LLC. Client deliverables (dashboards, automations, and custom systems) are owned by the client upon full payment, as specified in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">5. Satisfaction Guarantee</h2>
            <p className="leading-relaxed">
              AxonEdge offers a 30-day satisfaction guarantee on implementation services. If you do not see actionable insights from your deployed system within the first 30 days of going live, we will refund your implementation fee. Specific terms and conditions of the guarantee are outlined in your service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              AxonEdge Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">7. Confidentiality</h2>
            <p className="leading-relaxed">
              We treat all client data and business information as confidential. We do not share client data with third parties except as required to deliver our services or as required by law. Specific confidentiality terms are covered in client service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">8. Governing Law</h2>
            <p className="leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">9. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the &ldquo;last updated&rdquo; date on this page.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">10. Contact</h2>
            <p className="leading-relaxed">
              For questions about these terms, please contact us:
            </p>
            <ul className="list-none space-y-1 mt-2">
              <li>Email: <a href="mailto:info@axonedge.tech" className="text-[#f59e0b] hover:underline">info@axonedge.tech</a></li>
              <li>Phone: <a href="tel:+19546092334" className="text-[#f59e0b] hover:underline">(954) 609-2334</a></li>
              <li>Location: South Florida</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
