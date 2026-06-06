import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgitacaoSection from "@/components/AgitacaoSection";
import ProcessoSection from "@/components/ProcessoSection";
import EntregasSection from "@/components/EntregasSection";
import AutoridadeSection from "@/components/AutoridadeSection";
import QualificacaoSection from "@/components/QualificacaoSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AgitacaoSection />
        <ProcessoSection />
        <EntregasSection />
        <AutoridadeSection />
        <QualificacaoSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
