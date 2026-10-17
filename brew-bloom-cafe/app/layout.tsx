import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brew & Bloom - Specialty Coffee & Fresh Pastries | Kathmandu",
  description: "Experience specialty coffee, handcrafted drinks, and freshly baked pastries at Brew & Bloom. Your daily ritual, beautifully brewed in the heart of Kathmandu.",
  keywords: "specialty coffee, café, Kathmandu, fresh pastries, artisan coffee, coffee shop",
  openGraph: {
    title: "Brew & Bloom - Your Daily Ritual, Beautifully Brewed",
    description: "Specialty coffee and freshly baked pastries in Kathmandu",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
      style={{
        scrollBehavior: 'smooth',
        fontFamily: 'var(--font-inter), sans-serif'
      }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full bg-[#F8F4EC] text-[#302019]">
        {children}
      </body>
    </html>
  );
}
