'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B1D18]/80 via-[#2B1D18]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#F7F1E8] mb-6 leading-tight">
              Your Daily Ritual,
              <br />
              <span className="text-[#B77945]">Brewed Beautifully</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#F7F1E8]/90 mb-8 leading-relaxed"
          >
            Discover specialty coffee, handcrafted drinks, and freshly baked pastries in the heart of Kathmandu. Every cup tells a story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B77945] text-white rounded-full hover:bg-[#2B1D18] transition-all duration-300 font-semibold group"
            >
              Explore Our Menu
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#F7F1E8] text-[#F7F1E8] rounded-full hover:bg-[#F7F1E8] hover:text-[#2B1D18] transition-all duration-300 font-semibold"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Find Your Table
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-[#F7F1E8]/70 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#F7F1E8]/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-[#F7F1E8]/70 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
