'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  cartItemCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({ cartItemCount = 0, onCartClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/reservation', label: 'Reservations' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#2B1D18] text-[#F7F1E8] text-center py-2 px-4 text-sm">
        <p>🍂 Try our new Honey Cinnamon Latte – Perfect for autumn! 🍂</p>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#F7F1E8]/95 backdrop-blur-md shadow-md' : 'bg-[#F7F1E8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1D18] transition-colors group-hover:text-[#B77945]">
                Brew & Bloom
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#2B1D18] hover:text-[#B77945] transition-colors font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B77945] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Cart & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={onCartClick}
                className="relative p-2 text-[#2B1D18] hover:text-[#B77945] transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#B77945] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <Link
                href="/menu"
                className="bg-[#B77945] text-white px-6 py-2.5 rounded-full hover:bg-[#2B1D18] transition-colors font-medium"
              >
                Order Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={onCartClick}
                className="relative p-2 text-[#2B1D18]"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#B77945] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#2B1D18]"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#F7F1E8] border-t border-[#2B1D18]/10"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-[#2B1D18] hover:text-[#B77945] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/menu"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-[#B77945] text-white px-6 py-3 rounded-full hover:bg-[#2B1D18] transition-colors font-medium text-center mt-4"
                >
                  Order Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
