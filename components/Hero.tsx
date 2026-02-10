
import React from 'react';
import Globe3D from './Globe';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden blue-gradient">
      {/* Content */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block glass px-4 py-1 rounded-full border-[#d4af37]/30 border mb-4">
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em]">Luxury Travel Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Explore the World with <br />
            <span className="gold-gradient">TZ Travels & Tours</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-lg font-light leading-relaxed">
            Visa • Tickets • Tours • Hotels • Umrah & Hajj <br />
            Experience premium global travel services tailored just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#d4af37] hover:bg-[#b8860b] text-white px-10 py-4 rounded-full font-semibold transition-all shadow-xl hover:shadow-[#d4af37]/30">
              Explore Destinations
            </button>
            <button className="glass hover:bg-white/10 text-white px-10 py-4 rounded-full font-semibold transition-all border border-white/20">
              Contact Us
            </button>
          </div>
          
          <div className="flex items-center space-x-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-2xl font-bold text-white">15k+</p>
              <p className="text-xs uppercase text-gray-400">Happy Travelers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs uppercase text-gray-400">Destinations</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-xs uppercase text-gray-400">Years Experience</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[400px] md:h-[600px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe3D />
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00ced1]/10 rounded-full blur-[120px] -z-0"></div>
    </section>
  );
};

export default Hero;
