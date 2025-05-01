
import { Link } from "react-router-dom";
import { Building, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Join Green-Nxt</h2>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Be Part of the Change
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MSMEs */}
          <div className="bg-primary rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-text mb-4">MSMEs</h3>
            <p className="text-text-secondary mb-6">
              Switch to solar at zero cost.
            </p>
            <Link to="/msme" className="btn btn-outline w-full">
              Learn More
            </Link>
          </div>
          
          {/* Investors */}
          <div className="bg-primary rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-text mb-4">Investors</h3>
            <p className="text-text-secondary mb-6">
              Secure high-yield, asset-backed returns.
            </p>
            <Link to="/investors" className="btn btn-outline w-full">
              Learn More
            </Link>
          </div>
          
          {/* Partners */}
          <div className="bg-primary rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-text mb-4">Partners</h3>
            <p className="text-text-secondary mb-6">
              Let's scale the green energy revolution together.
            </p>
            <Link to="/partners" className="btn btn-outline w-full">
              Collaborate
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold text-text mb-6">
            Join Green-Nxt today. Let's power the future, together.
          </h4>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSewRvfNN9EaSRmqtFpAL2hQ7-SXJ7icE_-n1B-4Ix9tFFOFSw/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary text-lg px-8 py-4"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
