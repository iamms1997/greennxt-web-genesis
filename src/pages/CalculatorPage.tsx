
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calculator from "../components/Calculator";
import { ArrowLeft } from "lucide-react";

interface CalculatorPageProps {
  type: "msme" | "investor";
}

const CalculatorPage = ({ type }: CalculatorPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <Link to="/" className="inline-flex items-center text-text-secondary hover:text-accent mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {type === "msme" 
                ? "See How Much You Can Save" 
                : "Calculate Your Investment Returns"}
            </h1>
            <p className="text-text-secondary max-w-3xl mx-auto">
              {type === "msme"
                ? "Estimate your potential savings with Green-Nxt's zero-cost solar solution."
                : "Explore your potential returns with Green-Nxt's solar investment opportunities."}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Calculator type={type} />
            
            <div className="mt-12 text-center">
              <p className="text-text-secondary mb-6">
                {type === "msme"
                  ? "Ready to start saving? Let's discuss your specific energy needs."
                  : "Ready to invest? Let's talk about your investment goals."}
              </p>
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CalculatorPage;
