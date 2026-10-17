'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Heart, Users } from 'lucide-react';

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Coffee,
      title: 'Specialty Coffee',
      description: 'We source premium Arabica beans from local Nepali farms and international roasters.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every drink and dish is crafted with attention to detail and genuine passion.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'A welcoming space where coffee lovers, creatives, and friends gather.',
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F7F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80"
                alt="Barista crafting latte art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#B77945] text-[#F7F1E8] p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold mb-1">5+</p>
              <p className="text-sm">Years of brewing excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#2B1D18] mb-6">
              Where Coffee Meets Craft
            </h2>
            <p className="text-lg text-[#2B1D18]/70 mb-6 leading-relaxed">
              Born from a love of specialty coffee and a desire to create a welcoming community space,
              Brew & Bloom opened its doors in 2021. We believe coffee is more than a beverage—it's
              a ritual, an experience, and a moment of pause in your day.
            </p>
            <p className="text-lg text-[#2B1D18]/70 mb-8 leading-relaxed">
              Our team of passionate baristas and bakers work tirelessly to bring you the finest
              coffee and freshly baked goods. From bean to cup, every step is a labor of love.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#78866B]/20 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#78866B]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2B1D18] mb-1">{feature.title}</h3>
                      <p className="text-[#2B1D18]/70">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
