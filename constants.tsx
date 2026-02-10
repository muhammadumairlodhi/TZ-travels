
import React from 'react';
import { Plane, Globe, Hotel, Map, ShieldCheck, HeartPulse, CreditCard, Briefcase, Users, Gem } from 'lucide-react';
import { Service, Destination, Package, Testimonial } from './types';

export const SERVICES: Service[] = [
  { id: '1', title: 'Visa Services', description: 'Expert assistance for all types of international visas.', icon: 'CreditCard' },
  { id: '2', title: 'Air Tickets', description: 'Book affordable domestic and international flights.', icon: 'Plane' },
  { id: '3', title: 'Hotel Booking', description: 'Luxury and budget-friendly stays worldwide.', icon: 'Hotel' },
  { id: '4', title: 'Tour Packages', description: 'Curated international and local tour experiences.', icon: 'Map' },
  { id: '5', title: 'Umrah & Hajj', description: 'Spiritual journeys with premium accommodation.', icon: 'Globe' },
  { id: '6', title: 'Travel Insurance', description: 'Comprehensive coverage for worry-free travel.', icon: 'ShieldCheck' },
];

export const DESTINATIONS: Destination[] = [
  { id: '1', name: 'UAE (Dubai)', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', price: 'From $499', rating: 4.9 },
  { id: '2', name: 'Turkey (Istanbul)', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800', price: 'From $599', rating: 4.8 },
  { id: '3', name: 'Malaysia', image: 'https://images.unsplash.com/photo-1524397057410-1e775ed476f3?auto=format&fit=crop&q=80&w=800', price: 'From $450', rating: 4.7 },
  { id: '4', name: 'Saudi Arabia', image: 'https://images.unsplash.com/photo-1580628446934-154967add8a1?auto=format&fit=crop&q=80&w=800', price: 'From $799', rating: 5.0 },
  { id: '5', name: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800', price: 'From $899', rating: 4.6 },
  { id: '6', name: 'Switzerland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800', price: 'From $1200', rating: 4.9 },
];

export const PACKAGES: Package[] = [
  { id: '1', name: 'Alpine Dreams Family Tour', type: 'Family', price: '$2,500', duration: '10 Days', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' },
  { id: '2', name: 'Santorini Honeymoon Escape', type: 'Honeymoon', price: '$3,800', duration: '7 Days', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800' },
  { id: '3', name: 'Dubai Business Retreat', type: 'Business', price: '$1,900', duration: '5 Days', image: 'https://images.unsplash.com/photo-1541339905195-03f444a11927?auto=format&fit=crop&q=80&w=800' },
  { id: '4', name: 'Royal European Luxury', type: 'Luxury', price: '$5,500', duration: '12 Days', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Ayesha Khan', role: 'Business Traveler', comment: 'The visa process was incredibly smooth. TZ Travels handled everything professionally!', avatar: 'https://i.pravatar.cc/150?u=ayesha' },
  { id: '2', name: 'Omar Siddiqui', role: 'Family Vacationer', comment: 'Our Umrah package was top-notch. Close hotels and great transport services.', avatar: 'https://i.pravatar.cc/150?u=omar' },
  { id: '3', name: 'Sarah Ahmed', role: 'Honeymooner', comment: 'The Turkey tour was magical. Every detail was planned perfectly. Highly recommend!', avatar: 'https://i.pravatar.cc/150?u=sarah' },
];
