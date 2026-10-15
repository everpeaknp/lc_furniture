'use client';

import { useState } from "react";
import { Heart } from "lucide-react";

export default function WishlistToggle() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <button
      type="button"
      aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={isSaved}
      title={isSaved ? "Remove from wishlist" : "Add to wishlist"}
      onClick={() => setIsSaved((saved) => !saved)}
      className="grid h-10 w-10 shrink-0 place-items-center border border-[#d8d5cc] text-[#475569] transition-colors hover:border-[#1e3a8a] hover:text-[#1e3a8a]"
    >
      <Heart size={19} className={isSaved ? "fill-current text-[#1e3a8a]" : ""} aria-hidden="true" />
    </button>
  );
}