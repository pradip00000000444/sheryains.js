'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Award, Users, Coffee } from 'lucide-react';
import { teamMembers } from '@/data/team';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source the finest beans and ingredients, ensuring every cup and bite exceeds expectations.',
    },
    {
      icon: Heart,
      title: 'Crafted with Care',
      description: 'From roasting to brewing, every step is a labor of love by our skilled team.',
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'More than a café—we\'re a gathering place for connection and creativity.',
    },
    {
      icon: Award,
      title: 'Sustainability',
      description: 'We partner with local farmers and use eco-friendly practices whenever possible.',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative py-20 lg:py-32 bg-gradient-to-br from-[#2B1D18] to-[#3d2d24] overflow-hidden"
        >
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
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-[#F7F1E8] mb-6">
                Our Story
              </h1>
              <p className="text-lg lg:text-xl text-[#F7F1E8]/80 max-w-3xl mx-auto">
                Brew & Bloom began with a simple dream: to create a space where exceptional coffee meets warm hospitality
              </p>
            </motion.div>
          </div>
        </section>

        {/* Origin Story */}
        <section ref={storyRef} className="py-20 lg:py-28 bg-[#F7F1E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#2B1D18] mb-6">
                  From Passion to Pour
                </h2>
                <div className="space-y-4 text-[#2B1D18]/70 leading-relaxed">
                  <p>
                    In 2021, two coffee enthusiasts—Sarah and Rajan—decided to turn their shared passion into reality.
                    After years of traveling, tasting, and learning from coffee cultures around the world, they returned
                    to Kathmandu with a vision.
                  </p>
                  <p>
                    They wanted to create more than just another café. Brew & Bloom would be a sanctuary for coffee
                    lovers, a creative workspace for freelancers, and a warm gathering place for the community.
                  </p>
                  <p>
                    Today, we serve specialty coffee sourced from local Nepali highlands and international roasters,
                    paired with fresh pastries baked daily in-house. Every cup is crafted with precision, every guest
                    welcomed like family.
                  </p>
                  <p className="font-semibold text-[#2B1D18]">
                    We&apos;re not just brewing coffee—we&apos;re cultivating connections.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                    alt="Coffee preparation"
                    className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
                    alt="Latte art"
                    className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80"
                    alt="Café interior"
                    className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
                    alt="Fresh pastries"
                    className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#2B1D18] mb-4">
                What We Believe
              </h2>
              <p className="text-lg text-[#2B1D18]/70 max-w-2xl mx-auto">
                Our values guide every decision, from sourcing beans to serving guests
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-[#B77945] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2B1D18] mb-3">{value.title}</h3>
                    <p className="text-[#2B1D18]/70 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section ref={teamRef} className="py-20 lg:py-28 bg-[#F7F1E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#2B1D18] mb-4">
                Meet the Team
              </h2>
              <p className="text-lg text-[#2B1D18]/70 max-w-2xl mx-auto">
                The passionate people who make Brew & Bloom a reality
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2B1D18] mb-1">{member.name}</h3>
                  <p className="text-[#B77945] font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-[#2B1D18]/70 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#2B1D18] to-[#3d2d24]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#F7F1E8] mb-6">
                Experience Brew & Bloom
              </h2>
              <p className="text-lg text-[#F7F1E8]/80 mb-8 max-w-2xl mx-auto">
                Visit us in Thamel and discover your new favorite coffee ritual
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#B77945] text-white rounded-full hover:bg-[#F7F1E8] hover:text-[#2B1D18] transition-all duration-300 font-semibold group"
                >
                  View Menu
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/reservation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#F7F1E8] text-[#F7F1E8] rounded-full hover:bg-[#F7F1E8] hover:text-[#2B1D18] transition-all duration-300 font-semibold"
                >
                  Reserve a Table
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
