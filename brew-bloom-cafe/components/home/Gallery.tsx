'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const images = [
    { url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80', alt: 'Latte art' },
    { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80', alt: 'Coffee brewing' },
    { url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80', alt: 'Cafe interior' },
    { url: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80', alt: 'Fresh pastries' },
    { url: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=800&q=80', alt: 'Espresso shot' },
    { url: 'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=800&q=80', alt: 'Cafe ambiance' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F7F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#2B1D18] mb-4">
            The Brew & Bloom Experience
          </h2>
          <p className="text-lg text-[#2B1D18]/70 max-w-2xl mx-auto">
            A glimpse into our café
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#2B1D18]/0 group-hover:bg-[#2B1D18]/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-[#2B1D18]/70">
            Follow us on{' '}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B77945] hover:underline font-semibold"
            >
              @brewandbloom
            </a>{' '}
            for daily inspiration
          </p>
        </motion.div>
      </div>
    </section>
  );
}
