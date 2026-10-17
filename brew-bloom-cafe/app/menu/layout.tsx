import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu - Brew & Bloom | Specialty Coffee & Fresh Food',
  description: 'Explore our menu of specialty coffee, artisan drinks, fresh pastries, and brunch favorites. All made fresh daily in Kathmandu.',
  openGraph: {
    title: 'Our Menu - Brew & Bloom',
    description: 'Specialty coffee, pastries, and brunch in Kathmandu',
    type: 'website',
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
