'use client';

import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

const images = {
  hero: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=1400&q=85",
  cabinet: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80",
  bedroom: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  shelf: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=900&q=80",
  table: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
};

const roomData = {
  "/storage": {
    eyebrow: "Organize with style",
    title: "Storage",
    description: "Smart storage solutions that blend functionality with beautiful design, helping you keep your space clutter-free.",
    hero: images.cabinet,
    note: "Made for organized living",
    story: "From wardrobes to bookshelves, our storage pieces are designed to maximize space while adding elegance to your home.",
    products: [
      { name: "Oak Wardrobe", price: "Rs. 1,25,000", image: images.cabinet },
      { name: "Modern Bookshelf", price: "Rs. 68,000", image: images.shelf },
      { name: "Chest of Drawers", price: "Rs. 45,000", image: images.bedroom },
      { name: "Display Cabinet", price: "Rs. 78,000", image: images.cabinet },
      { name: "Floating Shelves", price: "Rs. 32,000", image: images.shelf },
      { name: "Storage Bench", price: "Rs. 38,000", image: images.bedroom },
      { name: "Console Storage", price: "Rs. 52,000", image: images.cabinet },
      { name: "Modular Storage", price: "Rs. 95,000", image: images.shelf },
    ],
  },
};

export default function StoragePage() {
  const room = roomData["/storage"];

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
        <section className="room-page-intro section">
          <p>{room.description}</p>
          <a className="text-link" href="#collection">Explore collection <Arrow /></a>
        </section>
        <section className="room-products section" id="collection">
          <div className="section-heading">
            <div><p className="eyebrow">Designed for organization</p><h2>{room.title} Collection</h2></div>
            <span>{room.products.length} pieces</span>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
            {room.products.map((item) => (
              <ProductCard key={item.name} item={item} className="break-inside-avoid mb-8 [&_.image-wrap]:!aspect-auto [&_img]:!h-auto" />
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
