'use client';

import { useState } from 'react';
import SiteFooter from '@/components/SiteFooter';
import Arrow from '@/components/Arrow';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';

const images = {
  sofa: 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=300&q=80',
  living: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=300&q=80',
  chair: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=300&q=80',
  table: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=300&q=80',
  cabinet: 'https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=300&q=80',
  bed: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=300&q=80',
  dining: 'https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=300&q=80',
};

const initialCartItems = [
  {
    id: 1,
    name: 'Lorenzo 3-Seater Sofa',
    price: 125000,
    quantity: 1,
    image: images.sofa,
    category: 'Sofas',
  },
  {
    id: 2,
    name: 'Cloud Bouclé Chair',
    price: 54000,
    quantity: 2,
    image: images.chair,
    category: 'Chairs',
  },
  {
    id: 3,
    name: 'Onda Coffee Table',
    price: 45000,
    quantity: 1,
    image: images.table,
    category: 'Tables',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 50000 ? 0 : 2000;
  const total = subtotal + shipping;

  return (
    <div className="site-shell">
      <main>
        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Shopping Cart</p>
              <h2>Your Cart</h2>
            </div>
            <span>{cartItems.length} items</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-[#9a9b93]" />
              <h3 className="text-2xl font-semibold text-[#262720] mb-2">Your cart is empty</h3>
              <p className="text-[#89877c] mb-6">Add items to get started</p>
              <a href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-[#262720] hover:text-[#7c8060] transition-colors">
                Continue Shopping <Arrow />
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-6 p-6 border border-[#dfddd7] bg-white">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-32 h-32 object-cover flex-shrink-0"
                      />
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-[#262720] text-base mb-1">{item.name}</h3>
                            <p className="text-sm text-[#89877c]">{item.category}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 hover:bg-red-50 rounded transition-colors"
                            aria-label="Remove item"
                          >
                            <X className="h-4 w-4 text-[#9a9b93] hover:text-red-600" />
                          </button>
                        </div>

                        <div className="flex justify-between items-end mt-auto">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center border border-[#dfddd7] hover:border-[#262720] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center font-medium text-[#262720]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center border border-[#dfddd7] hover:border-[#262720] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="font-semibold text-[#262720]">
                            Rs. {(item.price * item.quantity).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <a href="/shop" className="inline-flex items-center gap-2 px-6 py-3 border border-[#dfddd7] text-[#262720] text-sm font-semibold hover:bg-[#f6f4ef] transition-colors">
                    <Arrow direction="left" /> Continue Shopping
                  </a>
                  <button
                    onClick={() => setCartItems([])}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#dfddd7] text-red-600 text-sm font-semibold hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" /> Clear Cart
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="border border-[#dfddd7] bg-white p-6 sticky top-24">
                  <h3 className="font-semibold text-[#262720] text-lg mb-6">Order Summary</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-[#5a5952]">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span>Rs. {subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-[#5a5952]">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `Rs. ${shipping.toLocaleString('en-IN')}`}</span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-[#89877c]">
                        Free shipping on orders over Rs. 50,000
                      </p>
                    )}
                    <div className="border-t border-[#dfddd7] pt-4 flex justify-between font-semibold text-[#262720] text-lg">
                      <span>Total</span>
                      <span>Rs. {total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-[#262720] text-white font-semibold hover:bg-[#3a3933] transition-colors mb-4">
                    Proceed to Checkout
                  </button>

                  <div className="space-y-3">
                    <p className="text-xs text-[#89877c] text-center">We accept</p>
                    <div className="flex justify-center gap-3">
                      <div className="w-12 h-8 bg-[#f6f4ef] rounded flex items-center justify-center text-xs font-semibold text-[#5a5952]">
                        VISA
                      </div>
                      <div className="w-12 h-8 bg-[#f6f4ef] rounded flex items-center justify-center text-xs font-semibold text-[#5a5952]">
                        MC
                      </div>
                      <div className="w-12 h-8 bg-[#f6f4ef] rounded flex items-center justify-center text-xs font-semibold text-[#5a5952]">
                        UPI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
