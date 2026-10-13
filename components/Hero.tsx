'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgePercent, ChevronLeft, ChevronRight, MapPin, Truck } from "lucide-react";
import Link from "next/link";

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

export type BigSlide = { id: string; label: string; tagline: string; href: string; image: string; alt: string };
export type HoverSlide = { id: string; label: string; tagline: string; href: string; image: string; alt: string };

export const bigSlides: BigSlide[] = [
  { id: "festive", label: "New Collection", tagline: "Fresh arrivals crafted for timeless living.", href: "/shop", image: images.hero, alt: "New furniture collection" },
  { id: "beds", label: "Bedroom Sets", tagline: "Rest deeper in spaces built for comfort.", href: "/bedroom", image: images.bedroom, alt: "Shop bedroom furniture" },
  { id: "dining", label: "Dining Tables", tagline: "Where every meal becomes a memory.", href: "/dining", image: images.dining, alt: "Dining table sets" },
  { id: "sofa-cum-beds", label: "Sofas", tagline: "Sink in, stay a while, live beautifully.", href: "/living-room", image: images.sofa, alt: "Sofa collection" },
  { id: "coffee-tables", label: "Coffee Tables", tagline: "The centrepiece every living room deserves.", href: "/shop", image: images.table, alt: "Coffee tables" },
  { id: "lounge-chairs", label: "Lounge Chairs", tagline: "Designed for the moments you slow down.", href: "/living-room", image: images.chair, alt: "Lounge chairs" },
  { id: "study-tables", label: "Study Tables", tagline: "Built for focus, made to inspire.", href: "/study-office", image: images.desk, alt: "Study tables" },
];

export const hoverSlides: HoverSlide[] = [
  { id: "sofa-cum-beds", label: "Sofa Cum Beds", tagline: "Sit by day, sleep by night", href: "/living-room", image: images.sofa, alt: "Sofa cum beds" },
  { id: "coffee-tables", label: "Coffee Tables", tagline: "Centre tables for every living room", href: "/shop", image: images.table, alt: "Coffee and centre tables" },
  { id: "tv-units", label: "TV Units", tagline: "Solid wood and engineered wood", href: "/shop", image: images.cabinet, alt: "TV units" },
  { id: "office-chairs", label: "Office Chairs", tagline: "Comfort for long working days", href: "/study-office", image: images.chair, alt: "Office chairs" },
  { id: "home-temples", label: "Storage", tagline: "A calm corner for your home", href: "/shop", image: images.cabinet, alt: "Storage solutions" },
  { id: "study-tables", label: "Study Tables", tagline: "Built for focus and storage", href: "/study-office", image: images.desk, alt: "Study tables" },
];

export const offerImage = images.kitchen;

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
  const isSwiping = useRef(false);
  const dragX = useMotionValue(0);
  const paused = hovering || focused || !!reduceMotion;

  const step = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + N) % N);
    setProgress(0);
  }, []);

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
      className={`relative isolate overflow-hidden bg-stone-900 select-none ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") step(-1);
        if (e.key === "ArrowRight") step(1);
      }}
    >
      {/* Slide images */}
      <div aria-live={paused ? "polite" : "off"} className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.a
            key={slide.id}
            href={slide.href}
            onClick={(e) => {
              if (isSwiping.current) e.preventDefault();
            }}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-label={`${slide.label} – slide ${index + 1} of ${N}`}
            className="absolute inset-0 block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/80"
            style={{ x: dragX }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover pointer-events-none"
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
            />
          </motion.a>
        </AnimatePresence>
      </div>

      {/* Invisible drag capture layer */}
      <motion.div
        className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing touch-none"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        style={{ x: dragX }}
        onDragStart={() => {
          isSwiping.current = true;
        }}
        onDragEnd={(_e, info) => {
          dragX.set(0);
          if (info.offset.x < -50 || info.velocity.x < -300) {
            step(1);
          } else if (info.offset.x > 50 || info.velocity.x > 300) {
            step(-1);
          }
          setTimeout(() => {
            isSwiping.current = false;
          }, 100);
        }}
      />

      {/* Explore button — top left */}
      <div className="absolute left-4 top-4 z-20 md:left-8 md:top-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.a
            key={slide.id}
            href={slide.href}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-stone-100 active:bg-stone-200 text-stone-900 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 select-none shadow-sm"
          >
            Explore
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.a>
        </AnimatePresence>
      </div>

      {/* Slide text + progress lines (bottom overlay) */}
      <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none">
        {/* Dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="relative px-4 pb-4 md:px-8 md:pb-6">
          {/* Animated title + description */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 pointer-events-none select-none"
            >
              <p className="mb-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/55 font-sans">
                — {slide.label}
              </p>
              <h2 className="text-2xl md:text-4xl font-semibold leading-tight text-white font-sans">
                {slide.label}
              </h2>
              <p className="mt-2 text-sm md:text-base text-white/70 font-sans font-light">
                {slide.tagline}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress line indicators */}
          <div
            role="tablist"
            aria-label="Slide indicators"
            className="flex gap-2 pointer-events-auto"
          >
            {bigSlides.map((s, i) => {
              const active = i === index;
              const past = i < index;
              const fillWidth = past ? 100 : active ? Math.min(progress, 100) : 0;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={s.label}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                    setProgress(0);
                  }}
                  className="flex-1 group focus-visible:outline-none"
                >
                  <div className="relative h-[3px] overflow-hidden rounded-full bg-white/30 group-focus-visible:ring-2 group-focus-visible:ring-white group-hover:bg-white/50 transition-colors">
                    <div
                      className="absolute inset-y-0 left-0 bg-white rounded-full transition-none"
                      style={{ width: `${fillWidth}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
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

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const i = Math.floor(((e.clientX - r.left) / r.width) * HN);
    setIndex(Math.min(HN - 1, Math.max(0, i)));
  };

  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + HN) % HN);
  const arrowClass =
    "absolute top-1/2 z-20 h-10 w-10 -translate-y-1/2 bg-white text-stone-900 shadow-lg hover:bg-white " +
    "opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100 flex items-center justify-center";

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onPointerMove={onPointerMove}
      className={`group relative isolate overflow-hidden bg-stone-200 shadow-sm transition-shadow duration-300 hover:shadow-2xl ${className}`}
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

      {/* Segment indicator */}
      <div className="absolute inset-x-5 top-4 z-10 flex gap-1" aria-hidden>
        {hoverSlides.map((s, i) => (
          <span key={s.id} className={`h-[3px] flex-1 transition-colors ${i === index ? "bg-white" : "bg-white/35"}`} />
        ))}
      </div>

      {/* Explore button — bottom right */}
      <div className="absolute bottom-4 right-4 z-10 md:bottom-5 md:right-5">
        <AnimatePresence mode="wait" initial={false}>
          <motion.a
            key={slide.id}
            href={slide.href}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-stone-100 active:bg-stone-200 text-stone-900 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 shadow-sm select-none"
          >
            Explore
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.a>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ───────────────────────── Small: fixed offer ─────────────────────────

export function FixedOfferCard({ className }: { className?: string }) {
  return (
    <aside aria-label="Standing offers" className={`relative isolate overflow-hidden text-white ${className}`}>
      <img src={offerImage} alt="" aria-hidden className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1e3a8a]/95 via-[#1d4ed8]/90 to-[#172554]/95" />

      <div className="flex h-full flex-col justify-between gap-4 p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4">
          <div className="flex-1">
            <span className="inline-block px-2 py-1 bg-[#faf8f2] text-[#1e3a8a] text-xs font-semibold tracking-widest uppercase">
              Special offer
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-semibold leading-tight font-sans">
              Experience seamless shopping
            </h3>
            <p className="mt-2 flex items-start gap-2 text-sm sm:text-base font-sans text-white/90">
              <Truck className="mt-1 h-4 w-4 sm:h-5 sm:w-5 shrink-0" aria-hidden />
              <span>Get free shipping on orders over Rs. 50,000</span>
            </p>
          </div>
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 flex-col items-center justify-center bg-[#faf8f2] text-[#1e3a8a]">
            <BadgePercent className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
            <span className="mt-1 text-center text-[9px] sm:text-[10px] font-bold leading-tight tracking-widest uppercase">No cost EMI</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <p className="flex items-center gap-2 text-xs sm:text-sm text-white/85 font-sans">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            <span>Visit an experience store</span>
          </p>
          <Link
            href="/contact"
            className="shrink-0 px-4 py-2 border border-white/70 bg-transparent text-white text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#1e3a8a] transition-colors text-center whitespace-nowrap"
          >
            Find a store <ArrowRight className="inline h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

// ───────────────────────── Hero (grid) ─────────────────────────

export function Hero() {
  const reduce = useReducedMotion();
  const container = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.12 } } };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section aria-label="Featured offers" className="w-full">
      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_400px]">
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
