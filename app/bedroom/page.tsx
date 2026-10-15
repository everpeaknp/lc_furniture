'use client';

import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import CategoryProductGrid from "@/components/CategoryProductGrid";

const images = {
  bedroom: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  cabinet: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80",
  chair: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80",
  desk: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
  table: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  kitchen: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=900&q=80",
  article1: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?auto=format&fit=crop&w=900&q=80",
  article2: "https://images.unsplash.com/photo-1600210491305-7396500b5b31?auto=format&fit=crop&w=900&q=80",
};

const room = {
  eyebrow: "A quieter kind of comfort",
  title: "Bedroom",
  note: "Made for slow mornings",
  story: "Warm timber, woven textures, and calm proportions create a restorative room that feels composed without ever feeling formal.",
  products: [
    { name: "Mara Oak Bed", price: "Rs. 1,42,000", image: images.bedroom },
    { name: "Fawn Bedside Table", price: "Rs. 24,000", image: images.cabinet },
    { name: "Linen Bench", price: "Rs. 38,000", image: images.article1 },
    { name: "Arc Wardrobe", price: "Rs. 1,05,000", image: images.kitchen },
    { name: "Noma Dresser", price: "Rs. 74,000", image: images.article2 },
    { name: "Soft Lounge Chair", price: "Rs. 48,000", image: images.chair },
    { name: "Oak Vanity Desk", price: "Rs. 58,000", image: images.desk },
    { name: "Frame Nightstand", price: "Rs. 28,000", image: images.table },
  ],
};

export default function BedroomPage() {
  return (
    <div className="site-shell">
      <main>
        <section className="room-page-hero" style={{ height: "auto" }}>
          <img src="/festival-banner.jpg" alt="Bedroom furniture collection" style={{ height: "auto", width: "100%", objectFit: "unset" }} />
        </section>
        <CategoryProductGrid
          products={room.products}
          category="bedroom"
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
