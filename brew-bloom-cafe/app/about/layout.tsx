import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Brew & Bloom | Our Story & Team',
  description: 'Learn about Brew & Bloom\'s journey, our passion for specialty coffee, and meet the team behind your favorite café in Kathmandu.',
  openGraph: {
    title: 'About Brew & Bloom',
    description: 'Our story, values, and the team that makes it all happen',
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
