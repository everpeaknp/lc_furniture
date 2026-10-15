'use client';

import { useState, useMemo } from "react";
import { LayoutGrid, LayoutList } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import FilterSidebar, { FilterState, defaultFilters } from "@/components/FilterSidebar";

type Product = { name: string; price: string; image: string; availability?: string };

interface CategoryProductGridProps {
  products: Product[];
  category: string;   // e.g. "sofas"
  eyebrow: string;
  title: string;
}

const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc",   label: "Price: Low to High" },
  { value: "price-desc",  label: "Price: High to Low" },
  { value: "name-asc",    label: "Name: A–Z" },
];

/* Parse "Rs. 1,25,000" → 125000 */
function parsePrice(price: string): number {
  return parseInt(price.replace(/[^0-9]/g, ""), 10) || 0;
}

export default function CategoryProductGrid({
  products, category, eyebrow, title,
}: CategoryProductGridProps) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [sort, setSort]       = useState("recommended");
  const [grid, setGrid]       = useState<"grid" | "list">("grid");

  /* ── Filter ── */
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const price = parsePrice(p.price);
      if (price < filters.priceMin || price > filters.priceMax) return false;
      // If clearance only, keep only products priced under 50k (demo logic)
      if (filters.clearanceOnly && price >= 50000) return false;
      return true;
    });
  }, [products, filters]);

  /* ── Sort ── */
  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sort === "price-asc")  return arr.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sort === "price-desc") return arr.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    if (sort === "name-asc")   return arr.sort((a, b) => a.name.localeCompare(b.name));
    return arr; // recommended = original order
  }, [filtered, sort]);

  return (
    <section className="room-products" id="collection" style={{ padding: "40px 0 80px", width: "100%" }}>
      <div className="flex flex-col lg:flex-row gap-12 items-start w-full px-6 xl:px-12 2xl:px-20">

        {/* ── Left: Filter sidebar ── */}
        <FilterSidebar
          filters={filters}
          onChange={setFilters}
          category={category}
          totalCount={products.length}
          filteredCount={sorted.length}
        />

        {/* ── Right: sort bar + grid ── */}
        <div className="flex-1 min-w-0">

          {/* Sort / view bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[#e5e0d4]">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold text-[#172554]">{title}</h2>
              <span className="text-xs text-[#64748b] mt-0.5">({sorted.length} products)</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Sort dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="sort-select" className="text-xs font-medium text-[#64748b] whitespace-nowrap">
                  Sort By
                </label>
                <select
                  id="sort-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded border border-[#e5e0d4] bg-white px-3 py-1.5 text-xs font-medium text-[#172554] focus:outline-none focus:ring-1 focus:ring-[#1e3a8a]"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {/* View toggle */}
              <div className="hidden sm:flex items-center gap-1 border border-[#e5e0d4] rounded p-0.5">
                <button
                  onClick={() => setGrid("grid")}
                  className={`rounded p-1 transition-colors ${grid === "grid" ? "bg-[#1e3a8a] text-white" : "text-[#64748b] hover:text-[#1e3a8a]"}`}
                  aria-label="Grid view"
                >
                  <LayoutGrid size={15} />
                </button>
                <button
                  onClick={() => setGrid("list")}
                  className={`rounded p-1 transition-colors ${grid === "list" ? "bg-[#1e3a8a] text-white" : "text-[#64748b] hover:text-[#1e3a8a]"}`}
                  aria-label="List view"
                >
                  <LayoutList size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Product grid / list */}
          {sorted.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center text-[#64748b]">
              <p className="text-lg font-semibold text-[#172554]">No products match your filters</p>
              <p className="mt-1 text-sm">Try adjusting or resetting the filters.</p>
            </div>
          ) : grid === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {sorted.map((item) => (
                <ProductCard
                  key={item.name}
                  item={item}
                  productId={item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {sorted.map((item) => (
                <div key={item.name} className="flex gap-4 border border-[#e5e0d4] bg-white p-3 hover:shadow-md transition-shadow">
                  <a
                    href={`/product/${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}?name=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}&image=${encodeURIComponent(item.image)}`}
                    className="w-32 shrink-0 aspect-square overflow-hidden bg-[#f1efe9]"
                  >
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </a>
                  <div className="flex flex-col justify-center gap-1">
                    <h3 className="font-semibold text-[#172554] text-sm">{item.name}</h3>
                    <p className="text-sm font-medium text-[#1e3a8a]">{item.price}</p>
                    {item.availability && (
                      <span className={`text-xs font-medium ${item.availability === "Low stock" ? "text-amber-700" : "text-emerald-700"}`}>
                        {item.availability}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
