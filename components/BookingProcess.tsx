
import React from 'react';
import { Search, FileText, CheckCircle2, Plane } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Choose Destination', desc: 'Select your dream location from our vast catalog.' },
  { icon: FileText, title: 'Submit Documents', desc: 'Provide necessary papers for visa and ticketing.' },
  { icon: CheckCircle2, title: 'Confirmation', desc: 'Secure your booking with flexible payment options.' },
  { icon: Plane, title: 'Travel with Comfort', desc: 'Start your journey with our expert guidance.' },
];

const BookingProcess: React.FC = () => {
  return (
    <section className="py-24 bg-[#112240]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-bold mb-4">Easy Journey</h3>
          <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 text-center group">
                <div className="w-20 h-20 bg-[#0a192f] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#d4af37]/20 group-hover:border-[#d4af37] group-hover:scale-110 transition-all duration-300 shadow-2xl">
                  <step.icon className="text-[#d4af37] w-8 h-8" />
                  <div className="absolute -top-2 -right-2 bg-[#d4af37] text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    0{index + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-400 font-light text-sm px-4 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
