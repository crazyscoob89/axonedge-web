import Link from "next/link";

export const metadata = {
  title: "Privacy Policy  AxonEdge Technologies",
  description: "Privacy policy for AxonEdge Technologies. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
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
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-[#4b5563] text-sm mb-12">Last updated: April 4, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-[#9ca3af]">
          <section>
            <h2 className="text-white text-lg font-bold mb-3">1. Information We Collect</h2>
            <p className="leading-relaxed">
              When you use our website or contact us through our form, we may collect the following information:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Name and business email address</li>
              <li>Phone number (if provided)</li>
              <li>Company name and industry</li>
              <li>Information you include in your message to us</li>
              <li>Standard web analytics data (page views, browser type, referring pages)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">2. How We Use Your Information</h2>
            <p className="leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Respond to your inquiry and schedule consultations</li>
              <li>Provide and improve our services</li>
              <li>Send relevant communications about our services (you can opt out at any time)</li>
              <li>Analyze website usage to improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">3. Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your personal information. All form submissions are transmitted over encrypted connections (HTTPS). However, no method of electronic transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">5. Cookies</h2>
            <p className="leading-relaxed">
              Our website may use cookies and similar technologies to enhance your browsing experience and collect analytics data. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">6. Your Rights</h2>
            <p className="leading-relaxed">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">7. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">8. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &ldquo;last updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-3">9. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this privacy policy, please contact us:
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
