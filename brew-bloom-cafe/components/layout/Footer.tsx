import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { openingHours } from '@/data/opening-hours';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[#2B1D18] text-[#F7F1E8] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Brew & Bloom</h3>
            <p className="text-[#F7F1E8]/80 mb-6">
              Your daily ritual, beautifully brewed. Specialty coffee and fresh pastries in the heart of Kathmandu.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F7F1E8]/10 flex items-center justify-center hover:bg-[#B77945] transition-colors text-sm font-semibold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F7F1E8]/10 flex items-center justify-center hover:bg-[#B77945] transition-colors text-sm font-semibold"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F7F1E8]/10 flex items-center justify-center hover:bg-[#B77945] transition-colors text-sm font-semibold"
                aria-label="Twitter"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#F7F1E8]/80 hover:text-[#B77945] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-[#F7F1E8]/80 hover:text-[#B77945] transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#F7F1E8]/80 hover:text-[#B77945] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-[#F7F1E8]/80 hover:text-[#B77945] transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F7F1E8]/80 hover:text-[#B77945] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              {openingHours.map((item) => (
                <li key={item.day} className="flex justify-between text-[#F7F1E8]/80">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-[#F7F1E8]/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Thamel, Kathmandu 44600, Nepal
                  <br />
                  <span className="text-xs text-[#F7F1E8]/60">(Sample location for demo)</span>
                </span>
              </li>
              <li className="flex items-center space-x-3 text-[#F7F1E8]/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+9779812345678" className="text-sm hover:text-[#B77945] transition-colors">
                  +977 981-2345678
                </a>
              </li>
              <li className="flex items-center space-x-3 text-[#F7F1E8]/80">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hello@brewbloom.com" className="text-sm hover:text-[#B77945] transition-colors">
                  hello@brewbloom.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F7F1E8]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#F7F1E8]/60">
              © {year} Brew & Bloom. All rights reserved. Built for demonstration purposes.
            </p>
            <div className="flex space-x-6 text-sm text-[#F7F1E8]/60">
              <a href="#" className="hover:text-[#B77945] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#B77945] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
