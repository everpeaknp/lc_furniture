import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import { formatProductPrice, furnitureCatalog } from "@/lib/catalog";
import { searchFurniture } from "@/lib/furnitureSearch";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = searchFurniture(furnitureCatalog, query);

  return (
    <div className="site-shell">
      <main className="mx-auto max-w-[1440px] px-4 pb-12 pt-8 sm:px-6 lg:px-10">
        <section className="border-b border-[#e5e0d4] pb-6">
          <p className="eyebrow mb-3">Furniture search</p>
          <h1 className="text-3xl font-semibold text-[#172554] sm:text-4xl">
            {query ? `Results for “${query}”` : "Search furniture"}
          </h1>
          <form action="/search" method="get" role="search" className="catalog-search mt-6">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search sofas, tables, chairs..."
              aria-label="Search furniture"
            />
            <button type="submit" aria-label="Submit search" className="text-[#1e3a8a]">
              Search
            </button>
          </form>
        </section>

        <section className="pt-6" aria-live="polite">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm text-[#64748b]">
              {results.length} {results.length === 1 ? "product" : "products"}
            </p>
            <a href="/shop" className="text-sm font-medium text-[#1e3a8a] hover:underline">Browse all furniture</a>
          </div>

          {results.length > 0 ? (
            <div className="columns-1 gap-8 space-y-8 sm:columns-2 lg:columns-3">
              {results.map((item) => (
                <div key={item.id} className="relative mb-8 break-inside-avoid [&_.image-wrap]:!aspect-auto [&_img]:!h-auto">
                  <ProductCard
                    item={{ ...item, price: formatProductPrice(item.price) }}
                    productId={item.id}
                  />
                  <span className="absolute left-2 top-2 bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#5a5952]">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="border-y border-[#e5e0d4] py-16 text-center">
              <h2 className="text-lg font-semibold text-[#172554]">
                {query ? "No matching furniture found" : "Enter a search term"}
              </h2>
              <p className="mt-2 text-sm text-[#64748b]">
                Try a product name or category such as sofas, chairs, tables, or storage.
              </p>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}