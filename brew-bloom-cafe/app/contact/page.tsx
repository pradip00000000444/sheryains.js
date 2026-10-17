'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { validateEmail } from '@/lib/validation';
import { ContactFormData } from '@/types';
import { openingHours } from '@/data/opening-hours';

export default function ContactPage() {
  const [today, setToday] = useState('');

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setToday(days[new Date().getDay()]);
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setSubmitMessage('Thank you for reaching out! We&apos;ll get back to you within 24 hours.');

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setStatus('idle');
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#2B1D18] to-[#3d2d24]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Mail className="w-16 h-16 text-[#B77945] mx-auto mb-6" />
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-[#F7F1E8] mb-6">
                Get in Touch
              </h1>
              <p className="text-lg lg:text-xl text-[#F7F1E8]/80 max-w-2xl mx-auto">
                Have questions or feedback? We&apos;d love to hear from you
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-[#F7F1E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info - 2 columns */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-serif font-bold text-[#2B1D18] mb-6">
                    Contact Information
                  </h2>
                  <p className="text-[#2B1D18]/70 leading-relaxed mb-8">
                    Visit us at our café or reach out through any of the channels below.
                    We&apos;re here to help!
                  </p>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#B77945] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2B1D18] mb-2">Visit Us</h3>
                    <p className="text-[#2B1D18]/70">
                      Thamel, Kathmandu 44600, Nepal
                      <br />
                      <span className="text-sm text-[#2B1D18]/50">(Sample location for demo)</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#B77945] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2B1D18] mb-2">Call Us</h3>
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
                    <h3 className="text-lg font-semibold text-[#2B1D18] mb-2">Email Us</h3>
                    <a
                      href="mailto:hello@brewbloom.com"
                      className="text-[#2B1D18]/70 hover:text-[#B77945] transition-colors"
                    >
                      hello@brewbloom.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#B77945] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2B1D18] mb-3">Opening Hours</h3>
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

              {/* Contact Form - 3 columns */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                {status === 'success' ? (
                  <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-[#2B1D18] mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-[#2B1D18]/70 mb-4">{submitMessage}</p>
                    <p className="text-sm text-[#2B1D18]/60">
                      <strong>Note:</strong> This is a demo form. No actual message was sent.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-serif font-bold text-[#2B1D18] mb-6">
                      Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#2B1D18] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border-2 ${
                            errors.name ? 'border-red-500' : 'border-[#2B1D18]/10'
                          } focus:border-[#B77945] focus:outline-none transition-colors`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#2B1D18] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border-2 ${
                            errors.email ? 'border-red-500' : 'border-[#2B1D18]/10'
                          } focus:border-[#B77945] focus:outline-none transition-colors`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-[#2B1D18] mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border-2 ${
                            errors.subject ? 'border-red-500' : 'border-[#2B1D18]/10'
                          } focus:border-[#B77945] focus:outline-none transition-colors`}
                          placeholder="What's this about?"
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-[#2B1D18] mb-2">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className={`w-full px-4 py-3 rounded-lg border-2 ${
                            errors.message ? 'border-red-500' : 'border-[#2B1D18]/10'
                          } focus:border-[#B77945] focus:outline-none transition-colors resize-none`}
                          placeholder="Tell us what's on your mind..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Demo Notice */}
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-sm text-yellow-800">
                          <strong>Demo Notice:</strong> This form is for demonstration only. No actual message will be sent.
                        </p>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-[#B77945] text-white py-4 rounded-full hover:bg-[#2B1D18] transition-all duration-300 font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
