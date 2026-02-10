
import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-[#d4af37] p-2 rounded-lg">
            <Plane className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white uppercase">
            TZ <span className="text-[#d4af37]">Travels</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide uppercase">
          <a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a>
          <a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a>
          <a href="#destinations" className="hover:text-[#d4af37] transition-colors">Destinations</a>
          <a href="#packages" className="hover:text-[#d4af37] transition-colors">Packages</a>
          <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
          <button className="bg-[#d4af37] hover:bg-[#b8860b] text-white px-6 py-2 rounded-full transition-all shadow-lg hover:shadow-[#d4af37]/20 active:scale-95">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full animate-fadeIn">
          <div className="flex flex-col space-y-4 p-6 text-center">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-[#d4af37]">Home</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-[#d4af37]">Services</a>
            <a href="#destinations" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-[#d4af37]">Destinations</a>
            <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-[#d4af37]">Packages</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-[#d4af37]">Contact</a>
            <button className="bg-[#d4af37] text-white px-6 py-3 rounded-lg w-full">Book Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
