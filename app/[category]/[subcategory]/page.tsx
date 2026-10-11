import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

import { notFound } from "next/navigation";

// Realistic data for the mega menu subcategories
const subcategoryData: Record<string, { hero: string, intro: string, products: Array<{ name: string; price: string; image: string }> }> = {
  "sofas": {
    hero: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
    intro: "Our sofas are designed for maximum comfort and timeless appeal. Discover everything from minimalist profiles to deep, sink-in lounge styles.",
    products: [
      { name: "Cove Two Seat Sofa", price: "Rs. 1,15,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
      { name: "Linen Lounge Sofa", price: "Rs. 95,000", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80" },
      { name: "Forma Modular Sofa", price: "Rs. 1,45,000", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" },
      { name: "Cloud Bouclé Sofa", price: "Rs. 1,60,000", image: "https://images.unsplash.com/photo-1540574163026-643ea20d25b5?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "coffee-tables": {
    hero: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=85",
    intro: "Anchor your living room with our collection of coffee tables. Crafted from solid wood, travertine, and glass to suit any space.",
    products: [
      { name: "Onda Coffee Table", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=900&q=80" },
      { name: "Dune Low Table", price: "Rs. 38,000", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80" },
      { name: "Nero Marble Table", price: "Rs. 74,000", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80" },
      { name: "Oak Round Table", price: "Rs. 26,000", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80" },
    ]
  },
  "bookshelves": {
    hero: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=1200&q=85",
    intro: "Display your treasured objects and library with our open shelving units and bookcases, blending utility with sculptural design.",
    products: [
      { name: "Arch Bookshelf", price: "Rs. 65,000", image: "https://images.unsplash.com/photo-1594904578869-c011783103c7?auto=format&fit=crop&w=900&q=80" },
      { name: "Linear Wall Shelf", price: "Rs. 24,000", image: "https://images.unsplash.com/photo-1507652313519-d4e9174996cb?auto=format&fit=crop&w=900&q=80" },
      { name: "Walnut Cabinet", price: "Rs. 89,000", image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=900&q=80" },
      { name: "Gallery Shelving", price: "Rs. 56,000", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80" },
    ]
  }
};

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const resolvedParams = await params;
  const { category, subcategory } = resolvedParams;

  // Formatting strings for display
  const title = subcategory
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const categoryName = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const data = subcategoryData[subcategory] || {
    hero: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&w=1200&q=80",
    intro: `Explore our thoughtfully curated collection of ${title.toLowerCase()}. Designed with both form and function in mind, these pieces bring character and comfort to your ${categoryName.toLowerCase()}.`,
    products: [
      { name: `Modern ${title} 1`, price: "Rs. 32,000", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80" },
      { name: `Classic ${title} 2`, price: "Rs. 24,000", image: "https://images.unsplash.com/photo-1540574163026-643ea20d25b5?auto=format&fit=crop&w=900&q=80" },
      { name: `Premium ${title} 3`, price: "Rs. 68,000", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=900&q=80" },
      { name: `Luxe ${title} 4`, price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" },
    ]
  };

  return (
    <div className="site-shell">
      <main>
        <section className="room-page-hero">
          <img src={data.hero} alt={`${title} collection`} />
          <div>
            <p className="eyebrow">{categoryName} Collection</p>
            <h1 className="text-[#f6f4ef] text-6xl font-sans font-semibold tracking-tight">
              {title}
            </h1>
          </div>
        </section>
        
        <section className="room-page-intro section">
          <p>{data.intro}</p>
        </section>

        <section className="room-products section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Discover your style</p>
              <h2>{title}</h2>
            </div>
            <span>{data.products.length} pieces</span>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 sm:space-y-0">
            {data.products.map((item) => (
              <ProductCard key={item.name} item={item} className="break-inside-avoid mb-8 [&_.image-wrap]:!aspect-auto [&_img]:!h-auto" />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
