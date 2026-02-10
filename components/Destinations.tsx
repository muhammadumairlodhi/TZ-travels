
import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { DESTINATIONS } from '../constants';

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h3 className="text-[#00ced1] uppercase tracking-[0.3em] text-sm font-bold mb-4">World Tour</h3>
            <h2 className="text-4xl md:text-5xl font-bold">Popular Destinations</h2>
          </div>
          <p className="text-gray-400 max-w-md font-light">
            From the futuristic skyline of Dubai to the historical gems of Europe, explore the most sought-after locations with TZ Travels.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] h-[450px] cursor-pointer"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="flex items-center space-x-1 text-[#d4af37] mb-1">
                      <Star size={14} fill="#d4af37" />
                      <span className="text-sm font-bold">{dest.rating}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">{dest.name}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[#00ced1] font-bold text-lg">{dest.price}</p>
                    <p className="text-xs text-gray-300 uppercase tracking-widest">Starting Price</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
                  <MapPin size={14} />
                  <span>Explore Landmarks</span>
                </div>

                <button className="w-full py-3 bg-[#d4af37] text-white rounded-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border border-white/20 hover:border-[#d4af37] text-white px-8 py-3 rounded-full transition-all uppercase text-sm tracking-widest font-bold">
            See All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
