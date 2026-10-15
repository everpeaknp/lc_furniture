'use client';

import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import CategoryProductGrid from "@/components/CategoryProductGrid";

const images = {
  mattress: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
  bedroom: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
};

const room = {
  eyebrow: "Sleep better, live better",
  title: "Mattress",
  note: "Wake up refreshed",
  story: "Our mattresses combine innovative materials with thoughtful design to provide the perfect balance of support and comfort for a restful night's sleep.",
  products: [
    { name: "King Size Memory Foam", price: "Rs. 85,000", image: images.mattress },
    { name: "Queen Size Spring", price: "Rs. 72,000", image: images.bedroom },
    { name: "Single Mattress", price: "Rs. 45,000", image: images.mattress },
    { name: "Hybrid Mattress", price: "Rs. 95,000", image: images.bedroom },
    { name: "Orthopedic Mattress", price: "Rs. 78,000", image: images.mattress },
    { name: "Luxury Pillow Top", price: "Rs. 1,05,000", image: images.bedroom },
    { name: "Cooling Gel Mattress", price: "Rs. 88,000", image: images.mattress },
    { name: "Natural Latex Mattress", price: "Rs. 1,15,000", image: images.bedroom },
  ],
};

export default function MattressPage() {
  return (
    <div className="site-shell">
      <main>
        <section className="room-page-hero" style={{ height: "auto" }}>
          <img src="/festival-banner.jpg" alt="Mattress collection" style={{ height: "auto", width: "100%", objectFit: "unset" }} />
        </section>
        <CategoryProductGrid
          products={room.products}
          category="mattress"
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
