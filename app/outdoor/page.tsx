'use client';

import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import CategoryProductGrid from "@/components/CategoryProductGrid";

const images = {
  patio: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
  garden: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  swing: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=900&q=80",
  outdoor: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=900&q=80",
};

const room = {
  eyebrow: "Bring the comfort outside",
  title: "Outdoor",
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
    { name: "Outdoor Sectional", price: "Rs. 1,85,000", image: images.patio },
    { name: "Hammock Chair", price: "Rs. 18,000", image: images.garden },
    { name: "Garden Swing Set", price: "Rs. 95,000", image: images.swing },
    { name: "Porch Swing", price: "Rs. 62,000", image: images.outdoor },
  ],
};

export default function OutdoorPage() {
  return (
    <div className="site-shell">
      <main>
        <CategoryProductGrid
          products={room.products}
          category="outdoor"
          eyebrow={room.eyebrow}
          title={room.title}
        />
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
