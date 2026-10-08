"use client";

import { useState } from "react";
import { Heart, Star, ShoppingCart, Eye } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  material: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  description: string;
  badge?: "bestseller" | "new" | "made-to-order";
}

export function ProductCard({
  id,
  name,
  category,
  material,
  price,
  originalPrice,
  rating,
  image,
  description,
  badge,
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
              badge === "bestseller"
                ? "bg-[var(--color-primary)] text-white"
                : badge === "new"
                ? "bg-[var(--color-secondary)] text-white"
                : "bg-[var(--color-charcoal)] text-white"
            }`}
          >
            {badge === "bestseller" ? "Bestseller" : badge === "new" ? "New" : "Made to order"}
          </span>
        </div>
      )}

      {/* Wishlist button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-all hover:scale-110"
        aria-label="Add to wishlist"
      >
        <Heart
          size={18}
          fill={isLiked ? "var(--color-primary)" : "none"}
          className={isLiked ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"}
        />
      </button>

      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-background-alt)]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick actions overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center gap-3">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white"
            >
              <Eye size={16} className="mr-2" />
              Quick view
            </Button>
            <Button
              size="sm"
              className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]"
            >
              <ShoppingCart size={16} className="mr-2" />
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        {/* Category and Material */}
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
          <span>{category}</span>
          <span className="text-[var(--color-border)]">·</span>
          <span>{material}</span>
        </div>

        {/* Product Name */}
        <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)] leading-tight group-hover:text-[var(--color-primary)] transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(rating) ? "var(--color-gold-accent)" : "none"}
                className={i < Math.floor(rating) ? "text-[var(--color-gold-accent)]" : "text-[var(--color-border)]"}
              />
            ))}
          </div>
          <span className="text-xs text-[var(--color-text-muted)]">{rating}</span>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm text-[var(--color-text-muted)] line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xl font-bold text-[var(--color-text)]">${price.toLocaleString()}</span>
          {originalPrice && (
            <>
              <span className="text-sm text-[var(--color-text-muted)] line-through">
                ${originalPrice.toLocaleString()}
              </span>
              {discount > 0 && (
                <span className="text-xs font-semibold text-[var(--color-primary)]">
                  {discount}% OFF
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
