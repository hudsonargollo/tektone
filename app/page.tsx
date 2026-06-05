import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HistoriaSection from "@/components/HistoriaSection";
import TriadeSection from "@/components/TriadeSection";
import ValoresSection from "@/components/ValoresSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HistoriaSection />
        <TriadeSection />
        <ValoresSection />
        <CTASection />
      </main>
    </>
  );
}
