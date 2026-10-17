'use client';

import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function MenuHero() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#2B1D18] to-[#3d2d24] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Coffee className="w-16 h-16 text-[#B77945] mx-auto mb-6" />
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-[#F7F1E8] mb-6">
            Our Menu
          </h1>
          <p className="text-lg lg:text-xl text-[#F7F1E8]/80 max-w-2xl mx-auto">
            Explore our carefully crafted selection of specialty coffee, fresh pastries, and brunch favorites
          </p>
        </motion.div>
      </div>
    </section>
  );
}
