
import { Link } from "react-router-dom";
import { Sun, Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-accent mr-2" />
              <span className="font-poppins font-bold text-2xl text-text">Green<span className="text-accent">Nxt</span></span>
            </div>
            <p className="text-text-secondary mb-4">Powering MSMEs. Empowering Investors. A win-win for businesses, investors, and the planet.</p>
            <div className="flex space-x-3">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text text-xl font-poppins font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-text-secondary hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/#msme" className="text-text-secondary hover:text-accent transition-colors">Solar for MSMEs</Link></li>
              <li><Link to="/#investors" className="text-text-secondary hover:text-accent transition-colors">Investor Relations</Link></li>
              <li><Link to="/#success-stories" className="text-text-secondary hover:text-accent transition-colors">Success Stories</Link></li>
              <li><Link to="/#about" className="text-text-secondary hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-text text-xl font-poppins font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-accent mt-1 mr-3 h-5 w-5 shrink-0" />
                <span className="text-text-secondary">123 Solar Way, Green City, India 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-accent mr-3 h-5 w-5 shrink-0" />
                <span className="text-text-secondary">+91 1234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-accent mr-3 h-5 w-5 shrink-0" />
                <span className="text-text-secondary">info@greennxt.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-text text-xl font-poppins font-semibold mb-5">Newsletter</h4>
            <p className="text-text-secondary mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full rounded-md border border-secondary bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button type="submit" className="btn btn-primary w-full">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GreenNxt. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-text-secondary text-sm hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-text-secondary text-sm hover:text-accent transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-text-secondary text-sm hover:text-accent transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
