import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservations - Brew & Bloom | Book Your Table',
  description: 'Reserve your table at Brew & Bloom. Enjoy specialty coffee and fresh food in a welcoming atmosphere in Kathmandu.',
  openGraph: {
    title: 'Reserve a Table at Brew & Bloom',
    description: 'Book your spot at our specialty café',
    type: 'website',
  },
};

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
