'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Story from '@/components/home/Story';
import FeaturedMenu from '@/components/home/FeaturedMenu';
import Gallery from '@/components/home/Gallery';
import Testimonials from '@/components/home/Testimonials';
import LocationInfo from '@/components/home/LocationInfo';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { useCart } from '@/lib/useCart';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, updateQuantity, removeItem, totalItems } = useCart();

  return (
    <>
      <Navbar cartItemCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Story />
        <FeaturedMenu />
        <Gallery />
        <Testimonials />
        <LocationInfo />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </>
  );
}
