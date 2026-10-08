"use client";

/**
 * White product card component, modelled on the Furnexa video
 * Deps: motion/react, lucide-react, shadcn/ui (button, badge). Needs `cn` from "@/lib/utils".
 * Usage: import { ProductCard } from "@/components/WoodenStreetProductPage";
 */
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Heart, ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ───────────────────────── Data (sample) ─────────────────────────
const IMG = "https://images.woodenstreet.de/image/data/ws-nextjs/home-page/mid-banners";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  colors: { name: string; hex: string }[];
  href: string;
};

const money = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

const colors = [
  { name: "Natural oak", hex: "#C9A27A" },
  { name: "Walnut", hex: "#6B4630" },
  { name: "Ash grey", hex: "#B9B6AE" },
];

export const products: Product[] = [
  { id: "sofa-cum-bed", name: "Sofa Cum Bed", category: "Living room", price: 24999, oldPrice: 34999, rating: 4.8, reviewCount: 128,
    description: "A sofa by day and a bed by night, built on a sturdy frame with a smooth fold-out mechanism. Sized for small apartments and guest rooms, with a warm, classic look that suits any corner.",
    images: [`${IMG}/all-sofa-cum-beds.jpg`], colors, href: "/all-sofa-cum-beds" },
  { id: "coffee-table", name: "Coffee Table", category: "Living room", price: 8999, oldPrice: 11999, rating: 4.6, reviewCount: 64, description: "Centre table with a solid top.", images: [`${IMG}/all-coffee-tables.jpg`], colors, href: "/all-coffee-tables" },
  { id: "tv-unit", name: "TV Unit", category: "Living room", price: 15999, rating: 4.7, reviewCount: 91, description: "TV unit with closed storage.", images: [`${IMG}/tv-units.jpg`], colors, href: "/tv-units" },
  { id: "office-chair", name: "Office Chair", category: "Study & office", price: 6999, oldPrice: 8999, rating: 4.5, reviewCount: 47, description: "Ergonomic chair for long days.", images: [`${IMG}/office-chairs.jpg`], colors, href: "/office-chairs" },
  { id: "home-temple", name: "Home Temple", category: "Decor", price: 12999, rating: 4.9, reviewCount: 36, description: "A calm corner for your home.", images: [`${IMG}/all-home-temple.jpg`], colors, href: "/all-home-temple" },
  { id: "study-table", name: "Study Table", category: "Study & office", price: 9999, oldPrice: 12999, rating: 4.6, reviewCount: 58, description: "Study table with storage.", images: [`${IMG}/all-study-tables.jpg`], colors, href: "/all-study-tables" },
];

// ───────────────────────── Small pieces ─────────────────────────
function Img({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div className="flex h-full w-full items-center justify-center text-neutral-300">
        <div className="h-12 w-12" aria-hidden />
      </div>
    );
  return <img src={src} alt={alt} draggable={false} loading="lazy" onError={() => setFailed(true)} className={cn("h-full w-full object-cover", className)} />;
}

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={cn("h-4 w-4", i < Math.round(value) ? "fill-amber-400 text-amber-400" : "fill-neutral-200 text-neutral-200")} />
      ))}
    </div>
  );
}

// ───────────────────────── White product card ─────────────────────────
export function ProductCard({ product, onAdd, className }: { product: Product; onAdd?: (p: Product) => void; className?: string }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const off = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  const add = () => {
    onAdd?.(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <motion.article
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={cn("group relative bg-white p-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.2)]", className)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">
        <a href={product.href} aria-label={product.name} className="absolute inset-0 z-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900">
          <motion.div variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="h-full w-full">
            <Img src={product.images[0]} alt={product.name} />
          </motion.div>
        </a>

        {off > 0 && <Badge className="pointer-events-none absolute left-3 top-3 z-10 rounded-full border-0 bg-neutral-900 text-white hover:bg-neutral-900">-{off}%</Badge>}

        <Button
          size="icon"
          variant="secondary"
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          onClick={() => setLiked((v) => !v)}
          className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-white/90 text-neutral-900 shadow-sm hover:bg-white"
        >
          <Heart className={cn("h-4 w-4 transition-colors", liked && "fill-red-500 text-red-500")} />
        </Button>

        <motion.div
          variants={{ rest: { opacity: 0, y: 12 }, hover: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.25 }}
          className="absolute inset-x-3 bottom-3 z-10 [@media(hover:none)]:!translate-y-0 [@media(hover:none)]:!opacity-100"
        >
          <Button onClick={add} className="h-11 w-full rounded-lg bg-neutral-900 text-white hover:bg-neutral-800">
            {added ? (<><Check className="h-4 w-4" /> Added</>) : (<><ShoppingBag className="h-4 w-4" /> Add to cart</>)}
          </Button>
        </motion.div>
      </div>

      <a href={product.href} className="mt-5 block focus-visible:outline-none">
        <h3 className="text-xl font-medium tracking-tight text-neutral-900">{product.name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg text-neutral-900">{money(product.price)}</span>
          {product.oldPrice && <span className="text-sm text-neutral-400 line-through">{money(product.oldPrice)}</span>}
        </div>
      </a>
    </motion.article>
  );
}
