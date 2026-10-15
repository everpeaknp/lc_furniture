'use client';

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantityStepper() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div role="group" aria-label="Quantity" className="inline-flex h-10 items-center border border-[#d8d5cc] bg-white">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={quantity <= 1}
        onClick={() => setQuantity((current) => Math.max(1, current - 1))}
        className="grid h-full w-10 place-items-center text-[#334155] transition-colors hover:bg-[#f1efe9] disabled:cursor-not-allowed disabled:text-[#cbd5e1]"
      >
        <Minus size={14} aria-hidden="true" />
      </button>
      <output aria-live="polite" className="grid h-full min-w-10 place-items-center border-x border-[#d8d5cc] px-2 text-sm text-[#172554]">
        {quantity}
      </output>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => setQuantity((current) => current + 1)}
        className="grid h-full w-10 place-items-center text-[#334155] transition-colors hover:bg-[#f1efe9]"
      >
        <Plus size={14} aria-hidden="true" />
      </button>
    </div>
  );
}