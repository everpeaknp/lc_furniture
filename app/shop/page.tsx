'use client';

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
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

const catalog = [
  { name: "Linen Lounge Sofa", price: "$1,280", image: images.story, category: "Sofas" },
  { name: "Noma Dining Chair", price: "$320", image: images.dining, category: "Chairs" },
  { name: "Onda Coffee Table", price: "$540", image: images.table, category: "Tables" },
  { name: "Atelier Sideboard", price: "$890", image: images.cabinet, category: "Storage" },
  { name: "Cloud Bouclé Chair", price: "$680", image: images.chair, category: "Chairs" },
  { name: "Arco Writing Desk", price: "$720", image: images.desk, category: "Tables" },
  { name: "Forma Modular Sofa", price: "$1,760", image: images.sofa, category: "Sofas" },
  { name: "Fawn Bedside Table", price: "$290", image: images.bedroom, category: "Tables" },
  { name: "Luma Dining Table", price: "$1,140", image: images.hero, category: "Tables" },
  { name: "Miro Lounge Chair", price: "$610", image: images.living, category: "Chairs" },
  { name: "Oak Display Cabinet", price: "$980", image: images.kitchen, category: "Storage" },
  { name: "Cove Two Seat Sofa", price: "$1,390", image: images.chair, category: "Sofas" },
  { name: "Taper Console", price: "$640", image: images.article3, category: "Storage" },
  { name: "Dune Low Table", price: "$460", image: images.article2, category: "Tables" },
  { name: "Marta Dining Chair", price: "$340", image: images.hero, category: "Chairs" },
  { name: "Frame Shelving Unit", price: "$790", image: images.desk, category: "Storage" },
];

export default function ShopPage() {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const [category, setCategory] = useState(
    requestedCategory && ["Sofas", "Chairs", "Tables", "Storage"].includes(requestedCategory)
      ? requestedCategory
      : "All",
  );
  const [sort, setSort] = useState("featured");

  const products = useMemo(() => {
    const filtered = category === "All" ? [...catalog] : catalog.filter((item) => item.category === category);
    if (sort === "low") filtered.sort((a, b) => Number(a.price.replace(/\D/g, "")) - Number(b.price.replace(/\D/g, "")));
    if (sort === "high") filtered.sort((a, b) => Number(b.price.replace(/\D/g, "")) - Number(a.price.replace(/\D/g, "")));
    if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }, [category, sort]);

  return (
    <div className="site-shell">
      <MegaMenuHeader />

      <main className="pt-20">
        <section className="catalog-hero section">
          <p className="eyebrow">Objects for considered living</p>
          <h1>
            <TypeMorph
              config={{
                text: "ANIMDOCK",
                target: "Furniture",
                morph: true,
                speed: { mode: 'static', value: 2 },
                variants: { mode: 'static', value: 15 },
                color: "#262720"
              }}
            />
            <br />
            Collection
          </h1>
          <p>
            Quietly expressive furniture made from honest materials. Explore enduring pieces for
            gathering, resting, working, and everything in between.
          </p>
        </section>

        <section className="catalog-toolbar section" aria-label="Product filters">
          <div className="category-filters">
            {["All", "Sofas", "Chairs", "Tables", "Storage"].map((item) => (
              <button
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="catalog-sort">
            <span>{products.length} pieces</span>
            <label>
              <span className="sr-only">Sort products</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="featured">Featured</option>
                <option value="low">Price: Low to high</option>
                <option value="high">Price: High to low</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>
        </section>

        <section className="catalog-grid section" aria-live="polite">
          {products.map((item, index) => (
            <div className={index === 0 && category === "All" ? "catalog-featured" : ""} key={item.name}>
              <ProductCard item={item} />
              <span className="product-category">{item.category}</span>
            </div>
          ))}
        </section>

        <section className="catalog-promise">
          <div>
            <p className="eyebrow">Made for the long run</p>
            <h2>Furniture worth<br />living with</h2>
          </div>
          <p>
            Each piece is designed in our studio and made in small batches by experienced craftspeople.
            We choose materials for their character, durability, and ability to age beautifully.
          </p>
          <a className="text-link" href="/#about">Our approach <Arrow /></a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
