"use client";

/**
 * WoodenStreet commercial hero: single-file version.
 * Deps: framer-motion, lucide-react, shadcn/ui (button, badge). Needs `cn` from "@/lib/utils".
 *   npm i framer-motion lucide-react
 *   npx shadcn@latest add button badge
 * Usage: import { Hero } from "@/components/WoodenStreetHero";  <Hero />
 *
 * Layout (1440): Big auto slider 920x640 | Medium square hover slider 400x400 + Small fixed offer 400x216.
 * Images are linked from woodenstreet.com for prototyping; host your own copies for production.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgePercent, ChevronLeft, ChevronRight, MapPin, Pause, Play, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ───────────────────────── Data ─────────────────────────
// Content and image URLs taken from https://www.woodenstreet.com/ (homepage).
// For production, download the images and serve them from your own CDN/bucket.
const IMG = "https://images.woodenstreet.de/image/data";

export type BigSlide = { id: string; label: string; href: string; image: string; alt: string };
export type HoverSlide = { id: string; label: string; tagline: string; href: string; image: string; alt: string };

export const bigSlides: BigSlide[] = [
  { id: "festive", label: "Festive Sale", href: "/festive-sale", image: `${IMG}/website-sale/festives/1.jpg?v=5`, alt: "Festive sale: furniture up to 70% off" },
  { id: "beds", label: "Beds", href: "/all-beds", image: `${IMG}/website-sale/festives/2.jpg?v=5`, alt: "Shop beds online" },
  { id: "dining", label: "6-Seater Dining", href: "/6-seater-dining-table-sets", image: `${IMG}/website-sale/festives/3.jpg?v=5`, alt: "6-seater dining table sets" },
  { id: "sofa-cum-beds", label: "Sofa Cum Beds", href: "/sofa-cum-beds", image: `${IMG}/website-sale/festives/4.jpg?v=5`, alt: "Sofa cum beds" },
  { id: "coffee-tables", label: "Coffee Tables", href: "/coffee-tables", image: `${IMG}/website-sale/festives/5.jpg?v=5`, alt: "Coffee tables" },
  { id: "lounge-chairs", label: "Lounge Chairs", href: "/lounge-chairs", image: `${IMG}/website-sale/festives/6.jpg?v=5`, alt: "Lounge chairs" },
  { id: "study-tables", label: "Study Tables", href: "/all-study-tables", image: `${IMG}/website-sale/festives/7.jpg?v=5`, alt: "Study tables" },
];

export const hoverSlides: HoverSlide[] = [
  { id: "sofa-cum-beds", label: "Sofa Cum Beds", tagline: "Sit by day, sleep by night", href: "/all-sofa-cum-beds", image: `${IMG}/ws-nextjs/home-page/mid-banners/all-sofa-cum-beds.jpg`, alt: "Sofa cum beds" },
  { id: "coffee-tables", label: "Coffee Tables", tagline: "Centre tables for every living room", href: "/all-coffee-tables", image: `${IMG}/ws-nextjs/home-page/mid-banners/all-coffee-tables.jpg`, alt: "Coffee and centre tables" },
  { id: "tv-units", label: "TV Units", tagline: "Solid wood and engineered wood", href: "/tv-units", image: `${IMG}/ws-nextjs/home-page/mid-banners/tv-units.jpg`, alt: "TV units" },
  { id: "office-chairs", label: "Office Chairs", tagline: "Comfort for long working days", href: "/office-chairs", image: `${IMG}/ws-nextjs/home-page/mid-banners/office-chairs.jpg`, alt: "Office chairs" },
  { id: "home-temples", label: "Home Temples", tagline: "A calm corner for your home", href: "/all-home-temple", image: `${IMG}/ws-nextjs/home-page/mid-banners/all-home-temple.jpg`, alt: "Home temples" },
  { id: "study-tables", label: "Study Tables", tagline: "Built for focus and storage", href: "/all-study-tables", image: `${IMG}/ws-nextjs/home-page/mid-banners/all-study-tables.jpg`, alt: "Study tables" },
];

export const offerImage = `${IMG}/ws-nextjs/home-page/store_bg.jpg`;

// ───────────────────────── Big: auto slider ─────────────────────────


const INTERVAL_MS = 5000;
const TICK_MS = 50;
const N = bigSlides.length;

const variants = {
  enter: (d: number) => ({ opacity: 0, x: d * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d * -48 }),
};

export function BigAutoSlider({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const paused = hovering || focused || userPaused || !!reduceMotion;

  const step = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + N) % N);
    setProgress(0);
  }, []);

  const jump = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
    setProgress(0);
  };

  // Autoplay: progress ticks while not paused; advance at 100%.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setProgress((p) => p + (TICK_MS / INTERVAL_MS) * 100), TICK_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (progress >= 100) step(1);
  }, [progress, step]);

  const slide = bigSlides[index];

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      className={cn("relative isolate overflow-hidden rounded-3xl bg-stone-900", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") step(-1);
        if (e.key === "ArrowRight") step(1);
      }}
    >
      <div aria-live={paused ? "polite" : "off"} className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.a
            key={slide.id}
            href={slide.href}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-label={`${slide.label} – slide ${index + 1} of ${N}`}
            className="absolute inset-0 block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/80"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
          </motion.a>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2 md:right-6 md:top-6">
        <Button
          size="icon"
          variant="secondary"
          aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
          onClick={() => setUserPaused((p) => !p)}
          className="h-10 w-10 rounded-full bg-white/85 text-stone-900 backdrop-blur hover:bg-white"
        >
          {userPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </Button>
        <Button
          size="icon"
          variant="secondary"
          aria-label="Previous slide"
          onClick={() => step(-1)}
          className="h-10 w-10 rounded-full bg-white/85 text-stone-900 backdrop-blur hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          aria-label="Next slide"
          onClick={() => step(1)}
          className="h-10 w-10 rounded-full bg-white/85 text-stone-900 backdrop-blur hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Tabs with progress */}
      <div role="tablist" aria-label="Choose slide" className="absolute inset-x-4 bottom-4 z-10 grid grid-cols-7 gap-2 md:inset-x-8 md:bottom-6">
        {bigSlides.map((s, i) => {
          const active = i === index;
          const width = i < index ? 100 : active ? Math.min(progress, 100) : 0;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={active}
              aria-label={s.label}
              onClick={() => jump(i)}
              className="group text-left focus-visible:outline-none"
            >
              <div className="h-[3px] overflow-hidden rounded-full bg-white/30 group-focus-visible:ring-2 group-focus-visible:ring-white">
                <div className="h-full bg-white" style={{ width: `${width}%` }} />
              </div>
              <span
                className={cn(
                  "mt-2 hidden truncate text-xs font-medium transition-colors md:block",
                  active ? "text-white" : "text-white/65 group-hover:text-white"
                )}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

// ───────────────────────── Medium: hover slider ─────────────────────────


const HN = hoverSlides.length;

export function HoverSliderCard({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const slide = hoverSlides[index];

  // Mouse only: scrub across the card width to change product.
  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const i = Math.floor(((e.clientX - r.left) / r.width) * HN);
    setIndex(Math.min(HN - 1, Math.max(0, i)));
  };

  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + HN) % HN);
  const arrowClass =
    "absolute top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full bg-white text-stone-900 shadow-lg hover:bg-white " +
    "opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100";

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onPointerMove={onPointerMove}
      className={cn(
        "group relative isolate overflow-hidden rounded-3xl bg-stone-200 shadow-sm transition-shadow duration-300 hover:shadow-2xl",
        className
      )}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={slide.id}
          src={slide.image}
          alt={slide.alt}
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: hovered ? 1.07 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />

      {/* Segment indicator */}
      <div className="absolute inset-x-5 top-4 z-10 flex gap-1" aria-hidden>
        {hoverSlides.map((s, i) => (
          <span key={s.id} className={cn("h-[3px] flex-1 rounded-full transition-colors", i === index ? "bg-white" : "bg-white/35")} />
        ))}
      </div>

      {/* Arrows: appear on hover/focus, always visible on touch */}
      <Button size="icon" variant="secondary" aria-label="Previous product" onClick={() => step(-1)} onPointerMove={(e) => e.stopPropagation()} className={cn(arrowClass, "left-3")}>
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button size="icon" variant="secondary" aria-label="Next product" onClick={() => step(1)} onPointerMove={(e) => e.stopPropagation()} className={cn(arrowClass, "right-3")}>
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Copy + CTA (CTA is the single stretched link for the card) */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-5 text-white">
        <div className="min-w-0">
          <Badge className="mb-2 border-0 bg-white/90 text-stone-900 hover:bg-white/90">
            {index + 1} / {HN}
          </Badge>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="truncate text-2xl font-semibold leading-tight">{slide.label}</h3>
              <p className="truncate text-sm text-white/85">{slide.tagline}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <a
          href={slide.href}
          className={cn(
            buttonVariants({ size: "sm" }),
            "shrink-0 rounded-full transition-colors duration-200",
            hovered ? "bg-[#C0562B] text-white hover:bg-[#C0562B]/90" : "bg-white text-stone-900 hover:bg-white/90"
          )}
        >
          Shop now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

// ───────────────────────── Small: fixed offer ─────────────────────────

// Intentionally static: no motion, no auto-change. It anchors the standing commercial offer.
export function FixedOfferCard({ className }: { className?: string }) {
  return (
    <aside aria-label="Standing offers" className={cn("relative isolate overflow-hidden rounded-3xl text-white", className)}>
      <img src={offerImage} alt="" aria-hidden className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#435471]/95 via-[#435471]/90 to-[#2B374D]/90" />

      <div className="flex h-full flex-col justify-between gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge className="border-0 bg-[#D9A441] text-stone-900 hover:bg-[#D9A441]">Festive offer</Badge>
            <h3 className="mt-3 flex items-start gap-2 text-2xl font-semibold leading-tight">
              <Truck className="mt-1 h-5 w-5 shrink-0" aria-hidden />
              Free shipping across India
            </h3>
          </div>
          <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full bg-[#D9A441] text-stone-900">
            <BadgePercent className="h-6 w-6" aria-hidden />
            <span className="mt-1 text-center text-[10px] font-bold leading-tight">No cost EMI</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-sm text-white/85">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            Visit an experience store near you
          </p>
          <a
            href="/offline-furniture-store"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "shrink-0 rounded-full border-white/70 bg-transparent text-white hover:bg-white hover:text-[#2B374D]"
            )}
          >
            Find a store <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}

// ───────────────────────── Hero (grid) ─────────────────────────


/**
 * Desktop grid (1440): 1344 container, 24 gap
 *   Big (auto slider)             920 x 640
 *   Medium (square, hover slider) 400 x 400
 *   Small (fixed)                 400 x 216
 */
export function Hero() {
  const reduce = useReducedMotion();
  const container = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.12 } } };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section aria-label="Featured offers" className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-12 md:py-8">
      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 lg:grid-cols-[minmax(0,920fr)_400px]">
        <motion.div variants={item} className="h-[420px] md:h-[520px] lg:h-[640px]">
          <BigAutoSlider className="h-full" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[400px_216px]">
          <motion.div variants={item} className="aspect-square sm:aspect-auto sm:h-[360px] lg:h-full">
            <HoverSliderCard className="h-full" />
          </motion.div>
          <motion.div variants={item} className="min-h-[216px] sm:h-[360px] lg:h-full">
            <FixedOfferCard className="h-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
