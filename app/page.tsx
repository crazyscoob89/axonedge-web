import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntegrationsBar from "@/components/IntegrationsBar";
import PainSection from "@/components/PainSection";
import ServicesSection from "@/components/ServicesSection";
import VerticalsSection from "@/components/VerticalsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#080810]">
      <Navbar />
      <HeroSection />
      <IntegrationsBar />
      <PainSection />
      <ServicesSection />
      <VerticalsSection />
      <AboutSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
