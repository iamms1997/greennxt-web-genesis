
import { Medal, Building, Sun, TrendingUp } from "lucide-react";

const SuccessSection = () => {
  return (
    <section id="success-stories" className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Helping Businesses Save & Scale</h2>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Green-Nxt has already transformed multiple MSMEs by reducing operational costs and making businesses more sustainable. Here's how we make a difference:
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Success Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden relative z-10">
              <div className="aspect-w-4 aspect-h-3 bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                  alt="Textile Factory in Gujarat" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-primary rounded-lg -z-10"></div>
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-accent rounded-full opacity-20 -z-10"></div>
          </div>
          
          {/* Success Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary rounded-full mb-6">
              <Medal className="h-5 w-5 text-accent mr-2" />
              <span className="text-text-secondary font-medium">Case Study</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">
              A Textile Factory in Gujarat
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start bg-primary/50 p-4 rounded-lg">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-text font-medium">Saved 50% on electricity costs from day one without any upfront investment.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-primary/50 p-4 rounded-lg">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Sun className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-text font-medium">Annual savings of ₹2.4 lakhs, totaling ₹24 lakhs over 10 years.</p>
                </div>
              </div>
              
              <div className="flex items-start bg-primary/50 p-4 rounded-lg">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Building className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-text font-medium">Achieved energy independence with zero additional costs beyond the subscription.</p>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-text-secondary">
              Join the wave of MSMEs choosing solar for a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
