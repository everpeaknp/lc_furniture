'use client';

import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

const images = {
  hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85",
  mattress: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80",
  bedroom: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  cabinet: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80",
  table: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  chair: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=900&q=80",
  desk: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
  shelf: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=80",
};

const roomData = {
  "/mattress": {
    eyebrow: "Sleep better, live better",
    title: "Mattress",
    description: "Experience unparalleled comfort with our premium mattress collection, designed to give you the rest you deserve.",
    hero: images.mattress,
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
  },
};

export default function MattressPage() {
  const room = roomData["/mattress"];

  return (
    <div className="site-shell">
      <main>
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
        <section className="room-products section" id="collection">
          <div className="section-heading">
            <div><p className="eyebrow">Designed for rest</p><h2>{room.title} Collection</h2></div>
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
