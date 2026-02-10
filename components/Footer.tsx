
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Plane } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a192f] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-[#d4af37] p-2 rounded-lg">
                <Plane className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white uppercase">
                TZ <span className="text-[#d4af37]">Travels</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
              Premium travel agency providing high-end global travel solutions. Experience the world like never before with TZ Travels & Tours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-lg hover:text-[#d4af37] transition-all"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-lg hover:text-[#d4af37] transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-lg hover:text-[#d4af37] transition-all"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-lg hover:text-[#d4af37] transition-all"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-[#d4af37] transition-all">Home</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-all">Services</a></li>
              <li><a href="#destinations" className="hover:text-[#d4af37] transition-all">Destinations</a></li>
              <li><a href="#packages" className="hover:text-[#d4af37] transition-all">Tour Packages</a></li>
              <li><a href="#contact" className="hover:text-[#d4af37] transition-all">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Visa Assistance</li>
              <li>Flight Bookings</li>
              <li>Hotel Reservations</li>
              <li>Umrah & Hajj</li>
              <li>Travel Insurance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-6 font-light">Subscribe for luxury travel deals and latest news.</p>
            <div className="flex bg-[#112240] rounded-xl overflow-hidden p-1">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent px-4 py-2 w-full focus:outline-none"
              />
              <button className="bg-[#d4af37] px-6 py-2 rounded-lg font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2024 TZ Travels & Tours. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
