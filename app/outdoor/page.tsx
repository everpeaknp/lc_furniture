'use client';

import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

const images = {
  hero: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1400&q=85",
  patio: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
  garden: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  swing: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=900&q=80",
  outdoor: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=900&q=80",
  table: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80",
  chair: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80",
};

const roomData = {
  "/outdoor": {
    eyebrow: "Bring the comfort outside",
    title: "Outdoor",
    description: "Transform your patio, garden, or balcony into a serene retreat with our weather-resistant outdoor furniture collection designed for durability and style.",
    hero: images.patio,
    note: "Weather-proof elegance",
    story: "Crafted with materials that withstand the elements while maintaining their beauty, our outdoor collection lets you enjoy your outdoor spaces in style, season after season.",
    products: [
      { name: "Patio Dining Set", price: "Rs. 1,45,000", image: images.patio },
      { name: "Garden Lounge Chair", price: "Rs. 35,000", image: images.garden },
      { name: "Outdoor Swing", price: "Rs. 85,000", image: images.swing },
      { name: "Aluminum Bistro Set", price: "Rs. 55,000", image: images.outdoor },
      { name: "Teak Coffee Table", price: "Rs. 45,000", image: images.patio },
      { name: "Sun Lounger", price: "Rs. 42,000", image: images.garden },
      { name: "Garden Bench", price: "Rs. 38,000", image: images.swing },
      { name: "Parasol Stand", price: "Rs. 18,000", image: images.outdoor },
    ],
  },
};

export default function OutdoorPage() {
  const room = roomData["/outdoor"];

  return (
    <div className="site-shell">
      <main>
        <section className="room-page-hero" style={{ height: "auto" }}>
          <img src="/festival-banner.jpg" alt={`${room.title} furniture collection`} style={{ height: "auto", width: "100%", objectFit: "unset" }} />
        </section>
        <section className="room-products section" id="collection">
          <div className="section-heading">
            <div><p className="eyebrow">Designed for outdoors</p><h2>{room.title} Collection</h2></div>
            <span>{room.products.length} pieces</span>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
            {room.products.map((item) => (
              <ProductCard key={item.name} item={item} productId={item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="break-inside-avoid mb-8 [&_.image-wrap]:!aspect-auto [&_img]:!h-auto" />
            ))}
          </div>
        </section>
        <section className="room-story section">
          <img src={room.products[3].image} alt="" />
          <div>
            <p className="eyebrow">The room edit</p>
            <h2>{room.note}</h2>
            <p>{room.story}</p>
            <a className="text-link" href="/contact">Talk to a designer <Arrow /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
