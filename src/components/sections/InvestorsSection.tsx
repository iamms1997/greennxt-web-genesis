
import { Check, BarChart, LockKeyhole, DollarSign, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const InvestorsSection = () => {
  return (
    <section id="investors" className="section bg-primary overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Illustration (Left) */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-lg p-8 relative z-10 shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-text text-xl">Investment Growth</h4>
                <span className="text-accent font-bold">+16%</span>
              </div>
              
              <div className="h-60 bg-primary/20 rounded-lg mb-6 flex items-end p-4">
                <div className="w-1/6 h-[20%] bg-secondary mr-2 rounded-t-md"></div>
                <div className="w-1/6 h-[30%] bg-secondary mr-2 rounded-t-md"></div>
                <div className="w-1/6 h-[45%] bg-secondary mr-2 rounded-t-md"></div>
                <div className="w-1/6 h-[60%] bg-secondary mr-2 rounded-t-md"></div>
                <div className="w-1/6 h-[75%] bg-secondary mr-2 rounded-t-md"></div>
                <div className="w-1/6 h-[90%] bg-accent rounded-t-md"></div>
              </div>
              
              <div className="flex justify-between text-sm text-text-secondary">
                <span>Initial Investment</span>
                <span>Return Over Time</span>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="border border-secondary rounded-md p-3">
                  <p className="text-text-secondary text-sm">Annual Return</p>
                  <p className="text-text font-bold text-xl">16%</p>
                </div>
                <div className="border border-secondary rounded-md p-3">
                  <p className="text-text-secondary text-sm">Investment Term</p>
                  <p className="text-text font-bold text-xl">5 Years</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-accent/10 rounded-lg -z-10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20 -z-10"></div>
          </div>
          
          {/* Content (Right) */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
              Invest in Solar. Earn Asset-Backed Returns.
            </h2>
            <p className="text-text-secondary mb-8">
              We make solar investments accessible. Green-Nxt securitizes solar power plants and offers low-risk, high-yield opportunities for retail investors.
            </p>
            
            <h3 className="text-xl font-bold text-text mb-4">Why Invest?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="font-bold text-text">Up to 16% Annual Returns</span>
                  <p className="text-text-secondary">Superior to traditional savings.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="font-bold text-text">Asset-Backed & Secure</span>
                  <p className="text-text-secondary">Your money is tied to real, operational solar plants.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="font-bold text-text">Passive Income</span>
                  <p className="text-text-secondary">Earn returns while supporting the green economy.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="font-bold text-text">Join the Clean Energy Movement</span>
                  <p className="text-text-secondary">Your investment drives sustainability.</p>
                </div>
              </li>
            </ul>
            
            <p className="text-text font-medium mb-6">Green returns for a greener future.</p>
            
            <Link to="/investor-calculator" className="btn btn-outline">
              See how much you can earn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
