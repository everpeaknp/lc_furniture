'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, LogOut, ChevronDown, ChevronRight, Search, ShoppingCart, Heart } from "lucide-react";

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
};

export type NavItem = {
  id: number;
  label: string;
  href: string;
  order: number;
  columns: Array<{
    id: number;
    heading: string;
    order: number;
    links: Array<{
      id: number;
      label: string;
      href: string;
      order: number;
    }>;
  }>;
  panel?: {
    description_heading: string;
    description_text: string;
    card_label: string;
    card_title: string;
    card_subtitle: string;
    card_href: string;
    card_image_url: string;
  };
};

const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    label: "Living Room",
    href: "/living-room",
    order: 1,
    columns: [
      {
        id: 1,
        heading: "Seating",
        order: 1,
        links: [
          { id: 1, label: "Sofas", href: "/living-room/sofas", order: 1 },
          { id: 2, label: "Sofa Cum Beds", href: "/living-room/sofa-cum-beds", order: 2 },
          { id: 3, label: "Lounge Chairs", href: "/living-room/lounge-chairs", order: 3 },
          { id: 4, label: "Recliners", href: "/living-room/recliners", order: 4 },
        ],
      },
      {
        id: 2,
        heading: "Tables",
        order: 2,
        links: [
          { id: 5, label: "Coffee Tables", href: "/living-room/coffee-tables", order: 1 },
          { id: 6, label: "TV Units", href: "/living-room/tv-units", order: 2 },
          { id: 7, label: "Console Tables", href: "/living-room/console-tables", order: 3 },
        ],
      },
      {
        id: 3,
        heading: "Storage",
        order: 3,
        links: [
          { id: 8, label: "Bookshelves", href: "/living-room/bookshelves", order: 1 },
          { id: 9, label: "Display Units", href: "/living-room/display-units", order: 2 },
        ],
      },
    ],
    panel: {
      description_heading: "Living Room",
      description_text: "Transform your living space with our handcrafted furniture collection designed for comfort and style.",
      card_label: "Trending",
      card_title: "Modern Sofas",
      card_subtitle: "Starting from Rs. 85,000",
      card_href: "/living-room",
      card_image_url: images.sofa,
    },
  },
  {
    id: 2,
    label: "Bedroom",
    href: "/bedroom",
    order: 2,
    columns: [
      {
        id: 4,
        heading: "Beds",
        order: 1,
        links: [
          { id: 10, label: "King Size Beds", href: "/bedroom/king-size-beds", order: 1 },
          { id: 11, label: "Queen Size Beds", href: "/bedroom/queen-size-beds", order: 2 },
          { id: 12, label: "Single Beds", href: "/bedroom/single-beds", order: 3 },
        ],
      },
      {
        id: 5,
        heading: "Storage",
        order: 2,
        links: [
          { id: 13, label: "Wardrobes", href: "/bedroom/wardrobes", order: 1 },
          { id: 14, label: "Dressers", href: "/bedroom/dressers", order: 2 },
          { id: 15, label: "Chest of Drawers", href: "/bedroom/chest-of-drawers", order: 3 },
        ],
      },
    ],
    panel: {
      description_heading: "Bedroom",
      description_text: "Create your dream bedroom with our premium beds and storage solutions.",
      card_label: "Bestseller",
      card_title: "King Size Beds",
      card_subtitle: "Starting from Rs. 1,25,000",
      card_href: "/bedroom",
      card_image_url: images.bedroom,
    },
  },
  {
    id: 3,
    label: "Dining",
    href: "/dining",
    order: 3,
    columns: [
      {
        id: 6,
        heading: "Dining Sets",
        order: 1,
        links: [
          { id: 16, label: "4-Seater Dining", href: "/dining/4-seater-dining", order: 1 },
          { id: 17, label: "6-Seater Dining", href: "/dining/6-seater-dining", order: 2 },
          { id: 18, label: "8-Seater Dining", href: "/dining/8-seater-dining", order: 3 },
        ],
      },
      {
        id: 7,
        heading: "Chairs",
        order: 2,
        links: [
          { id: 19, label: "Dining Chairs", href: "/dining/dining-chairs", order: 1 },
          { id: 20, label: "Bench Seating", href: "/dining/bench-seating", order: 2 },
        ],
      },
    ],
    panel: {
      description_heading: "Dining",
      description_text: "Make every meal special with our elegant dining sets and furniture.",
      card_label: "New Arrival",
      card_title: "6-Seater Dining",
      card_subtitle: "Starting from Rs. 65,000",
      card_href: "/dining",
      card_image_url: images.dining,
    },
  },
  {
    id: 4,
    label: "Study & Office",
    href: "/study-office",
    order: 4,
    columns: [
      {
        id: 8,
        heading: "Desks",
        order: 1,
        links: [
          { id: 21, label: "Study Tables", href: "/study-office/study-tables", order: 1 },
          { id: 22, label: "Office Desks", href: "/study-office/office-desks", order: 2 },
          { id: 23, label: "Writing Desks", href: "/study-office/writing-desks", order: 3 },
        ],
      },
      {
        id: 9,
        heading: "Chairs",
        order: 2,
        links: [
          { id: 24, label: "Office Chairs", href: "/study-office/office-chairs", order: 1 },
          { id: 25, label: "Study Chairs", href: "/study-office/study-chairs", order: 2 },
        ],
      },
    ],
    panel: {
      description_heading: "Study & Office",
      description_text: "Boost your productivity with our ergonomic office furniture.",
      card_label: "Popular",
      card_title: "Study Tables",
      card_subtitle: "Starting from Rs. 45,000",
      card_href: "/study-office",
      card_image_url: images.desk,
    },
  },
  {
    id: 5,
    label: "Blog",
    href: "/blog",
    order: 5,
    columns: [],
    panel: undefined,
  },
  {
    id: 6,
    label: "Contact",
    href: "/contact",
    order: 6,
    columns: [],
    panel: undefined,
  },
];

function MegaMenuPanel({
  navItem,
  pathname,
  onLinkClick,
}: {
  navItem: NavItem;
  pathname: string;
  onLinkClick: () => void;
}) {
  return (
    <div className="w-full bg-[#f6f4ef] border-t border-[#dfddd7] shadow-2xl">
      <div className="mx-auto max-w-7xl px-10 py-10 flex gap-0">

        {/* Left: description panel */}
        {navItem.panel &&
          (navItem.panel.description_heading || navItem.panel.description_text) && (
            <div className="w-56 flex-shrink-0 flex flex-col pr-10 border-r border-[#dfddd7] mr-10">
              {navItem.panel.description_heading && (
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a9b93] font-sans">
                  {navItem.panel.description_heading}
                </p>
              )}
              {navItem.panel.description_text && (
                <p className="text-sm leading-relaxed text-[#5a5952] font-sans">
                  {navItem.panel.description_text}
                </p>
              )}
              {navItem.panel.card_href && (
                <Link
                  href={navItem.panel.card_href}
                  onClick={onLinkClick}
                  className="mt-auto pt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#262720] hover:text-[#3a3933] transition-colors font-sans tracking-widest uppercase"
                >
                  Explore all <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          )}

        {/* Middle: columns */}
        {navItem.columns.length > 0 && (
          <div className="flex gap-12 flex-1 flex-wrap">
            {navItem.columns.map((col) => (
              <div key={col.id} className="flex flex-col min-w-[140px]">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a9b93] border-b border-[#dfddd7] pb-2 font-sans">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => {
                    const active = pathname === link.href || pathname?.startsWith(link.href + "/");
                    return (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          onClick={onLinkClick}
                          className={`
                            group/link text-sm transition-colors duration-150
                            flex items-center gap-2 font-sans
                            ${active
                              ? "text-[#262720] font-semibold"
                              : "text-[#5a5952] hover:text-[#262720]"
                            }
                          `}
                        >
                          <span
                            className={`
                              inline-block w-1 h-1 rounded-full flex-shrink-0 transition-colors
                              ${active ? "bg-[#262720]" : "bg-transparent group-hover/link:bg-[#9a9b93]"}
                            `}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Right: featured card */}
        {navItem.panel && navItem.panel.card_title && (
          <Link
            href={navItem.panel.card_href || "#"}
            onClick={onLinkClick}
            className="
              relative ml-10 flex-shrink-0 h-60 w-72
              overflow-hidden bg-gray-200
              group/card cursor-pointer
              hover:shadow-2xl transition-shadow duration-300
            "
          >
            <img
              src={navItem.panel.card_image_url || images.hero}
              alt={navItem.panel.card_title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              {navItem.panel.card_label && (
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#D9A441] font-sans">
                  {navItem.panel.card_label}
                </p>
              )}
              <p className="text-lg font-bold leading-snug font-serif">
                {navItem.panel.card_title}
              </p>
              {navItem.panel.card_subtitle && (
                <p className="mt-1 text-xs text-gray-300 font-sans">
                  {navItem.panel.card_subtitle}
                </p>
              )}
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white group-hover/card:gap-2 transition-all font-sans tracking-widest uppercase">
                View details <ChevronRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* Bottom accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#262720]/30 to-transparent" />
    </div>
  );
}

function MobileNavItem({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasMegaMenu = item.columns.length > 0 || !!item.panel;
  const active =
    item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

  return (
    <div className="border-b border-[#dfddd7] last:border-0">
      <div className="flex items-center justify-between py-4">
        <Link
          href={item.href || "#"}
          onClick={() => { if (!hasMegaMenu) onClose(); }}
          className={`text-base font-medium font-sans ${active ? "text-[#262720]" : "text-[#5a5952]"}`}
        >
          {item.label}
        </Link>
        {hasMegaMenu && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={`Toggle ${item.label} submenu`}
            className="p-2 text-[#9a9b93]"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {hasMegaMenu && open && (
        <div className="pb-5 pl-2 flex flex-col gap-6">
          {item.columns.map((col) => (
            <div key={col.id}>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a9b93] font-sans">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`text-sm font-sans ${
                        pathname === link.href ? "text-[#262720] font-semibold" : "text-[#5a5952]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {item.panel?.card_href && (
            <Link
              href={item.panel.card_href}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#262720] font-sans tracking-widest uppercase"
            >
              {item.panel.card_label || "Explore"} <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function MegaMenuHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMenuId(null);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenuId(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const handleNavMouseEnter = (item: NavItem) => {
    const hasMegaMenu = item.columns.length > 0 || !!item.panel;
    if (!hasMegaMenu) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenuId(item.id);
  };

  const handleNavMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenuId(null), 120);
  };

  const handleMegaMenuMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleMegaMenuMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenuId(null), 120);
  };

  const activeNavItem = NAV_ITEMS.find((i) => i.id === openMenuId) ?? null;

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#f6f4ef]/95 backdrop-blur-md shadow-md"
          : openMenuId
          ? "bg-[#f6f4ef] shadow-none"
          : "bg-[#f6f4ef] shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpenMenuId(null); }}
          className="flex items-center gap-2.5 text-[#262720] flex-shrink-0"
          aria-label="Furtinuer home"
        >
          <img src="/logo.png" alt="Furtinuer" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 h-full" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const hasMegaMenu = item.columns.length > 0 || !!item.panel;
            const active = isActive(item.href);
            const menuOpen = openMenuId === item.id;

            return (
              <div
                key={item.id}
                className="relative flex items-center h-full"
                onMouseEnter={() => handleNavMouseEnter(item)}
                onMouseLeave={handleNavMouseLeave}
              >
                <Link
                  href={item.href || "#"}
                  aria-haspopup={hasMegaMenu ? "true" : undefined}
                  aria-expanded={hasMegaMenu ? menuOpen : undefined}
                  className={`
                    relative px-4 py-5 text-sm font-medium transition-colors duration-150
                    flex items-center gap-1 select-none whitespace-nowrap font-sans tracking-widest uppercase
                    ${active || menuOpen ? "text-[#262720]" : "text-[#5a5952] hover:text-[#262720]"}
                  `}
                >
                  {item.label}
                  {hasMegaMenu && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 opacity-50 transition-transform duration-200 ${menuOpen ? "rotate-180 opacity-100" : ""}`}
                    />
                  )}
                  <span
                    className={`
                      absolute bottom-3 left-4 right-4 h-0.5 bg-[#262720]
                      transition-transform duration-200 origin-center
                      ${active || menuOpen ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative" ref={searchRef}>
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-[#5a5952] hover:text-[#262720] transition-colors"
              aria-label="Search"
              aria-expanded={isSearchOpen}
            >
              <Search className="h-5 w-5" />
            </button>

            {isSearchOpen && (
              <div className="absolute right-0 top-11 w-72 bg-white rounded-xl p-2 shadow-xl z-50">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-3 py-2 text-sm border border-[#dfddd7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#262720] font-sans"
                  autoFocus
                />
                {searchQuery && (
                  <div className="mt-2 pt-2 border-t border-[#dfddd7]">
                    <Link
                      href={`/search?q=${encodeURIComponent(searchQuery)}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="block w-full text-center text-sm text-[#262720] hover:underline font-sans"
                    >
                      Search for "{searchQuery}"
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            className="p-2 text-[#5a5952] hover:text-[#262720] transition-colors"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="p-2 text-[#5a5952] hover:text-[#262720] transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>

          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => setIsProfileOpen((o) => !o)}
              className="flex items-center gap-2 border border-[#dfddd7] bg-white px-3 py-2 text-sm text-[#5a5952] hover:border-[#9a9b93] transition-colors font-sans"
              aria-expanded={isProfileOpen}
              aria-label="Open profile menu"
            >
              <User size={15} />
              <span>{isSignedIn ? "Demo User" : "Sign in"}</span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-11 w-52 border border-[#dfddd7] bg-white rounded-xl p-2 text-[#262720] shadow-xl z-50">
                {isSignedIn ? (
                  <>
                    <p className="px-3 py-2 text-xs text-[#9a9b93] uppercase tracking-wider font-sans">Demo User</p>
                    <button
                      type="button"
                      onClick={() => { setIsSignedIn(false); setIsProfileOpen(false); }}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm rounded-lg hover:bg-gray-50 transition-colors font-sans"
                    >
                      <LogOut size={14} /> Log out
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => { setIsSignedIn(true); setIsProfileOpen(false); }}
                    className="w-full bg-[#262720] text-white text-sm px-3 py-2 rounded-lg hover:bg-[#3a3933] transition-colors font-sans"
                  >
                    Sign in as demo user
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((o) => !o)}
          className="text-[#5a5952] hover:text-[#262720] transition-colors md:hidden p-1"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full-width Mega Menu */}
      <div
        onMouseEnter={handleMegaMenuMouseEnter}
        onMouseLeave={handleMegaMenuMouseLeave}
        className={`
          hidden md:block w-full
          transition-all duration-200 ease-out overflow-hidden
          ${activeNavItem ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 pointer-events-none"}
        `}
        aria-hidden={!activeNavItem}
      >
        {activeNavItem && (
          <MegaMenuPanel
            navItem={activeNavItem}
            pathname={pathname}
            onLinkClick={() => setOpenMenuId(null)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#f6f4ef] border-t border-[#dfddd7]
          ${isMenuOpen ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"}
        `}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-6 py-2 pb-8">
          {NAV_ITEMS.map((item) => (
            <MobileNavItem
              key={item.id}
              item={item}
              pathname={pathname}
              onClose={() => setIsMenuOpen(false)}
            />
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              className="flex items-center gap-2 border border-[#dfddd7] text-[#5a5952] text-sm py-3 hover:bg-gray-50 transition-colors font-sans"
            >
              <Search className="h-4 w-4" /> Search
            </button>
            <button
              type="button"
              className="flex items-center gap-2 border border-[#dfddd7] text-[#5a5952] text-sm py-3 hover:bg-gray-50 transition-colors font-sans"
            >
              <Heart className="h-4 w-4" /> Wishlist
            </button>
            <button
              type="button"
              className="flex items-center gap-2 border border-[#dfddd7] text-[#5a5952] text-sm py-3 hover:bg-gray-50 transition-colors font-sans"
            >
              <ShoppingCart className="h-4 w-4" /> Cart
            </button>
            <button
              type="button"
              onClick={() => setIsSignedIn((v) => !v)}
              className="border border-[#dfddd7] text-[#5a5952] text-sm py-3 hover:bg-gray-50 transition-colors rounded-full font-sans"
            >
              {isSignedIn ? "Sign out" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
