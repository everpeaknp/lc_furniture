'use client';

import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import CategoryProductGrid from "@/components/CategoryProductGrid";

const images = {
  living: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
  sofa: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=900&q=80",
  table: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  bedroom: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  chair: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80",
  article2: "https://images.unsplash.com/photo-1600210491305-7396500b5b31?auto=format&fit=crop&w=900&q=80",
  article3: "https://images.unsplash.com/photo-1706380469091-3bd9b7865b71?auto=format&fit=crop&w=900&q=80",
  story: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?auto=format&fit=crop&w=1200&q=85",
};

const room = {
  eyebrow: "Spaces to settle into",
  title: "Living Room",
  note: "Comfort, considered",
  story: "Generous proportions meet refined silhouettes in a collection designed to bring ease and character to the heart of your home.",
  products: [
    { name: "Linen Lounge Sofa", price: "Rs. 95,000", image: images.story },
    { name: "Cloud Bouclé Chair", price: "Rs. 45,000", image: images.chair },
    { name: "Forma Modular Sofa", price: "Rs. 1,25,000", image: images.sofa },
    { name: "Miro Lounge Chair", price: "Rs. 38,000", image: images.living },
    { name: "Cove Two Seat Sofa", price: "Rs. 85,000", image: images.chair },
    { name: "Onda Coffee Table", price: "Rs. 32,000", image: images.table },
    { name: "Taper Console", price: "Rs. 42,000", image: images.article3 },
    { name: "Dune Low Table", price: "Rs. 28,000", image: images.article2 },
  ],
};

export default function LivingRoomPage() {
  return (
    <div className="site-shell">
      <main>
        <section className="room-page-hero" style={{ height: "auto" }}>
          <img src="/festival-banner.jpg" alt="Living Room furniture collection" style={{ height: "auto", width: "100%", objectFit: "unset" }} />
        </section>
        <CategoryProductGrid
          products={room.products}
          category="living-room"
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
