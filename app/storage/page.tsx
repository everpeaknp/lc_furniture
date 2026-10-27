'use client';

import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import CategoryProductGrid from "@/components/CategoryProductGrid";

const images = {
  cabinet: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80",
  bedroom: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
  shelf: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=80",
};

const room = {
  eyebrow: "Organize with style",
  title: "Storage",
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
    { name: "Wall Shelf Set", price: "Rs. 28,000", image: images.shelf },
    { name: "Corner Shelf", price: "Rs. 22,000", image: images.cabinet },
    { name: "Industrial Rack", price: "Rs. 45,000", image: images.bedroom },
    { name: "Modern Cabinet", price: "Rs. 68,000", image: images.shelf },
  ],
};

export default function StoragePage() {
  return (
    <div className="site-shell">
      <main>
        <CategoryProductGrid
          products={room.products}
          category="storage"
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
