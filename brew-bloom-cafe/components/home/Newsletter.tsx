'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { validateEmail } from '@/lib/validation';

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#2B1D18] to-[#3d2d24]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Mail className="w-16 h-16 text-[#B77945] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#F7F1E8] mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-[#F7F1E8]/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new menu items, and coffee brewing tips
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-6 py-4 rounded-full bg-white text-[#2B1D18] placeholder:text-[#2B1D18]/50 focus:outline-none focus:ring-2 focus:ring-[#B77945] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-8 py-4 bg-[#B77945] text-white rounded-full hover:bg-[#F7F1E8] hover:text-[#2B1D18] transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === 'success' && <CheckCircle2 className="w-5 h-5" />}
                {status !== 'loading' && status !== 'success' && 'Subscribe'}
              </button>
            </div>

            {message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm ${
                  status === 'error' ? 'text-red-300' : 'text-green-300'
                }`}
              >
                {message}
              </motion.p>
            )}
          </form>

          <p className="text-sm text-[#F7F1E8]/50 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
