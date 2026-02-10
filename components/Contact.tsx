
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-bold mb-4">Contact Us</h3>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Get in Touch with Our Experts</h2>
              <p className="text-gray-400 mt-6 font-light text-lg">
                Have questions or ready to plan your next adventure? Our team is available 24/7 to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#112240] p-4 rounded-xl">
                  <Phone className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us Anytime</p>
                  <p className="text-white font-bold text-lg">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#112240] p-4 rounded-xl">
                  <Mail className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Address</p>
                  <p className="text-white font-bold text-lg">info@tztravels.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#112240] p-4 rounded-xl">
                  <MapPin className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Our Office</p>
                  <p className="text-white font-bold text-lg">Blue Area, Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            <button className="flex items-center space-x-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl">
              <MessageCircle />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          <div className="glass p-10 rounded-[2.5rem] relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-[#112240] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-[#112240] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#d4af37] transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Destination of Interest</label>
                <select className="w-full bg-[#112240] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#d4af37] transition-all appearance-none">
                  <option>UAE (Dubai)</option>
                  <option>Turkey</option>
                  <option>Saudi Arabia (Umrah)</option>
                  <option>Europe</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your travel plans..." 
                  className="w-full bg-[#112240] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#d4af37] transition-all"
                ></textarea>
              </div>

              <button className="w-full bg-[#d4af37] hover:bg-[#b8860b] text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all group shadow-lg">
                <span>Send Inquiry</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
