'use client'

import { useEffect, useMemo, useState, useRef } from 'react'
import { motion } from 'motion/react'
import Lenis from 'lenis'
import { Heart, ShoppingBag, UserRound, ArrowRight, SlidersHorizontal, Menu, X } from 'lucide-react'
import { MegaMenu } from './MegaMenu'
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

const menuItems = [
  {
    title: 'Sofas',
    subItems: [
      {
        category: 'Sofas',
        items: ['All Sofas', 'Fabric Sofas', 'Wooden Sofas', '3 Seater Sofas', '2 Seater Sofas', '1 Seater Sofas', 'Sofa Sets', 'L Shaped Sofas', 'Chaise Loungers', 'Diwans']
      },
      {
        category: 'Sofa Cum Beds',
        items: ['All Sofa Cum Beds', 'Wooden Sofa Cum Beds', 'Fabric Sofa Cum Beds']
      },
      {
        category: 'Recliners',
        items: ['All Recliners', '1 Seater Recliners', '2 Seater Recliners', '3 Seater Recliners']
      },
      {
        category: 'Seating',
        items: ['Lounge Chairs', 'Accent Chairs', 'Arm Chairs', 'Wingback Chairs', 'Loveseats', 'Benches', 'Ottomans', 'Stools']
      }
    ]
  },
  {
    title: 'Living',
    subItems: [
      {
        category: 'Sofas',
        items: ['All Sofas', 'Fabric Sofas', 'Wooden Sofas', '3 Seater Sofas', '2 Seater Sofas', '1 Seater Sofas', 'Sofa Sets', 'L Shaped Sofas']
      },
      {
        category: 'Chairs',
        items: ['All Chairs', 'Lounge Chairs', 'Arm Chairs', 'Wing Chairs', 'Swing Chair', 'Rocking Chairs']
      },
      {
        category: 'Tables',
        items: ['Coffee Tables', 'Coffee Table Sets', 'Side Tables', 'Nesting Tables', 'Console Table', 'Laptop Tables']
      },
      {
        category: 'TV Units',
        items: ['All TV Units', 'Solid Wood TV Units', 'Engineered Wood TV Units']
      },
      {
        category: 'Living Storage',
        items: ['Bookshelves', 'Chest of Drawers', 'Cabinet & Sideboards', 'Display Units', 'Wall Shelves', 'Home Temples', 'Shoe Racks']
      }
    ]
  },
  {
    title: 'Bedroom',
    subItems: [
      {
        category: 'Beds',
        items: ['All Beds', 'Solid Wood Beds', 'Engineered Wood Beds', 'Upholstered Beds', 'Hydraulic Storage Beds', 'Poster Beds', 'Kids Beds']
      },
      {
        category: 'By Size',
        items: ['King Size Beds', 'Queen Size Beds', 'Double Beds', 'Single Beds']
      },
      {
        category: 'Wardrobes',
        items: ['All Wardrobes', 'Solid Wood Wardrobes', 'Engineered Wood Wardrobes', '1 Door Wardrobes', '2 Door Wardrobes', '3 Door Wardrobes', '4+ Door Wardrobes']
      },
      {
        category: 'Bedroom Tables',
        items: ['Bedside Tables', 'Dressing Tables', 'Breakfast Tables', 'Trunk & Blanket Box']
      },
      {
        category: 'Mattresses',
        items: ['All Mattress', 'King Size Mattress', 'Queen Size Mattress', 'Double Bed Mattress', 'Mattress Protectors', 'Pillows']
      }
    ]
  },
  {
    title: 'Dining',
    subItems: [
      {
        category: 'Dining Sets',
        items: ['All Dining Table Sets', '6 Seater Dining Sets', '4 Seater Dining Sets', '2 Seater Dining Sets', '8 Seater Dining Sets', 'Folding Dining Sets']
      },
      {
        category: 'By Material',
        items: ['Wooden Dining Sets', 'Marble Dining Sets', 'Metal Dining Sets']
      },
      {
        category: 'Dining Chairs',
        items: ['All Dining Chairs', 'Wooden Dining Chairs', 'Fabric Dining Chairs', 'Dining Benches']
      },
      {
        category: 'Kitchen Storage',
        items: ['Kitchen Cabinets', 'Kitchen Trolley', 'Crockery Unit', 'Kitchen Racks', 'Microwave Stand']
      },
      {
        category: 'Bar Furniture',
        items: ['Bar Cabinets', 'Wine Trolleys', 'Bar Table Sets']
      }
    ]
  },
  {
    title: 'Storage',
    subItems: [
      {
        category: 'TV Units',
        items: ['All TV Units', 'Solid Wood TV Units', 'Engineered Wood TV Units']
      },
      {
        category: 'Shoe Racks',
        items: ['Solid Wood Shoe Racks', 'Modular Shoe Racks']
      },
      {
        category: 'Living Storage',
        items: ['Bookshelves', 'Chest of Drawers', 'Cabinet & Sideboards', 'Display Units', 'Wall Shelves', 'Home Temples']
      },
      {
        category: 'Wardrobes',
        items: ['All Wardrobes', 'Solid Wood Wardrobes', 'Engineered Wood Wardrobes', '1 Door Wardrobes', '2 Door Wardrobes', '3 Door Wardrobes']
      },
      {
        category: 'Kitchen Storage',
        items: ['Kitchen Cabinets', 'Kitchen Trolley', 'Crockery Unit', 'Kitchen Racks', 'Microwave Stand']
      }
    ]
  },
  {
    title: 'Study & Office',
    subItems: [
      {
        category: 'Tables',
        items: ['Study Tables', 'Computer Tables', 'Laptop Tables', 'Folding Study Tables', 'Corner Study Table', 'Office Tables']
      },
      {
        category: 'Chairs',
        items: ['Office Chairs', 'Study Chairs', 'Gaming Chairs', 'Executive Chairs', 'Visitor Chairs', 'Office Sofas']
      },
      {
        category: 'Storage',
        items: ['File Cabinets', 'Office Bookcases', 'Wall Shelves']
      }
    ]
  },
  {
    title: 'Outdoor',
    subItems: [
      {
        category: 'Balcony Furniture',
        items: ['Balcony Sets', 'Balcony Chairs', 'Balcony Tables', 'Swings']
      },
      {
        category: 'Outdoor Furniture',
        items: ['All Outdoor Sets', 'Table & Chair Sets', 'Sofa Sets', 'Loungers']
      },
      {
        category: 'Home Garden',
        items: ['Artificial Flowers', 'Artificial Plants']
      }
    ]
  },
  {
    title: 'Decor',
    subItems: [
      {
        category: 'Wall Decor',
        items: ['Wall Shelves', 'Key Holders', 'Wall Mirror', 'Wall Paintings', 'Wall Arts', 'Jharokhas']
      },
      {
        category: 'Clocks',
        items: ['Wall Clocks']
      },
      {
        category: 'Furnishing',
        items: ['Sofa Covers', 'Cushion Covers', 'Rugs And Carpets', 'Table Runners', 'Floor Runners']
      }
    ]
  }
]

export function WoodenStreetHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [liked, setLiked] = useState<string[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [activeCategory, setActiveCategory] = useState('All')
  const [isNavbarVisible, setIsNavbarVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        setIsNavbarVisible(true)
      } else {
        setIsNavbarVisible(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory
    return matchesCategory
  }), [activeCategory])

  const toggleLike = (name: string) => setLiked((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name])

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-[#292622]">
      <div className="bg-[#365b43] px-4 py-2 text-center text-[11px] font-semibold tracking-[0.16em] text-white sm:text-xs">FLAT 12% OFF ON FIRST ORDER &nbsp; | &nbsp; USE CODE: WELCOME12</div>
      
      {/* Sticky Navbar that appears on scroll */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isNavbarVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e7e1d9] shadow-md"
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-5 px-5 py-3 lg:px-8">
          <a href="#top" className="text-xl font-bold text-[#32573f]">Wooden Street</a>
          <div className="hidden lg:block">
            <MegaMenu menuItems={menuItems} />
          </div>
          <div className="flex items-center gap-4 text-[#4d4842] sm:gap-5">
            <button aria-label="Account" className="hidden sm:block"><UserRound size={21} /></button>
            <button aria-label="Wishlist" className="relative" onClick={() => setLiked(liked.length ? [] : [products[0].name])}>
              <Heart size={21} fill={liked.length ? '#b88951' : 'none'} />
              <span className="sr-only">Wishlist</span>
            </button>
            <button aria-label="Shopping bag" className="relative" onClick={() => setCartCount(cartCount + 1)}>
              <ShoppingBag size={21} />
              {cartCount > 0 && <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#b88951] text-[10px] text-white">{cartCount}</span>}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Original Header */}
      <header className="border-b border-[#e7e1d9] bg-[#fbfaf8] relative z-40">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-5 px-5 py-5 lg:px-8">
          <button className="lg:hidden" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
          <a href="#top" className="text-2xl font-bold text-[#32573f]">Wooden Street</a>
          <div className="hidden lg:block">
            <MegaMenu menuItems={menuItems} />
          </div>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} lg:hidden absolute left-0 top-[102px] z-20 w-full flex-col gap-5 border-b border-[#e7e1d9] bg-[#fbfaf8] px-6 py-6 text-sm font-medium`}>
            {menuItems.map((item) => (
              <a key={item.title} href="#shop" className="transition-colors hover:text-[#b37d42]">
                {item.title}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-[#4d4842] sm:gap-5"><button aria-label="Account" className="hidden sm:block"><UserRound size={21} /></button><button aria-label="Wishlist" className="relative" onClick={() => setLiked(liked.length ? [] : [products[0].name])}><Heart size={21} fill={liked.length ? '#b88951' : 'none'} /><span className="sr-only">Wishlist</span></button><button aria-label="Shopping bag" className="relative" onClick={() => setCartCount(cartCount + 1)}><ShoppingBag size={21} />{cartCount > 0 && <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#b88951] text-[10px] text-white">{cartCount}</span>}</button></div>
        </div>
      </header>

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
