'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { openingHours } from '@/data/opening-hours';

export default function LocationInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [today, setToday] = useState('');

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setToday(days[new Date().getDay()]);
  }, []);

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
            Visit Us
          </h2>
          <p className="text-lg text-[#2B1D18]/70 max-w-2xl mx-auto">
            We're located in the heart of Kathmandu
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-xl bg-[#78866B]/20"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-[#78866B] mx-auto mb-4" />
                <p className="text-[#2B1D18]/70">Interactive map placeholder</p>
                <p className="text-sm text-[#2B1D18]/50 mt-2">
                  Embed Google Maps or similar service here
                </p>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B77945] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2B1D18] mb-2">Location</h3>
                <p className="text-[#2B1D18]/70">
                  Thamel, Kathmandu 44600, Nepal
                  <br />
                  <span className="text-sm text-[#2B1D18]/50">(Sample location for demo purposes)</span>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B77945] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2B1D18] mb-2">Phone</h3>
                <a
                  href="tel:+9779812345678"
                  className="text-[#2B1D18]/70 hover:text-[#B77945] transition-colors"
                >
                  +977 981-2345678
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B77945] rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2B1D18] mb-2">Email</h3>
                <a
                  href="mailto:hello@brewbloom.com"
                  className="text-[#2B1D18]/70 hover:text-[#B77945] transition-colors"
                >
                  hello@brewbloom.com
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#B77945] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2B1D18] mb-3">Opening Hours</h3>
                <div className="space-y-1.5">
                  {openingHours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between text-sm ${
                        item.day === today
                          ? 'text-[#B77945] font-semibold'
                          : 'text-[#2B1D18]/70'
                      }`}
                    >
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
