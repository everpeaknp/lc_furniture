'use client'

import { useEffect, useMemo, useState, useRef } from 'react'
import { motion } from 'motion/react'
import Lenis from 'lenis'
import { Heart, ShoppingBag, ArrowRight, SlidersHorizontal } from 'lucide-react'
import { GradientFooter } from './GradientFooter'
import { Hero } from './WoodenStreetHero'

const categories = [
  { name: 'Sofas', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=85' },
  { name: 'Beds', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=85' },
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=700&q=85' },
  { name: 'Study', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164d5e3c?auto=format&fit=crop&w=700&q=85' },
  { name: 'Storage', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=700&q=85' },
  { name: 'Decor', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=85' },
]

const products = [
  { name: 'Hugo 3 Seater Sofa', category: 'Sofas', price: '₹32,999', old: '₹42,999', discount: '23% OFF', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85' },
  { name: 'Adolphus Solid Wood Bed', category: 'Beds', price: '₹28,490', old: '₹36,990', discount: '23% OFF', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85' },
  { name: 'Mia 6 Seater Dining Set', category: 'Dining', price: '₹24,999', old: '₹31,999', discount: '22% OFF', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=85' },
  { name: 'Alfred Study Table', category: 'Study', price: '₹9,990', old: '₹14,990', discount: '33% OFF', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164d5e3c?auto=format&fit=crop&w=900&q=85' },
]

export function WoodenStreetHome() {
  const [liked, setLiked] = useState<string[]>([])
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
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory
    return matchesCategory
  }), [activeCategory])

  const toggleLike = (name: string) => setLiked((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name])

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#292622]">
      <div className="bg-[#365b43] px-4 py-2 text-center text-[11px] font-semibold tracking-[0.16em] text-white sm:text-xs">FLAT 12% OFF ON FIRST ORDER &nbsp; | &nbsp; USE CODE: WELCOME12</div>

      {/* Quick action bar */}
      <div className="fixed right-4 top-24 z-40 flex flex-col gap-2">
        <button
          aria-label="Wishlist"
          className="rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50"
          onClick={() => setLiked(liked.length ? [] : [products[0].name])}
        >
          <Heart size={20} fill={liked.length ? '#b88951' : 'none'} />
        </button>
        <button
          aria-label="Shopping bag"
          className="relative rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50"
          onClick={() => setCartCount(cartCount + 1)}
        >
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#b88951] text-[10px] text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <Hero />

      <section className="mx-auto max-w-[1320px] overflow-hidden px-5 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b17e49]">Shop by room</p><h2 className="mt-2 font-serif text-3xl tracking-[-0.035em] sm:text-4xl">Find your kind of comfort</h2></div>
          <a href="#shop" className="hidden items-center gap-2 text-sm font-semibold text-[#365b43] sm:flex">View all <ArrowRight size={16} /></a>
        </div>
        <div className="room-card-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:gap-6 lg:overflow-visible">
          {categories.map((category, index) => <motion.a href="#shop" key={category.name} onClick={() => setActiveCategory(category.name)} className={`room-card group relative min-w-[280px] snap-start overflow-hidden rounded-[18px] bg-[#e8e2da] sm:min-w-[320px] sm:flex-1 ${index % 3 === 1 ? 'sm:mt-7' : index % 3 === 2 ? 'sm:mt-12' : ''}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
            <div className="aspect-[0.85] overflow-hidden"><img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" /></div>
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-[#f8f4ed]/95 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#594b40] shadow-sm backdrop-blur-sm"><span>View {category.name}</span><ArrowRight size={15} /></div>
          </motion.a>)}
        </div>
      </section>

      <section id="shop" className="bg-[#f1eee9] px-5 py-16 lg:px-8"><div className="mx-auto max-w-[1320px]"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b17e49]">Curated for you</p><h2 className="mt-2 font-serif text-3xl tracking-[-0.035em] sm:text-4xl">Bestsellers, made better</h2></div><div className="flex items-center gap-5 overflow-x-auto text-sm"><button onClick={() => setActiveCategory('All')} className={activeCategory === 'All' ? 'border-b-2 border-[#365b43] pb-2 font-semibold' : 'pb-2 text-[#776f67]'}>All</button>{categories.slice(0, 4).map((category) => <button key={category.name} onClick={() => setActiveCategory(category.name)} className={activeCategory === category.name ? 'border-b-2 border-[#365b43] pb-2 font-semibold' : 'whitespace-nowrap pb-2 text-[#776f67]'}>{category.name}</button>)}<SlidersHorizontal size={17} className="ml-2" /></div></div><div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4 sm:gap-5">{filteredProducts.map((product, index) => <motion.article key={product.name} className="group" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}><div className="relative aspect-[0.9] overflow-hidden bg-[#e5dfd7]"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-3 top-3 bg-[#365b43] px-2 py-1 text-[10px] font-semibold tracking-wide text-white">{product.discount}</span><button onClick={() => toggleLike(product.name)} aria-label={`Add ${product.name} to wishlist`} className="absolute right-3 top-3 rounded-full bg-white/90 p-2"><Heart size={16} fill={liked.includes(product.name) ? '#b88951' : 'none'} /></button></div><p className="mt-4 text-[11px] uppercase tracking-[0.13em] text-[#8b8177]">{product.category}</p><h3 className="mt-1 text-sm font-medium sm:text-base">{product.name}</h3><div className="mt-2 flex items-center gap-2"><span className="font-semibold">{product.price}</span><span className="text-xs text-[#968d84] line-through">{product.old}</span></div><button onClick={() => setCartCount(cartCount + 1)} className="mt-3 w-full border border-[#bdb4a9] py-2 text-xs font-semibold opacity-0 transition group-hover:opacity-100">Add to bag</button></motion.article>)}</div>{filteredProducts.length === 0 && <p className="py-16 text-center text-[#756d64]">No pieces found. Try another search.</p>}</div></section>

      <section className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-8 px-5 py-16 text-center sm:flex-row sm:text-left lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b17e49]">Made for real homes</p><h2 className="mt-2 max-w-lg font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">Quality that stays with you, season after season.</h2></div><div className="grid grid-cols-3 gap-7 text-center"><div><p className="font-serif text-3xl text-[#365b43]">14+</p><p className="mt-1 text-xs text-[#766e65]">Years of craft</p></div><div><p className="font-serif text-3xl text-[#365b43]">100k</p><p className="mt-1 text-xs text-[#766e65]">Happy homes</p></div><div><p className="font-serif text-3xl text-[#365b43]">36</p><p className="mt-1 text-xs text-[#766e65]">Cities served</p></div></div></section>
      <GradientFooter />
    </main>
  )
}
