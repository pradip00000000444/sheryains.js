import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Brew & Bloom | Get in Touch',
  description: 'Contact Brew & Bloom for reservations, inquiries, or feedback. Visit us in Thamel, Kathmandu or reach out through our contact form.',
  openGraph: {
    title: 'Contact Brew & Bloom',
    description: 'Get in touch with us',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
