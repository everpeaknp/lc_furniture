'use client';

import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import CategoryProductGrid from "@/components/CategoryProductGrid";

const images = {
  hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85",
  sofa: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=900&q=80",
  living: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80",
  chair: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80",
  table: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  cabinet: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80",
};

const room = {
  eyebrow: "Sink in, stay a while",
  title: "Sofas",
  note: "Designed for connection",
  story: "From intimate two-seaters to spacious sectionals, each piece is built with premium materials and thoughtful details that make every moment at home feel special.",
  products: [
    { name: "Lorenzo 3-Seater Sofa", price: "Rs. 1,25,000", image: images.sofa },
    { name: "Cove Two Seat Sofa", price: "Rs. 95,000", image: images.living },
    { name: "Linen Lounge Sofa", price: "Rs. 1,15,000", image: images.sofa },
    { name: "Cloud Bouclé Sofa", price: "Rs. 1,60,000", image: images.living },
    { name: "Forma Modular Sofa", price: "Rs. 1,45,000", image: images.sofa },
    { name: "Classic Recliner", price: "Rs. 68,000", image: images.chair },
    { name: "Sofa Cum Bed", price: "Rs. 1,35,000", image: images.sofa },
    { name: "L-Shaped Sectional", price: "Rs. 1,85,000", image: images.living },
    { name: "Power Recliner", price: "Rs. 95,000", image: images.chair },
    { name: "Swivel Recliner", price: "Rs. 85,000", image: images.sofa },
    { name: "Leather Recliner", price: "Rs. 1,25,000", image: images.living },
    { name: "2-Seater Sofa", price: "Rs. 82,000", image: images.sofa },
  ],
};

export default function SofasPage() {
  return (
    <div className="site-shell">
      <main>
        <CategoryProductGrid
          products={room.products}
          category="sofas"
          eyebrow={room.eyebrow}
          title={room.title}
        />
        <section className="room-story section">
          <img src={room.products[3].image} alt="" />
          <div>
            <p className="eyebrow">The room edit</p>
            <h2>{room.note}</h2>
            <p>{room.story}</p>
            <a className="text-link" href="/contact">Talk to a designer</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
