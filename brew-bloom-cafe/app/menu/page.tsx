'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import MenuHero from '@/components/menu/MenuHero';
import MenuGrid from '@/components/menu/MenuGrid';
import { useCart } from '@/lib/useCart';
import Toast from '@/components/ui/Toast';
import { MenuItem } from '@/types';

export default function MenuPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, addItem, updateQuantity, removeItem, totalItems } = useCart();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
    setToastMessage(`${item.name} added to cart!`);
    setShowToast(true);
  };

  return (
    <>
      <Navbar cartItemCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      <main>
        <MenuHero />
        <MenuGrid onAddToCart={handleAddToCart} />
      </main>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
      <Toast
        message={toastMessage}
        type="success"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
