'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { validateEmail, validatePhone, validateDate } from '@/lib/validation';
import { ReservationFormData } from '@/types';

export default function ReservationPage() {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const timeSlots = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ReservationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else if (!validateDate(formData.date)) {
      newErrors.date = 'Please select a future date';
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    if (formData.guests < 1 || formData.guests > 20) {
      newErrors.guests = 'Guests must be between 1 and 20';
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

    // Simulate API call - in production, replace with actual backend call
    setTimeout(() => {
      setStatus('success');
      setSubmitMessage(
        `Reservation request received! We'll confirm your booking for ${formData.guests} ${
          formData.guests === 1 ? 'guest' : 'guests'
        } on ${new Date(formData.date).toLocaleDateString()} at ${formData.time}.`
      );

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 2,
          specialRequests: '',
        });
        setStatus('idle');
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  const today = '2026-10-18'; // Static date for build

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
              <Calendar className="w-16 h-16 text-[#B77945] mx-auto mb-6" />
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-[#F7F1E8] mb-6">
                Reserve Your Table
              </h1>
              <p className="text-lg lg:text-xl text-[#F7F1E8]/80 max-w-2xl mx-auto">
                Secure your spot at Brew & Bloom for a memorable coffee experience
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-[#F7F1E8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-serif font-bold text-[#2B1D18] mb-4">
                  Reservation Received!
                </h2>
                <p className="text-lg text-[#2B1D18]/70 mb-6">{submitMessage}</p>
                <p className="text-sm text-[#2B1D18]/60">
                  <strong>Note:</strong> This is a demo reservation form. No actual booking has been made.
                  In production, you would receive a confirmation email.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#2B1D18] mb-2">
                      Full Name *
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

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#2B1D18] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.phone ? 'border-red-500' : 'border-[#2B1D18]/10'
                      } focus:border-[#B77945] focus:outline-none transition-colors`}
                      placeholder="+977 9812345678"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Date and Time */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-semibold text-[#2B1D18] mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          errors.date ? 'border-red-500' : 'border-[#2B1D18]/10'
                        } focus:border-[#B77945] focus:outline-none transition-colors`}
                      />
                      {errors.date && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.date}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-semibold text-[#2B1D18] mb-2">
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          errors.time ? 'border-red-500' : 'border-[#2B1D18]/10'
                        } focus:border-[#B77945] focus:outline-none transition-colors`}
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-[#2B1D18] mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      max="20"
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.guests ? 'border-red-500' : 'border-[#2B1D18]/10'
                      } focus:border-[#B77945] focus:outline-none transition-colors`}
                    />
                    {errors.guests && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.guests}
                      </p>
                    )}
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-semibold text-[#2B1D18] mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#2B1D18]/10 focus:border-[#B77945] focus:outline-none transition-colors resize-none"
                      placeholder="Any dietary restrictions, seating preferences, or special occasions..."
                    />
                  </div>

                  {/* Demo Notice */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Demo Notice:</strong> This is a demonstration form. No actual reservation will be made.
                      In a production environment, this would connect to a booking system or database.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#B77945] text-white py-4 rounded-full hover:bg-[#2B1D18] transition-all duration-300 font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 mr-2" />
                        Reserve Table
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
