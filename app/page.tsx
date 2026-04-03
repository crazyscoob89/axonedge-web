import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0f1623]">
      <Navbar />
      <HeroSection />
      <PainSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
