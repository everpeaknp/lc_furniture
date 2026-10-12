'use client';

import { useParams } from 'next/navigation';
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

const products: Record<string, { id: string; name: string; price: string; image: string; description: string; category: string }> = {
  // Sofas
  'lorenzo-3-seater-sofa': {
    id: 'lorenzo-3-seater-sofa',
    name: "Lorenzo 3-Seater Sofa",
    price: "Rs. 1,25,000",
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1400&q=85",
    description: "The Lorenzo 3-Seater Sofa combines classic design with modern comfort. Featuring premium upholstery, high-density foam cushions, and a sturdy hardwood frame, this sofa is built to last while providing the perfect spot for relaxation.",
    category: "Sofas"
  },
  'cove-two-seat-sofa': {
    id: 'cove-two-seat-sofa',
    name: "Cove Two Seat Sofa",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85",
    description: "Perfect for smaller spaces or intimate settings, the Cove Two Seat Sofa offers exceptional comfort in a compact footprint. Its sleek profile and premium materials make it a versatile addition to any room.",
    category: "Sofas"
  },
  'linen-lounge-sofa': {
    id: 'linen-lounge-sofa',
    name: "Linen Lounge Sofa",
    price: "Rs. 1,15,000",
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1400&q=85",
    description: "Crafted with breathable linen fabric and designed for maximum comfort, the Linen Lounge Sofa brings a relaxed elegance to your living space. Its neutral tone complements any interior style.",
    category: "Sofas"
  },
  'cloud-boucle-sofa': {
    id: 'cloud-boucle-sofa',
    name: "Cloud Bouclé Sofa",
    price: "Rs. 1,60,000",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85",
    description: "Wrap yourself in luxury with the Cloud Bouclé Sofa. Featuring soft, textured bouclé fabric and plush cushioning, this sofa creates a cozy, inviting atmosphere while making a bold style statement.",
    category: "Sofas"
  },
  'forma-modular-sofa': {
    id: 'forma-modular-sofa',
    name: "Forma Modular Sofa",
    price: "Rs. 1,45,000",
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1400&q=85",
    description: "The Forma Modular Sofa offers endless configuration possibilities. Its modular design lets you rearrange the pieces to suit your space, while maintaining a cohesive, modern aesthetic.",
    category: "Sofas"
  },
  'classic-recliner': {
    id: 'classic-recliner',
    name: "Classic Recliner",
    price: "Rs. 68,000",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1400&q=85",
    description: "Experience ultimate relaxation with the Classic Recliner. Featuring smooth reclining mechanism, premium leather upholstery, and ergonomic lumbar support for the perfect lounging experience.",
    category: "Sofas"
  },
  'sofa-cum-bed': {
    id: 'sofa-cum-bed',
    name: "Sofa Cum Bed",
    price: "Rs. 1,35,000",
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1400&q=85",
    description: "Maximize your space with the Sofa Cum Bed. This versatile piece transforms from a stylish sofa to a comfortable bed with ease, making it perfect for guest rooms or studio apartments.",
    category: "Sofas"
  },
  'l-shaped-sectional': {
    id: 'l-shaped-sectional',
    name: "L-Shaped Sectional",
    price: "Rs. 1,85,000",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85",
    description: "The L-Shaped Sectional provides ample seating while creating a modern focal point in your living room. Its deep seats and wide armrests offer superior comfort for family gatherings.",
    category: "Sofas"
  },
  // Bedroom
  'king-size-bed': {
    id: 'king-size-bed',
    name: "King Size Bed",
    price: "Rs. 1,75,000",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
    description: "Our King Size Bed offers ample space and timeless elegance. Crafted from solid wood with a luxurious upholstered headboard, it creates a serene sanctuary for restful sleep.",
    category: "Bedroom"
  },
  'queen-size-bed': {
    id: 'queen-size-bed',
    name: "Queen Size Bed",
    price: "Rs. 1,45,000",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
    description: "The Queen Size Bed combines comfort with sophistication. Its streamlined design and premium materials make it a perfect centerpiece for any modern bedroom.",
    category: "Bedroom"
  },
  'modern-wardrobe': {
    id: 'modern-wardrobe',
    name: "Modern Wardrobe",
    price: "Rs. 85,000",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=85",
    description: "Our Modern Wardrobe features clever storage solutions with adjustable shelves and hanging space. The sleek design fits seamlessly into contemporary interiors.",
    category: "Bedroom"
  },
  'nightstand-set': {
    id: 'nightstand-set',
    name: "Nightstand Set",
    price: "Rs. 25,000",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
    description: "Complete your bedroom with our matching Nightstand Set. Featuring drawers for bedside essentials and a compact design that maximizes space.",
    category: "Bedroom"
  },
  // Dining
  '4-seater-dining': {
    id: '4-seater-dining',
    name: "4-Seater Dining Set",
    price: "Rs. 95,000",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85",
    description: "Our 4-Seater Dining Set is perfect for intimate family meals. The solid wood table and comfortable chairs create a warm, inviting dining experience.",
    category: "Dining"
  },
  '6-seater-dining': {
    id: '6-seater-dining',
    name: "6-Seater Dining Set",
    price: "Rs. 1,55,000",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85",
    description: "The 6-Seater Dining Set accommodates larger gatherings with style. Its extendable design allows you to adjust the table size as needed.",
    category: "Dining"
  },
  'dining-chair': {
    id: 'dining-chair',
    name: "Premium Dining Chair",
    price: "Rs. 12,000",
    image: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&w=1400&q=85",
    description: "Our Premium Dining Chair offers ergonomic support and elegant design. The upholstered seat and back ensure comfort during long dinner conversations.",
    category: "Dining"
  },
  // Storage
  'tall-cabinet': {
    id: 'tall-cabinet',
    name: "Tall Storage Cabinet",
    price: "Rs. 55,000",
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1400&q=85",
    description: "The Tall Storage Cabinet maximizes vertical space with multiple adjustable shelves. Perfect for organizing books, display items, or kitchen essentials.",
    category: "Storage"
  },
  'bookshelf': {
    id: 'bookshelf',
    name: "Modern Bookshelf",
    price: "Rs. 38,000",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1400&q=85",
    description: "Our Modern Bookshelf combines functionality with style. Open shelving design allows you to display your book collection and decorative items beautifully.",
    category: "Storage"
  },
  'chest-of-drawers': {
    id: 'chest-of-drawers',
    name: "Chest of Drawers",
    price: "Rs. 42,000",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
    description: "The Chest of Drawers provides ample storage with smooth-gliding drawers. Its compact footprint makes it ideal for bedrooms or hallways.",
    category: "Storage"
  },
  // Outdoor
  'patio-dining-set': {
    id: 'patio-dining-set',
    name: "Patio Dining Set",
    price: "Rs. 1,45,000",
    image: "https://images.unsplash.com/photo-1600210491363-e6c8fc5e87c0?auto=format&fit=crop&w=1400&q=85",
    description: "Our Patio Dining Set is crafted from weather-resistant materials perfect for outdoor entertaining. The table and chairs withstand the elements while maintaining their beauty.",
    category: "Outdoor"
  },
  'garden-lounge-chair': {
    id: 'garden-lounge-chair',
    name: "Garden Lounge Chair",
    price: "Rs. 35,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    description: "The Garden Lounge Chair offers ultimate relaxation outdoors. Its ergonomic design and comfortable cushions make it perfect for reading or napping in your garden.",
    category: "Outdoor"
  },
  'outdoor-swing': {
    id: 'outdoor-swing',
    name: "Outdoor Swing",
    price: "Rs. 85,000",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1b?auto=format&fit=crop&w=1400&q=85",
    description: "Our Outdoor Swing adds charm to any patio or garden. The sturdy construction and comfortable seating make it a favorite spot for relaxation.",
    category: "Outdoor"
  },
  // Decor
  'handwoven-rug': {
    id: 'handwoven-rug',
    name: "Handwoven Jute Rug",
    price: "Rs. 28,000",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
    description: "The Handwoven Jute Rug adds natural texture to any room. Crafted from sustainable materials, it brings warmth and elegance to your floors.",
    category: "Decor & Furnishing"
  },
  'velvet-cushion-set': {
    id: 'velvet-cushion-set',
    name: "Velvet Cushion Set",
    price: "Rs. 8,500",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85",
    description: "Our Velvet Cushion Set adds a touch of luxury to your sofa or bed. The soft velvet fabric and rich colors create an inviting atmosphere.",
    category: "Decor & Furnishing"
  },
  'linen-curtains': {
    id: 'linen-curtains',
    name: "Linen Curtains",
    price: "Rs. 15,000",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    description: "The Linen Curtains offer elegant light control while adding softness to your windows. The natural fabric drapes beautifully for a sophisticated look.",
    category: "Decor & Furnishing"
  },
  'floor-lamp': {
    id: 'floor-lamp',
    name: "Floor Lamp",
    price: "Rs. 18,500",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=85",
    description: "Our Floor Lamp provides ambient lighting with modern design. The adjustable height and warm tones create the perfect atmosphere for any room.",
    category: "Decor & Furnishing"
  },
};

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products[productId];

  if (!product) {
    return (
      <div className="site-shell">
        <main className="section">
          <h1>Product not found</h1>
          <a href="/shop" className="text-link">Return to shop <Arrow /></a>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="site-shell">
      <main>
        <section className="section">
          <a href="/shop" className="text-link mb-8 inline-block">← Back to shop</a>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow mb-4">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-serif text-[#172554] mb-6">
                <TypeMorph
                  config={{
                    text: "ANIMDOCK",
                    target: product.name,
                    morph: true,
                    speed: { mode: 'static', value: 2 },
                    variants: { mode: 'static', value: 15 },
                    color: "#f6f4ef"
                  }}
                />
              </h1>
              <p className="text-2xl font-semibold text-[#1e3a8a] mb-8">{product.price}</p>
              <p className="text-[#5a5952] leading-relaxed mb-8">{product.description}</p>
              
              <div className="flex gap-4 mb-8">
                <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-sm hover:bg-[#2563eb] transition-colors font-semibold">
                  BUY NOW
                </button>
                <button className="border border-[#1e3a8a] text-[#1e3a8a] px-8 py-4 rounded-sm hover:bg-[#1e3a8a] hover:text-white transition-colors">
                  Add to Cart
                </button>
                <button className="border border-[#1e3a8a] text-[#1e3a8a] px-4 py-4 rounded-sm hover:bg-[#1e3a8a] hover:text-white transition-colors">
                  ♡
                </button>
              </div>

              <div className="border-t border-[#e5e0d4] pt-8">
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-[#172554] mb-2">Material</p>
                    <p className="text-[#5a5952]">Premium fabric</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#172554] mb-2">Dimensions</p>
                    <p className="text-[#5a5952]">Standard size</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#172554] mb-2">Care</p>
                    <p className="text-[#5a5952]">Professional cleaning recommended</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#172554] mb-2">Warranty</p>
                    <p className="text-[#5a5952]">5 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Products */}
        <section className="section">
          <div className="section-heading">
            <div><p className="eyebrow">You might also like</p><h2>Similar Products</h2></div>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
            {Object.entries(products)
              .filter(([id, p]) => id !== productId && p.category === product.category)
              .slice(0, 3)
              .map(([id, item]) => (
                <ProductCard key={id} item={{ name: item.name, price: item.price, image: item.image }} productId={id} className="break-inside-avoid mb-8 [&_.image-wrap]:!aspect-auto [&_img]:!h-auto" />
              ))}
          </div>
        </section>

        {/* Recommendations */}
        <section className="section">
          <div className="section-heading">
            <div><p className="eyebrow">Curated for you</p><h2>Recommended</h2></div>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
            {Object.entries(products)
              .filter(([id]) => id !== productId)
              .slice(0, 4)
              .map(([id, item]) => (
                <ProductCard key={id} item={{ name: item.name, price: item.price, image: item.image }} productId={id} className="break-inside-avoid mb-8 [&_.image-wrap]:!aspect-auto [&_img]:!h-auto" />
              ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
