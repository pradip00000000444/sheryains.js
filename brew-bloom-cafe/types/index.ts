export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'espresso' | 'signature' | 'iced' | 'tea' | 'bakery' | 'brunch';
  image: string;
  isVegetarian?: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface OpeningHours {
  day: string;
  hours: string;
  isToday?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}
