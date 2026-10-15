"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  Search,
  MapPin,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const categories = [
  "Sofas",
  "Living",
  "Bedroom",
  "Mattress",
  "Dining",
  "Storage",
  "Study & Office",
  "Outdoor",
  "Decor & Furnishing",
  "Interiors",
  "New Arrivals",
];

const links: Record<string, string> = {
  Sofas: "/sofas",
  Living: "/living-room",
  Bedroom: "/bedroom",
  Mattress: "/mattress",
  Dining: "/dining",
  Storage: "/storage",
  "Study & Office": "/study-office",
  Outdoor: "/outdoor",
  "Decor & Furnishing": "/decor-furnishing",
  Interiors: "/contact",
  "New Arrivals": "/shop",
};

const megaMenuData: Record<string, { heading: string; subcategories: string[]; image: string; description: string }> = {
  Sofas: {
    heading: "Sofas",
    subcategories: ["3-Seater Sofas", "2-Seater Sofas", "Sofa Cum Beds", "Recliners", "L-Shaped Sofas"],
    image: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=600&q=80",
    description: "Discover our premium sofa collection designed for ultimate comfort and style.",
  },
  Living: {
    heading: "Living Room",
    subcategories: ["Coffee Tables", "TV Units", "Bookshelves", "Console Tables", "Display Units"],
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80",
    description: "Transform your living space with our handcrafted furniture.",
  },
  Bedroom: {
    heading: "Bedroom",
    subcategories: ["King Size Beds", "Queen Size Beds", "Wardrobes", "Dressers", "Chest of Drawers"],
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=600&q=80",
    description: "Create your dream bedroom with our premium beds and storage solutions.",
  },
  Mattress: {
    heading: "Mattress",
    subcategories: ["King Size", "Queen Size", "Single", "Memory Foam", "Spring"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
    description: "Experience unparalleled comfort with our premium mattress collection.",
  },
  Dining: {
    heading: "Dining",
    subcategories: ["4-Seater Dining", "6-Seater Dining", "8-Seater Dining", "Dining Chairs", "Bench Seating"],
    image: "https://images.unsplash.com/photo-1656403002413-2ac6137237d6?auto=format&fit=crop&w=600&q=80",
    description: "Make every meal special with our elegant dining sets.",
  },
  Storage: {
    heading: "Storage",
    subcategories: ["Wardrobes", "Cabinets", "Shelves", "Chest of Drawers", "Display Units"],
    image: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=600&q=80",
    description: "Organize your space with our smart storage solutions.",
  },
  "Study & Office": {
    heading: "Study & Office",
    subcategories: ["Study Tables", "Office Desks", "Office Chairs", "Bookshelves", "Filing Cabinets"],
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80",
    description: "Boost your productivity with our ergonomic office furniture.",
  },
  Outdoor: {
    heading: "Outdoor",
    subcategories: ["Patio Furniture", "Garden Chairs", "Outdoor Tables", "Swings", "Parasols"],
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=85",
    description: "Create the perfect outdoor retreat with our weather-resistant furniture.",
  },
  "Decor & Furnishing": {
    heading: "Decor & Furnishing",
    subcategories: ["Rugs", "Curtains", "Cushions", "Wall Art", "Lighting"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    description: "Add the finishing touches to your home with our decor collection.",
  },
  Interiors: {
    heading: "Interiors",
    subcategories: ["Design Services", "Consultation", "Space Planning", "3D Visualization", "Installation"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    description: "Let our experts transform your space with professional interior design.",
  },
  "New Arrivals": {
    heading: "New Arrivals",
    subcategories: ["Latest Collections", "Trending", "Bestsellers", "Limited Edition", "Exclusive"],
    image: "https://images.unsplash.com/photo-1653629495477-b42f0f43ce3f?auto=format&fit=crop&w=600&q=80",
    description: "Be the first to discover our newest furniture collections.",
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const handleMouseEnter = (category: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setHoveredCategory(null), 150);
  };

  const handleMegaMenuEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleMegaMenuLeave = () => {
    closeTimer.current = setTimeout(() => setHoveredCategory(null), 150);
  };

  const actions = [
    { label: "Stores", icon: MapPin, href: "/stores" },
    { label: "Profile", icon: UserRound, href: "/profile" },
    { label: "Wishlist", icon: Heart, href: "/profile" },
    { label: "Cart", icon: ShoppingBag, href: "/cart" },
  ];

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!search.trim()) return;

    router.push(`/search?q=${encodeURIComponent(search.trim())}`);
  }

  return (
    <>
    <header className="w-full bg-[#faf8f2] text-[#172554]">
      {/* Top announcement */}
      <div className="flex min-h-8 items-center justify-center gap-2 bg-[#1e3a8a] px-4 py-2 text-[10px] tracking-[0.14em] text-white sm:text-[11px]">
        <span>DESIGNED FOR SLOWER, BETTER LIVING</span>
        <span className="text-[#fde68a]">·</span>
        <Link
          href="/collections/new-arrivals"
          className="inline-flex items-center gap-1 text-[#fde68a] hover:text-white"
        >
          Explore new arrivals <ArrowUpRight size={12} />
        </Link>
      </div>

      {/* Main navbar */}
      <div className="mx-auto grid max-w-[1800px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-1.5 sm:gap-7 sm:px-7 lg:grid-cols-[1fr_minmax(240px,1.3fr)_1fr] lg:px-12 lg:py-2">
        {/* Brand */}
        <Link
          href="/"
          className="group flex w-fit items-center gap-2"
          aria-label="Woodform home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1e3a8a] font-serif text-xl italic text-[#faf8f2] transition-transform group-hover:rotate-[-8deg] sm:h-12 sm:w-12 sm:text-2xl">
            w.
          </span>

          <span className="flex flex-col">
            <span className="font-serif text-xl font-semibold tracking-[-0.06em] text-[#172554] sm:text-2xl lg:text-[29px]">
              woodform<span className="text-[#2563eb]">.</span>
            </span>
            <span className="mt-0.5 text-[8px] tracking-[0.2em] text-[#64748b] sm:text-[9px]">
              FURNITURE & LIVING
            </span>
          </span>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="hidden h-10 items-center gap-3 rounded-sm border border-[#e2dcd2] bg-white px-5 transition-all focus-within:border-[#1e3a8a] focus-within:shadow-sm md:flex lg:h-10"
        >
          <Search size={19} className="shrink-0 text-[#64748b]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search furniture, styles & more..."
            aria-label="Search products"
            className="w-full bg-transparent text-sm text-[#172554] outline-none placeholder:text-[#94a3b8]"
          />
          <button
            type="submit"
            className="shrink-0 text-xs font-semibold tracking-wide text-[#1e3a8a] transition-colors hover:text-[#2563eb]"
          >
            SEARCH
          </button>
        </form>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 sm:gap-5 lg:gap-7">
          {actions.map(({ label, icon: Icon, href }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className={`group flex flex-col items-center gap-1.5 ${
                label === "Stores" || label === "Profile"
                  ? "hidden sm:flex"
                  : "flex"
              }`}
            >
              <span className="relative">
                <Icon
                  size={20}
                  strokeWidth={1.4}
                  className="text-[#334155] transition-colors group-hover:text-[#1e3a8a] sm:h-[22px] sm:w-[22px]"
                />
                {label === "Cart" && (
                  <span className="absolute -right-2 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#1e3a8a] px-1 text-[9px] text-white">
                    0
                  </span>
                )}
              </span>
              <span className="hidden text-[10px] tracking-wide text-[#64748b] transition-colors group-hover:text-[#172554] sm:block">
                {label}
              </span>
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-[#e2dcd2] text-[#172554] md:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

    </header>

    <div className="sticky top-0 z-[100] w-full border-b border-[#e5e0d4] shadow-lg">
      {/* Desktop category navigation */}
      <nav
        aria-label="Furniture categories"
        className="hidden border-t-2 border-[#e5e0d4] bg-[#f5f3ed] md:block"
      >
        <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-6 overflow-x-auto px-7 lg:gap-7 lg:px-12">
          {categories.map((category) => {
            const isActive = pathname === links[category];
            return (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => handleMouseEnter(category)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={links[category]}
                  className={`relative flex min-h-[54px] shrink-0 items-center gap-1 whitespace-nowrap text-[11px] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#1e3a8a] after:transition-all hover:text-[#1e3a8a] hover:after:w-full lg:text-xs ${
                    isActive
                      ? "font-semibold text-[#1e3a8a] after:w-full"
                      : category === "New Arrivals"
                      ? "font-semibold text-[#1e3a8a]"
                      : "text-[#475569] after:w-0"
                  }`}
                >
                  {category}
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Link>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mega Menu Dropdown */}
      {hoveredCategory && (
        <div
          ref={megaMenuRef}
          className="hidden md:block absolute left-0 right-0 top-full bg-[#f6f4ef] border-t border-[#dfddd7] shadow-2xl z-50"
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <div className="mx-auto max-w-[1800px] px-7 lg:px-12 py-10">
            <div className="grid grid-cols-5 gap-10">
              {/* Image section */}
              <div className="col-span-2">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={megaMenuData[hoveredCategory]?.image}
                    alt={megaMenuData[hoveredCategory]?.heading}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-white font-sans mb-2">
                      {megaMenuData[hoveredCategory]?.heading}
                    </h3>
                    <p className="text-sm text-white/90 font-sans">
                      {megaMenuData[hoveredCategory]?.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Categories section */}
              <div className="col-span-3">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a9b93] mb-6 font-sans border-b border-[#dfddd7] pb-3">
                  Categories
                </h4>
                <div className="grid grid-cols-3 gap-6">
                  {megaMenuData[hoveredCategory]?.subcategories.map((sub) => (
                    <Link
                      key={sub}
                      href={`${links[hoveredCategory]}/${sub.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-base text-[#5a5952] hover:text-[#262720] transition-colors font-sans py-2 border-b border-transparent hover:border-[#dfddd7]"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
                <Link
                  href={links[hoveredCategory]}
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#1e3a8a] hover:text-[#2563eb] transition-colors font-sans tracking-widest uppercase"
                >
                  View all {megaMenuData[hoveredCategory]?.heading}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[#e5e0d4] bg-[#faf8f2] px-5 pb-6 pt-4 md:hidden">
          <form
            onSubmit={handleSearch}
            className="mb-5 flex h-11 items-center gap-3 rounded-sm border border-[#e2dcd2] bg-white px-4"
          >
            <Search size={18} className="text-[#64748b]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search furniture..."
              aria-label="Search products"
              className="w-full bg-transparent text-sm outline-none"
            />
            <button type="submit" aria-label="Submit search">
              <ArrowUpRight size={18} />
            </button>
          </form>

          <div className="grid grid-cols-2 gap-x-5">
            {categories.map((category, index) => {
              const isActive = pathname === links[category];
              return (
                <Link
                  key={category}
                  href={links[category]}
                  onClick={() => setMenuOpen(false)}
                  className={`flex min-h-[53px] items-center justify-between gap-2 border-b border-[#e5e0d4] py-3 text-sm ${
                    isActive
                      ? "font-semibold text-[#1e3a8a]"
                      : category === "New Arrivals"
                      ? "font-semibold text-[#1e3a8a]"
                      : "text-[#334155]"
                  }`}
                >
                  <span>{category}</span>
                  {index < categories.length && (
                    <ArrowUpRight size={14} className="shrink-0 opacity-60 text-[#1e3a8a]" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#64748b]">
            <Link href="/stores" className="hover:text-[#1e3a8a]">Find a store</Link>
            <Link href="/profile" className="hover:text-[#1e3a8a]">My account</Link>
            <Link href="/wishlist" className="hover:text-[#1e3a8a]">My wishlist</Link>
            <Link href="/cart" className="hover:text-[#1e3a8a]">Shopping bag</Link>
          </div>
        </div>
      )}
    </>
  );
}
