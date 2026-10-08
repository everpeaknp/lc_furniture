'use client'

import { useEffect, useMemo, useState, useRef } from 'react'
import { motion } from 'motion/react'
import Lenis from 'lenis'
import { ShoppingBag, ArrowRight, SlidersHorizontal } from 'lucide-react'
import { Hero } from './WoodenStreetHero'
import { ProductCard } from './WoodenStreetProductPage'

const categories = [
  { name: 'Living room', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=85' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=85' },
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=700&q=85' },
  { name: 'Study & office', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164d5e3c?auto=format&fit=crop&w=700&q=85' },
  { name: 'Decor', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=85' },
]

const products = [
  {
    id: 'sofa-cum-bed',
    name: 'Sofa Cum Bed',
    category: 'Living room',
    price: 24999,
    oldPrice: 34999,
    rating: 4.8,
    reviewCount: 128,
    description: 'A sofa by day and a bed by night, built on a sturdy frame with a smooth fold-out mechanism. Sized for small apartments and guest rooms.',
    images: ['https://images.woodenstreet.de/image/data/ws-nextjs/home-page/mid-banners/all-sofa-cum-beds.jpg'],
    colors: [
      { name: 'Natural oak', hex: '#C9A27A' },
      { name: 'Walnut', hex: '#6B4630' },
      { name: 'Ash grey', hex: '#B9B6AE' },
    ],
    href: '/all-sofa-cum-beds',
  },
  {
    id: 'coffee-table',
    name: 'Coffee Table',
    category: 'Living room',
    price: 8999,
    oldPrice: 11999,
    rating: 4.6,
    reviewCount: 64,
    description: 'Centre table with a solid top.',
    images: ['https://images.woodenstreet.de/image/data/ws-nextjs/home-page/mid-banners/all-coffee-tables.jpg'],
    colors: [
      { name: 'Natural oak', hex: '#C9A27A' },
      { name: 'Walnut', hex: '#6B4630' },
      { name: 'Ash grey', hex: '#B9B6AE' },
    ],
    href: '/all-coffee-tables',
  },
  {
    id: 'tv-unit',
    name: 'TV Unit',
    category: 'Living room',
    price: 15999,
    rating: 4.7,
    reviewCount: 91,
    description: 'TV unit with closed storage.',
    images: ['https://images.woodenstreet.de/image/data/ws-nextjs/home-page/mid-banners/tv-units.jpg'],
    colors: [
      { name: 'Natural oak', hex: '#C9A27A' },
      { name: 'Walnut', hex: '#6B4630' },
      { name: 'Ash grey', hex: '#B9B6AE' },
    ],
    href: '/tv-units',
  },
  {
    id: 'office-chair',
    name: 'Office Chair',
    category: 'Study & office',
    price: 6999,
    oldPrice: 8999,
    rating: 4.5,
    reviewCount: 47,
    description: 'Ergonomic chair for long days.',
    images: ['https://images.woodenstreet.de/image/data/ws-nextjs/home-page/mid-banners/office-chairs.jpg'],
    colors: [
      { name: 'Natural oak', hex: '#C9A27A' },
      { name: 'Walnut', hex: '#6B4630' },
      { name: 'Ash grey', hex: '#B9B6AE' },
    ],
    href: '/office-chairs',
  },
  {
    id: 'home-temple',
    name: 'Home Temple',
    category: 'Decor',
    price: 12999,
    rating: 4.9,
    reviewCount: 36,
    description: 'A calm corner for your home.',
    images: ['https://images.woodenstreet.de/image/data/ws-nextjs/home-page/mid-banners/all-home-temple.jpg'],
    colors: [
      { name: 'Natural oak', hex: '#C9A27A' },
      { name: 'Walnut', hex: '#6B4630' },
      { name: 'Ash grey', hex: '#B9B6AE' },
    ],
    href: '/all-home-temple',
  },
  {
    id: 'study-table',
    name: 'Study Table',
    category: 'Study & office',
    price: 9999,
    oldPrice: 12999,
    rating: 4.6,
    reviewCount: 58,
    description: 'Study table with storage.',
    images: ['https://images.woodenstreet.de/image/data/ws-nextjs/home-page/mid-banners/all-study-tables.jpg'],
    colors: [
      { name: 'Natural oak', hex: '#C9A27A' },
      { name: 'Walnut', hex: '#6B4630' },
      { name: 'Ash grey', hex: '#B9B6AE' },
    ],
    href: '/all-study-tables',
  },
]

export function WoodenStreetHome() {
  const [cartCount, setCartCount] = useState(0)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category.toLowerCase().includes(activeCategory.toLowerCase())
    return matchesCategory
  }), [activeCategory])

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="bg-[var(--color-secondary)] px-4 py-2 text-center text-[11px] font-semibold tracking-[0.16em] text-white sm:text-xs">
        FLAT 12% OFF ON FIRST ORDER &nbsp; | &nbsp; USE CODE: WELCOME12
      </div>

      {/* Quick action bar */}
      <div className="fixed right-4 top-24 z-40 flex flex-col gap-2">
        <button
          aria-label="Shopping bag"
          className="relative rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-[var(--color-background-alt)]"
          onClick={() => setCartCount(cartCount + 1)}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-[10px] text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <Hero />

      <section className="mx-auto max-w-[1320px] overflow-hidden px-5 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">Shop by room</p>
            <h2 className="mt-2 font-serif text-3xl tracking-[-0.035em] sm:text-4xl">Find your kind of comfort</h2>
          </div>
          <a href="#shop" className="hidden items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] sm:flex">
            View all <ArrowRight size={16} />
          </a>
        </div>
        <div className="room-card-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:gap-6 lg:overflow-visible">
          {categories.map((category, index) => (
            <motion.a
              href="#shop"
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className="room-card group relative min-w-[280px] snap-start overflow-hidden rounded-[18px] bg-[var(--color-background-alt)] sm:min-w-[320px] sm:flex-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="aspect-[0.85] overflow-hidden">
                <img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-[var(--color-light-beige)]/95 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text)] shadow-sm backdrop-blur-sm">
                <span>View {category.name}</span>
                <ArrowRight size={15} />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="shop" className="bg-[var(--color-background-alt)] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">Curated for you</p>
              <h2 className="mt-2 font-serif text-3xl tracking-[-0.035em] sm:text-4xl">Bestsellers, made better</h2>
            </div>
            <div className="flex items-center gap-5 overflow-x-auto text-sm">
              <button
                onClick={() => setActiveCategory('All')}
                className={activeCategory === 'All' ? 'border-b-2 border-[var(--color-secondary)] pb-2 font-semibold' : 'pb-2 text-[var(--color-text-muted)]'}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={activeCategory === category.name ? 'border-b-2 border-[var(--color-secondary)] pb-2 font-semibold' : 'whitespace-nowrap pb-2 text-[var(--color-text-muted)]'}
                >
                  {category.name}
                </button>
              ))}
              <SlidersHorizontal size={17} className="ml-2" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4 sm:gap-5">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <ProductCard product={product} onAdd={(p) => setCartCount((c) => c + 1)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-8 px-5 py-16 text-center sm:flex-row sm:text-left lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">Made for real homes</p>
          <h2 className="mt-2 max-w-lg font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Quality that stays with you, season after season.</h2>
        </div>
        <div className="grid grid-cols-3 gap-7 text-center">
          <div>
            <p className="font-serif text-3xl text-[var(--color-secondary)]">14+</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Years of craft</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-[var(--color-secondary)]">100k</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Happy homes</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-[var(--color-secondary)]">36</p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Cities served</p>
          </div>
        </div>
      </section>
    </main>
  )
}
