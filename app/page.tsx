import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import VerticalsSection from "@/components/VerticalsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050d1a]">
      <Navbar />
      <HeroSection />
      <PainSection />
      <ServicesSection />
      <ProcessSection />
      <VerticalsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
