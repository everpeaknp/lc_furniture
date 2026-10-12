'use client';

import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

const images = {
  hero: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
  rug: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  cushion: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80",
  curtain: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
  wallart: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
  lighting: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
};

const roomData = {
  "/decor-furnishing": {
    eyebrow: "The finishing touches",
    title: "Decor & Furnishing",
    description: "Complete your home with our curated collection of rugs, curtains, cushions, wall art, and lighting that add warmth, texture, and personality to every room.",
    hero: images.rug,
    note: "Details that matter",
    story: "From soft textures underfoot to the perfect ambient lighting, our decor collection is designed to transform your space and reflect your unique style with carefully crafted pieces.",
    products: [
      { name: "Handwoven Jute Rug", price: "Rs. 28,000", image: images.rug },
      { name: "Velvet Cushion Set", price: "Rs. 8,500", image: images.cushion },
      { name: "Linen Curtains", price: "Rs. 15,000", image: images.curtain },
      { name: "Abstract Wall Art", price: "Rs. 22,000", image: images.wallart },
      { name: "Floor Lamp", price: "Rs. 18,500", image: images.lighting },
      { name: "Woven Throw Blanket", price: "Rs. 6,500", image: images.cushion },
      { name: "Ceramic Vase Set", price: "Rs. 12,000", image: images.wallart },
      { name: "Table Lamp", price: "Rs. 9,500", image: images.lighting },
    ],
  },
};

export default function DecorFurnishingPage() {
  const room = roomData["/decor-furnishing"];

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
            <div><p className="eyebrow">Designed for style</p><h2>{room.title} Collection</h2></div>
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
