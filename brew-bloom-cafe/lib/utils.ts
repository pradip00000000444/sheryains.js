import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return `NPR ${price.toLocaleString()}`;
}

export function getTodayDay(): string {
  if (typeof window === 'undefined') {
    return ''; // Return empty string during SSR
  }
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
}
