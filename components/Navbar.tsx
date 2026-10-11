"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  MapPin,
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
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
  Sofas: "/collections/sofas",
  Living: "/collections/living",
  Bedroom: "/collections/bedroom",
  Mattress: "/collections/mattress",
  Dining: "/collections/dining",
  Storage: "/collections/storage",
  "Study & Office": "/collections/office",
  Outdoor: "/collections/outdoor",
  "Decor & Furnishing": "/collections/decor",
  Interiors: "/interiors",
  "New Arrivals": "/collections/new-arrivals",
};

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const actions = [
    { label: "Stores", icon: MapPin, href: "/stores" },
    { label: "Profile", icon: UserRound, href: "/profile" },
    { label: "Wishlist", icon: Heart, href: "/wishlist" },
    { label: "Cart", icon: ShoppingBag, href: "/cart" },
  ];

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!search.trim()) return;

    window.location.href = `/search?q=${encodeURIComponent(search.trim())}`;
  }

  return (
    <header className="z-50 w-full border-b border-[#e5e0d4] bg-[#faf8f2] text-[#172554]">
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
      <div className="mx-auto grid max-w-[1800px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-5 sm:gap-7 sm:px-7 lg:grid-cols-[1fr_minmax(240px,1.3fr)_1fr] lg:px-12 lg:py-7">
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
          className="hidden h-12 items-center gap-3 rounded-full border border-[#e2dcd2] bg-white px-5 transition-all focus-within:border-[#1e3a8a] focus-within:shadow-sm md:flex lg:h-[50px]"
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

      {/* Desktop category navigation */}
      <nav
        aria-label="Furniture categories"
        className="hidden border-t border-[#ede8df] md:block"
      >
        <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-6 overflow-x-auto px-7 lg:gap-7 lg:px-12">
          {categories.map((category) => (
            <Link
              key={category}
              href={links[category]}
              className={`relative flex min-h-[54px] shrink-0 items-center whitespace-nowrap text-[11px] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#1e3a8a] after:transition-all hover:text-[#1e3a8a] hover:after:w-full lg:text-xs ${
                category === "New Arrivals"
                  ? "font-semibold text-[#1e3a8a]"
                  : "text-[#475569]"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[#e5e0d4] bg-[#faf8f2] px-5 pb-6 pt-4 md:hidden">
          <form
            onSubmit={handleSearch}
            className="mb-5 flex h-11 items-center gap-3 rounded-full border border-[#e2dcd2] bg-white px-4"
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
            {categories.map((category, index) => (
              <Link
                key={category}
                href={links[category]}
                onClick={() => setMenuOpen(false)}
                className={`flex min-h-[53px] items-center justify-between gap-2 border-b border-[#e5e0d4] py-3 text-sm ${
                  category === "New Arrivals"
                    ? "font-semibold text-[#1e3a8a]"
                    : "text-[#334155]"
                }`}
              >
                <span>{category}</span>
                {index < categories.length && (
                  <ArrowUpRight size={14} className="shrink-0 opacity-60 text-[#1e3a8a]" />
                )}
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#64748b]">
            <Link href="/stores" className="hover:text-[#1e3a8a]">Find a store</Link>
            <Link href="/profile" className="hover:text-[#1e3a8a]">My account</Link>
            <Link href="/wishlist" className="hover:text-[#1e3a8a]">My wishlist</Link>
            <Link href="/cart" className="hover:text-[#1e3a8a]">Shopping bag</Link>
          </div>
        </div>
      )}
    </header>
  );
}
