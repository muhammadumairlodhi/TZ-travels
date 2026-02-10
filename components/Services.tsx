
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a192f]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-bold mb-4">Our Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Premium Travel Services</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl group hover:border-[#d4af37]/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="bg-[#112240] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <IconComponent className="text-[#d4af37] w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>
                <button className="mt-6 text-[#d4af37] font-semibold text-sm uppercase tracking-wider flex items-center space-x-2 hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <LucideIcons.ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
