
import { Check, Sun, Battery, Zap, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const MsmeSection = () => {
  return (
    <section id="msme" className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
              No Upfront Cost. Just Savings.
            </h2>
            <p className="text-text-secondary mb-8">
              We help MSMEs switch to solar for free—reducing electricity bills while ensuring uninterrupted power. Our model covers installation, maintenance, and management, so businesses can focus on what matters: growth.
            </p>
            
            <h3 className="text-xl font-bold text-text mb-4">How It Works?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="font-bold text-text">Free Solar Setup</span>
                  <p className="text-text-secondary">No capital investment required.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="font-bold text-text">Immediate 50% Savings</span>
                  <p className="text-text-secondary">Cut electricity costs by half from day one.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="font-bold text-text">Sustainable Growth</span>
                  <p className="text-text-secondary">Lower carbon footprint, higher efficiency.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="font-bold text-text">Hassle-Free Maintenance</span>
                  <p className="text-text-secondary">We handle everything.</p>
                </div>
              </li>
            </ul>
            
            <p className="text-text font-medium mb-6">Your business, now powered by the sun.</p>
            
            <Link to="/msme-calculator" className="btn btn-outline">
              See how much you can save
            </Link>
          </div>
          
          {/* Illustration */}
          <div className="relative">
            <div className="bg-primary rounded-lg p-8 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                  <Sun className="h-12 w-12 text-accent mb-4" />
                  <h4 className="font-bold text-text mb-2">Solar Energy</h4>
                  <p className="text-text-secondary text-sm">Clean, renewable power for your business</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                  <Battery className="h-12 w-12 text-accent mb-4" />
                  <h4 className="font-bold text-text mb-2">Energy Storage</h4>
                  <p className="text-text-secondary text-sm">Uninterrupted power supply</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                  <Zap className="h-12 w-12 text-accent mb-4" />
                  <h4 className="font-bold text-text mb-2">Cost Savings</h4>
                  <p className="text-text-secondary text-sm">Reduce bills by up to 50%</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                  <Wrench className="h-12 w-12 text-accent mb-4" />
                  <h4 className="font-bold text-text mb-2">Maintenance</h4>
                  <p className="text-text-secondary text-sm">Full service and support</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-secondary rounded-lg -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MsmeSection;
