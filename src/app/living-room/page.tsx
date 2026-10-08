'use client'

import { Hero } from '@/components/WoodenStreetHero'
import { ProductCard, products } from '@/components/WoodenStreetProductPage'

export default function LivingRoomPage() {
  const livingRoomProducts = products.filter(p => p.category === 'Living room')

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="bg-[var(--color-secondary)] px-4 py-2 text-center text-[11px] font-semibold tracking-[0.16em] text-white sm:text-xs">
        FLAT 12% OFF ON FIRST ORDER &nbsp; | &nbsp; USE CODE: WELCOME12
      </div>

      <Hero />

      <section className="bg-[var(--color-background-alt)] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">Living Room</p>
            <h1 className="mt-2 font-serif text-4xl tracking-[-0.035em] sm:text-5xl">Transform Your Living Space</h1>
            <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
              Discover our curated collection of living room furniture designed for comfort and style. From plush sofas to elegant coffee tables, find everything you need to create your perfect space.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4 sm:gap-5">
            {livingRoomProducts.map((product, index) => (
              <div key={product.id} className="group relative bg-white p-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.2)]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
