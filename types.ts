
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  price: string;
  rating: number;
}

export interface Package {
  id: string;
  name: string;
  type: 'Family' | 'Honeymoon' | 'Business' | 'Luxury' | 'Budget';
  price: string;
  duration: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}
