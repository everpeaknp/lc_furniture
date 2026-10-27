'use client';

import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import CategoryProductGrid from "@/components/CategoryProductGrid";

const images = {
  hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85",
  dining: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=900&q=80",
  chair: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80",
  cabinet: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80",
  table: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  kitchen: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80",
  article3: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?auto=format&fit=crop&w=900&q=80",
};

const room = {
  eyebrow: "Made for gathering",
  title: "Dining",
  note: "Gather around",
  story: "Built for the beautiful mess of shared meals, our dining pieces pair enduring materials with details that reward a closer look.",
  products: [
    { name: "Luma Dining Table", price: "Rs. 92,000", image: images.hero },
    { name: "Noma Dining Chair", price: "Rs. 26,000", image: images.dining },
    { name: "Marta Dining Chair", price: "Rs. 28,000", image: images.article3 },
    { name: "Atelier Sideboard", price: "Rs. 72,000", image: images.cabinet },
    { name: "Oval Extension Table", price: "Rs. 1,18,000", image: images.dining },
    { name: "Cane Armchair", price: "Rs. 32,000", image: images.chair },
    { name: "Oak Display Cabinet", price: "Rs. 82,000", image: images.kitchen },
    { name: "Taper Serving Console", price: "Rs. 52,000", image: images.table },
    { name: "Glass 4-Seater", price: "Rs. 85,000", image: images.article3 },
    { name: "Oak 6-Seater", price: "Rs. 1,05,000", image: images.dining },
    { name: "Rectangular 6-Seater", price: "Rs. 95,000", image: images.chair },
    { name: "Glass 6-Seater", price: "Rs. 1,25,000", image: images.kitchen },
  ],
};

export default function DiningPage() {
  return (
    <div className="site-shell">
      <main>
        <CategoryProductGrid
          products={room.products}
          category="dining"
          eyebrow={room.eyebrow}
          title={room.title}
        />
        <section className="room-story section">
          <img src={room.products[4].image} alt="" />
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
