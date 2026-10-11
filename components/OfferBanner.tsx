"use client";

import { ArrowRight, BadgePercent, MapPin, Truck } from "lucide-react";
import Link from "next/link";

export default function OfferBanner({ className }: { className?: string }) {
  return (
    <div
      className={`relative isolate overflow-hidden w-full h-full ${className}`}
      role="banner"
      aria-label="Special offer banner"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=85"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1e3a8a]/95 via-[#1d4ed8]/90 to-[#172554]/95" />

      {/* Content */}
      <div className="flex h-full flex-col justify-between gap-4 p-4 sm:p-6 md:p-8">
        {/* Top section: Offer details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4">
          <div className="flex-1">
            <span className="inline-block px-2 py-1 bg-[#faf8f2] text-[#1e3a8a] text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              Special offer
            </span>
            <h3 className="mt-3 flex items-start gap-2 text-lg sm:text-xl md:text-2xl font-semibold leading-tight font-sans text-white">
              <Truck className="mt-1 h-5 w-5 shrink-0" aria-hidden />
              <span className="flex-1">
                Free shipping on orders over
                <br className="hidden sm:block" />
                {" "}Rs. 50,000
              </span>
            </h3>
          </div>

          {/* No cost EMI badge */}
          <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 flex-col items-center justify-center bg-[#faf8f2] text-[#1e3a8a]">
            <BadgePercent className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
            <span className="mt-1 text-center text-[9px] sm:text-[10px] font-bold leading-tight tracking-widest uppercase">
              No cost EMI
            </span>
          </div>
        </div>

        {/* Bottom section: Store locator */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <p className="flex items-center gap-2 text-xs sm:text-sm text-white/85 font-sans">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            <span>Visit an experience store near you</span>
          </p>
          <Link
            href="/contact"
            className="shrink-0 px-4 py-2 border border-white/70 bg-transparent text-white text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#1e3a8a] transition-colors text-center whitespace-nowrap"
          >
            Find a store
            <ArrowRight className="inline h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
