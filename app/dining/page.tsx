'use client';

import MegaMenuHeader from "@/components/MegaMenuHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

const images = {
  hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85",
  living: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
  dining: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=900&q=80",
  sofa: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=900&q=80",
  table: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  bedroom: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  kitchen: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80",
  chair: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80",
  cabinet: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80",
  desk: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
  article1: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?auto=format&fit=crop&w=900&q=80",
  article2: "https://images.unsplash.com/photo-1600210491305-7396500b5b31?auto=format&fit=crop&w=900&q=80",
  article3: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?auto=format&fit=crop&w=900&q=80",
  story: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?auto=format&fit=crop&w=1200&q=85",
};

const roomData = {
  "/dining": {
    eyebrow: "Made for gathering",
    title: "Dining",
    description: "Honest tables, sculptural seating, and practical storage for weeknight dinners, long lunches, and every gathering in between.",
    hero: images.hero,
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
    ],
  },
};

export default function DiningPage() {
  const room = roomData["/dining"];

  return (
    <div className="site-shell">
      <MegaMenuHeader />
      <main className="pt-20">
        <section className="room-page-hero">
          <img src={room.hero} alt={`${room.title} furniture collection`} />
          <div>
            <p className="eyebrow">{room.eyebrow}</p>
            <h1>
              <TypeMorph
                config={{
                  text: "ANIMDOCK",
                  target: room.title,
                  morph: true,
                  speed: { mode: 'static', value: 2 },
                  variants: { mode: 'static', value: 15 },
                  color: "#f6f4ef"
                }}
              />
            </h1>
          </div>
        </section>
        <section className="room-page-intro section">
          <p>{room.description}</p>
          <a className="text-link" href="#collection">Explore collection <Arrow /></a>
        </section>
        <section className="room-products section" id="collection">
          <div className="section-heading">
            <div><p className="eyebrow">Designed for your space</p><h2>{room.title} Collection</h2></div>
            <span>{room.products.length} pieces</span>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
            {room.products.map((item) => (
              <ProductCard key={item.name} item={item} className="break-inside-avoid mb-8 [&_.image-wrap]:!aspect-auto [&_img]:!h-auto" />
            ))}
          </div>
        </section>
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
