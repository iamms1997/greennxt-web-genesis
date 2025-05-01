
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Sun className="h-8 w-8 text-accent mr-2" />
            <span className="font-poppins font-bold text-2xl text-text">Green<span className="text-accent">Nxt</span></span>
          </Link>
          <p className="hidden md:block ml-4 text-sm text-text-secondary">Green Tech Company</p>
        </div>
        
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-poppins text-text hover:text-accent transition-colors">Home</Link>
          <Link to="/#msme" className="font-poppins text-text hover:text-accent transition-colors">MSMEs</Link>
          <Link to="/#investors" className="font-poppins text-text hover:text-accent transition-colors">Investors</Link>
          <Link to="/#about" className="font-poppins text-text hover:text-accent transition-colors">About</Link>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSewRvfNN9EaSRmqtFpAL2hQ7-SXJ7icE_-n1B-4Ix9tFFOFSw/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Contact Us
          </a>
        </nav>
        
        <button onClick={toggleMenu} className="block md:hidden text-text">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="font-poppins text-text hover:text-accent transition-colors py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/#msme" className="font-poppins text-text hover:text-accent transition-colors py-2" onClick={toggleMenu}>MSMEs</Link>
            <Link to="/#investors" className="font-poppins text-text hover:text-accent transition-colors py-2" onClick={toggleMenu}>Investors</Link>
            <Link to="/#about" className="font-poppins text-text hover:text-accent transition-colors py-2" onClick={toggleMenu}>About</Link>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSewRvfNN9EaSRmqtFpAL2hQ7-SXJ7icE_-n1B-4Ix9tFFOFSw/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary w-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
