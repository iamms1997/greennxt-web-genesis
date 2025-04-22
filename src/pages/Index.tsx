
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import MsmeSection from "../components/sections/MsmeSection";
import InvestorsSection from "../components/sections/InvestorsSection";
import SuccessSection from "../components/sections/SuccessSection";
import AboutSection from "../components/sections/AboutSection";
import CTASection from "../components/sections/CTASection";
import { useScrollToSection } from "../hooks/useScrollToSection";

const Index = () => {
  useScrollToSection();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <MsmeSection />
        <InvestorsSection />
        <SuccessSection />
        <AboutSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
