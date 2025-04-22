
import { Linkedin } from "lucide-react";

const founders = [
  {
    name: "Mohit Srivastava",
    position: "Co-Founder & CEO",
    linkedin: "https://linkedin.com/in/mohit-srivastava",
    image: null
  },
  {
    name: "Priyank Inani",
    position: "Co-Founder & CTO",
    linkedin: "https://linkedin.com/in/priyank-inani",
    image: null
  },
  {
    name: "Utsav Pandey",
    position: "Co-Founder & COO",
    linkedin: "https://linkedin.com/in/utsav-pandey",
    image: null
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-primary overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Meet the Minds Behind Green-Nxt</h2>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Green-Nxt is founded by industry experts passionate about sustainability and financial empowerment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-56 bg-secondary flex items-center justify-center">
                {founder.image ? (
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="h-32 w-32 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent">
                      {founder.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-1">{founder.name}</h3>
                <p className="text-text-secondary mb-4">{founder.position}</p>
                
                <a 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-accent hover:text-text transition-colors"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-text font-medium text-lg mb-6">
            Together, we are building a future where green energy benefits everyone—businesses, investors, and the planet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
