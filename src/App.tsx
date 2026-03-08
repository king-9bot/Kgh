/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  ChevronDown, 
  Star, 
  Menu, 
  X, 
  Plus, 
  Minus, 
  Trash2,
  Heart,
  Share2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products, categories } from './data';
import { Product, CartItem } from './types';
import { cn, formatPrice } from './utils';

// --- Components ---

const Navbar = ({ 
  cartCount, 
  onCartClick, 
  searchQuery, 
  setSearchQuery 
}: any) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#2874f0] text-white py-2 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 md:gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start leading-none cursor-pointer">
          <span className="text-xl font-bold italic">Flipkart</span>
          <div className="flex items-center gap-0.5">
            <span className="text-[10px] italic font-medium text-[#ffe500]">Explore <span className="text-white">Plus</span></span>
            <Plus className="w-2.5 h-2.5 text-[#ffe500]" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full bg-white text-gray-800 py-2 px-4 pr-10 rounded-sm focus:outline-none text-sm placeholder:text-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2874f0] w-5 h-5 cursor-pointer" />
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <button className="bg-white text-[#2874f0] px-8 py-1 rounded-sm hover:bg-gray-100 transition-colors">
            Login
          </button>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-200 transition-colors">
            <span>Become a Seller</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-200 transition-colors">
            <span>More</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div 
            className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ff6161] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative" onClick={onCartClick}>
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ff6161] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

const CategoryBar = ({ onCategorySelect, selectedCategory }: any) => {
  return (
    <div className="bg-white shadow-sm border-b overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between min-w-max gap-8">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={cn(
              "flex flex-col items-center gap-1 cursor-pointer group transition-all",
              selectedCategory === category.name ? "opacity-100" : "opacity-80 hover:opacity-100"
            )}
            onClick={() => onCategorySelect(category.name)}
          >
            <div className="w-16 h-16 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                referrerPolicy="no-referrer"
              />
            </div>
            <span className={cn(
              "text-xs font-semibold text-gray-800",
              selectedCategory === category.name && "text-[#2874f0]"
            )}>
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product, onAddToCart }: any) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 rounded-sm border border-transparent hover:border-gray-200 hover:shadow-xl transition-all group flex flex-col h-full"
    >
      <div className="relative aspect-[3/4] mb-4 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 group-hover:text-[#2874f0] transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
            {product.rating} <Star className="w-2.5 h-2.5 fill-current" />
          </div>
          <span className="text-gray-400 text-xs font-medium">({product.reviewsCount.toLocaleString()})</span>
          {product.isAssured && (
            <img 
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" 
              alt="Assured" 
              className="h-4 ml-auto"
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
            <span className="text-xs text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
            <span className="text-xs text-green-600 font-bold">{product.discount}% off</span>
          </div>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full mt-4 bg-[#ff9f00] text-white py-2 rounded-sm font-bold text-sm hover:bg-[#f39700] transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CartModal = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemove 
}: any) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0);
  const discount = originalTotal - total;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#f1f3f6] z-[70] shadow-2xl flex flex-col"
          >
            <div className="bg-white p-4 flex items-center justify-between border-b shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                My Cart ({cartItems.length})
              </h2>
              <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white rounded-sm">
                  <div className="w-48 h-48 mb-4">
                    <img 
                      src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" 
                      alt="Empty Cart" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Your cart is empty!</h3>
                  <p className="text-sm text-gray-500 mb-6">Add items to it now.</p>
                  <button 
                    onClick={onClose}
                    className="bg-[#2874f0] text-white px-12 py-2.5 rounded-sm font-bold shadow-md hover:bg-[#1261e0] transition-colors"
                  >
                    Shop Now
                  </button>
                </div>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-sm shadow-sm flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">{item.name}</h4>
                        <p className="text-xs text-gray-500 mb-2">Category: {item.category}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-base font-bold text-gray-900">{formatPrice(item.price)}</span>
                          <span className="text-xs text-gray-500 line-through">{formatPrice(item.originalPrice)}</span>
                          <span className="text-xs text-green-600 font-bold">{item.discount}% Off</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border rounded-sm">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                              className="p-1 hover:bg-gray-50 disabled:opacity-30"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-0.5 text-sm font-bold border-x">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 hover:bg-gray-50"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-sm font-bold text-gray-800 hover:text-red-500 transition-colors uppercase"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-white p-4 rounded-sm shadow-sm">
                    <h3 className="text-sm font-bold text-gray-500 uppercase border-b pb-3 mb-3">Price Details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Price ({cartItems.length} items)</span>
                        <span>{formatPrice(originalTotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Discount</span>
                        <span className="text-green-600">- {formatPrice(discount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Charges</span>
                        <span className="text-green-600">FREE</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold border-t border-dashed pt-3 mt-3">
                        <span>Total Amount</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                      <p className="text-green-600 font-bold text-xs">You will save {formatPrice(discount)} on this order</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="bg-white p-4 border-t shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-gray-900">{formatPrice(total)}</span>
                  <span className="text-[10px] text-[#2874f0] font-bold uppercase">View Price Details</span>
                </div>
                <button className="bg-[#fb641b] text-white px-10 py-3 rounded-sm font-bold shadow-md hover:bg-[#e65a17] transition-colors uppercase">
                  Place Order
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f1f3f6] font-sans">
      <Navbar 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <CategoryBar 
        selectedCategory={selectedCategory}
        onCategorySelect={(c) => setSelectedCategory(prev => prev === c ? 'All' : c)} 
      />

      <main className="max-w-7xl mx-auto px-4 py-4">
        {/* Banner Section */}
        <div className="mb-6 rounded-sm overflow-hidden shadow-sm">
          <img 
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20" 
            alt="Banner" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Products Section */}
        <div className="bg-white p-4 rounded-sm shadow-sm">
          <div className="flex items-center justify-between mb-6 border-b pb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {selectedCategory === 'All' ? 'Top Deals' : selectedCategory}
              </h2>
              <p className="text-xs text-gray-500">Handpicked for you</p>
            </div>
            <button className="bg-[#2874f0] text-white p-2 rounded-full shadow-md hover:bg-[#1261e0] transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="w-32 h-32 mx-auto mb-4 opacity-20">
                <Search className="w-full h-full" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">No products found</h3>
              <p className="text-sm text-gray-500">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>

        {/* Extra Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/92bc540094031460.jpg?q=20" className="rounded-sm shadow-sm w-full" referrerPolicy="no-referrer" />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c8077553538450f6.jpg?q=20" className="rounded-sm shadow-sm w-full" referrerPolicy="no-referrer" />
          <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/01660d271638202b.jpg?q=20" className="rounded-sm shadow-sm w-full" referrerPolicy="no-referrer" />
        </div>
      </main>

      <footer className="bg-[#172337] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-xs">
          <div className="space-y-3">
            <h4 className="text-gray-500 font-bold uppercase">About</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Contact Us</li>
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Flipkart Stories</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-gray-500 font-bold uppercase">Help</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Payments</li>
              <li className="hover:underline cursor-pointer">Shipping</li>
              <li className="hover:underline cursor-pointer">Cancellation & Returns</li>
              <li className="hover:underline cursor-pointer">FAQ</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-gray-500 font-bold uppercase">Policy</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Return Policy</li>
              <li className="hover:underline cursor-pointer">Terms Of Use</li>
              <li className="hover:underline cursor-pointer">Security</li>
              <li className="hover:underline cursor-pointer">Privacy</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-gray-500 font-bold uppercase">Social</h4>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Facebook</li>
              <li className="hover:underline cursor-pointer">Twitter</li>
              <li className="hover:underline cursor-pointer">YouTube</li>
            </ul>
          </div>
          <div className="col-span-2 space-y-3 border-l border-gray-700 pl-8">
            <h4 className="text-gray-500 font-bold uppercase">Mail Us:</h4>
            <p className="text-gray-300 leading-relaxed">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-700 flex flex-wrap justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-[#ffe500]" />
            <span>Become a Seller</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#ffe500]" />
            <span>Advertise</span>
          </div>
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-[#ffe500]" />
            <span>Gift Cards</span>
          </div>
          <div className="flex items-center gap-2">
            <ChevronDown className="w-4 h-4 text-[#ffe500]" />
            <span>Help Center</span>
          </div>
          <span className="text-gray-400">© 2007-2024 Flipkart.com</span>
        </div>
      </footer>

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}
