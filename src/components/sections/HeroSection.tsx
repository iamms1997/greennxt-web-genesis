
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("msme");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-primary z-0"></div>
      <div className="absolute top-24 left-10 w-72 h-72 bg-secondary rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-24 right-10 w-80 h-80 bg-accent rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container-custom relative z-10 my-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
            Powering MSMEs. <br/> Empowering Investors.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-3xl mx-auto">
            Green-Nxt is reshaping the future of energy. We provide zero-cost solar solutions for MSMEs while creating a high-yield, asset-backed investment opportunity for individuals. A win-win for businesses, investors, and the planet.
          </p>
          <button className="btn btn-primary text-lg px-8 py-4">
            Join the Green Revolution
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer" onClick={scrollToNext}>
        <ChevronDown className="h-10 w-10 text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;
