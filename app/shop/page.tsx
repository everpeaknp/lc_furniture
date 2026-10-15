'use client';

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";
import { Search, X } from "lucide-react";
import { formatProductPrice, furnitureCatalog } from "@/lib/catalog";

function ShopContent() {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const [category, setCategory] = useState(
    requestedCategory && ["Sofas", "Chairs", "Tables", "Storage"].includes(requestedCategory)
      ? requestedCategory
      : "All",
  );
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const products = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = furnitureCatalog.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch = !query || `${item.name} ${item.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    if (sort === "low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high") filtered.sort((a, b) => b.price - a.price);
    if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }, [category, search, sort]);

  return (
    <div className="site-shell">
      <main>
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
          <form className="catalog-search" role="search" onSubmit={(event) => event.preventDefault()}>
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search furniture"
              aria-label="Search furniture"
            />
            {search && (
              <button type="button" aria-label="Clear search" onClick={() => setSearch("")}>
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </form>
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
            <span aria-live="polite">{products.length} {products.length === 1 ? "piece" : "pieces"}</span>
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

        <section className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0 section" aria-live="polite">
          {products.map((item) => (
            <div className="break-inside-avoid mb-8 relative [&_.image-wrap]:!aspect-auto [&_img]:!h-auto" key={item.name}>
              <ProductCard item={{ ...item, price: formatProductPrice(item.price) }} productId={item.id} />
              <span className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-semibold tracking-widest uppercase text-[#5a5952] font-sans">
                {item.category}
              </span>
            </div>
          ))}
          {products.length === 0 && (
            <div className="py-16 text-center text-sm text-[#64748b]">
              No furniture matches that search. Try another name or category.
            </div>
          )}
        </section>

        <section className="catalog-promise">
          <div className="catalog-promise-inner">
            <div>
              <p className="eyebrow">Made for the long run</p>
              <h2>Furniture worth<br />living with</h2>
            </div>
            <div>
              <p>
                Each piece is designed in our studio and made in small batches by experienced craftspeople.
                We choose materials for their character, durability, and ability to age beautifully.
              </p>
              <a className="text-link" href="/#about">Our approach <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

import { Suspense } from 'react';

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
