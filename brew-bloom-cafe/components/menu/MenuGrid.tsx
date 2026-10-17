'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Leaf, Star, Sparkles } from 'lucide-react';
import { menuItems, categoryLabels } from '@/data/menu';
import { MenuItem } from '@/types';
import { formatPrice } from '@/lib/utils';

interface MenuGridProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuGrid({ onAddToCart }: MenuGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuItem['category'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Array<{ value: MenuItem['category'] | 'all'; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'espresso', label: 'Espresso' },
    { value: 'signature', label: 'Signature' },
    { value: 'iced', label: 'Iced Drinks' },
    { value: 'tea', label: 'Tea' },
    { value: 'bakery', label: 'Bakery' },
    { value: 'brunch', label: 'Brunch' },
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 bg-[#F7F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#2B1D18]/40" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-[#2B1D18]/10 focus:border-[#B77945] focus:outline-none transition-colors bg-white"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-[#B77945] text-white shadow-lg scale-105'
                    : 'bg-white text-[#2B1D18] hover:bg-[#2B1D18]/5'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-center text-[#2B1D18]/60 mb-8">
          {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
        </p>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {item.isBestseller && (
                      <span className="bg-[#B77945] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Bestseller
                      </span>
                    )}
                    {item.isNew && (
                      <span className="bg-[#78866B] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        New
                      </span>
                    )}
                  </div>
                  {item.isVegetarian && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#2B1D18] mb-2 group-hover:text-[#B77945] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#2B1D18]/70 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#B77945]">{formatPrice(item.price)}</span>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="w-10 h-10 bg-[#B77945] text-white rounded-full flex items-center justify-center hover:bg-[#2B1D18] transition-colors group"
                      aria-label={`Add ${item.name} to cart`}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search className="w-16 h-16 text-[#2B1D18]/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#2B1D18] mb-2">No items found</h3>
            <p className="text-[#2B1D18]/60">Try adjusting your search or filter</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
