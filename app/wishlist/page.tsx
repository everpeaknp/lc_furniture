'use client';

import { useState } from 'react';
import SiteFooter from '@/components/SiteFooter';
import ProductCard from '@/components/ProductCard';
import Arrow from '@/components/Arrow';
import { Heart, X, ShoppingCart } from 'lucide-react';

const images = {
  hero: 'https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85',
  sofa: 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=900&q=80',
  living: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80',
  chair: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80',
  table: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
  cabinet: 'https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80',
  bed: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80',
  dining: 'https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=900&q=80',
};

const initialWishlist = [
  { id: 1, name: 'Lorenzo 3-Seater Sofa', price: 'Rs. 1,25,000', image: images.sofa, category: 'Sofas' },
  { id: 2, name: 'Cove Two Seat Sofa', price: 'Rs. 95,000', image: images.living, category: 'Sofas' },
  { id: 3, name: 'Linen Lounge Sofa', price: 'Rs. 1,15,000', image: images.sofa, category: 'Sofas' },
  { id: 4, name: 'Cloud Bouclé Chair', price: 'Rs. 54,000', image: images.chair, category: 'Chairs' },
  { id: 5, name: 'Onda Coffee Table', price: 'Rs. 45,000', image: images.table, category: 'Tables' },
  { id: 6, name: 'Arch Bookshelf', price: 'Rs. 65,000', image: images.cabinet, category: 'Storage' },
  { id: 7, name: 'Mara Oak Bed', price: 'Rs. 1,42,000', image: images.bed, category: 'Beds' },
  { id: 8, name: 'Luma Dining Table', price: 'Rs. 92,000', image: images.dining, category: 'Dining' },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    alert('Added to cart!');
  };

  return (
    <div className="site-shell">
      <main>
        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Saved Items</p>
              <h2>My Wishlist</h2>
            </div>
            <span>{wishlist.length} items</span>
          </div>

          {wishlist.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="h-16 w-16 mx-auto mb-4 text-[#9a9b93]" />
              <h3 className="text-2xl font-semibold text-[#262720] mb-2">Your wishlist is empty</h3>
              <p className="text-[#89877c] mb-6">Save items you love by clicking the heart icon</p>
              <a href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-[#262720] hover:text-[#7c8060] transition-colors">
                Continue Shopping <Arrow />
              </a>
            </div>
          ) : (
            <>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
                {wishlist.map((item) => (
                  <div key={item.id} className="break-inside-avoid mb-8 relative group">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-2 right-2 z-10 p-2 bg-white/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
                      aria-label="Remove from wishlist"
                    >
                      <X className="h-4 w-4 text-[#5a5952] hover:text-red-600" />
                    </button>
                    <ProductCard item={item} className="[&_.image-wrap]:!aspect-auto [&_img]:!h-auto" />
                    <button
                      onClick={() => addToCart(item.id)}
                      className="w-full mt-3 py-2 bg-[#262720] text-white text-sm font-semibold hover:bg-[#3a3933] transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#dfddd7]">
                <div className="flex justify-between items-center">
                  <p className="text-[#89877c]">
                    Subtotal ({wishlist.length} items): <span className="text-[#262720] font-semibold">
                      Rs. {wishlist.reduce((total, item) => total + parseInt(item.price.replace(/[^0-9]/g, '')), 0).toLocaleString('en-IN')}
                    </span>
                  </p>
                  <a href="/shop" className="inline-flex items-center gap-2 px-6 py-3 bg-[#262720] text-white text-sm font-semibold hover:bg-[#3a3933] transition-colors">
                    Add All to Cart <Arrow />
                  </a>
                </div>
              </div>
            </>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
