'use client';

import { useState } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal, X } from "lucide-react";

/* ─── Types ─────────────────────────────────────────── */
export interface FilterState {
  priceMin: number;
  priceMax: number;
  designs: string[];
  materials: string[];
  seats: string[];
  storage: string[];
  finish: string[];
  fastDelivery: boolean;
  clearanceOnly: boolean;
}

export const defaultFilters: FilterState = {
  priceMin: 0,
  priceMax: 500000,
  designs: [],
  materials: [],
  seats: [],
  storage: [],
  finish: [],
  fastDelivery: false,
  clearanceOnly: false,
};

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  category: string; // e.g. "sofas" | "bedroom" | …
  totalCount: number;
  filteredCount: number;
}

/* ─── Per-category filter options ───────────────────── */
const OPTIONS: Record<string, {
  designs?: string[];
  materials?: string[];
  seats?: string[];
  storage?: string[];
  finish?: string[];
}> = {
  sofas: {
    designs:   ["Modern", "Contemporary", "Chesterfield", "Traditional", "Rolled Arm"],
    materials: ["Fabric", "Leather", "Velvet", "Bouclé", "Linen"],
    seats:     ["2 Seater", "3 Seater", "4 Seater", "L-Shape"],
    storage:   ["Without Storage", "With Storage"],
    finish:    ["Honey Finish", "Teak Finish", "Walnut Finish"],
  },
  "living-room": {
    designs:   ["Modern", "Scandinavian", "Industrial", "Mid-Century"],
    materials: ["Fabric", "Wood", "Metal", "Glass"],
    storage:   ["Without Storage", "With Storage"],
    finish:    ["Natural", "Walnut", "White", "Black"],
  },
  bedroom: {
    designs:   ["Modern", "Traditional", "Minimalist", "Rustic"],
    materials: ["Solid Wood", "Engineered Wood", "Upholstered", "Metal"],
    seats:     ["Single", "Double", "Queen", "King"],
    storage:   ["Without Storage", "With Storage", "Hydraulic"],
    finish:    ["Honey Finish", "Walnut Finish", "White", "Natural Oak"],
  },
  mattress: {
    designs:   ["Memory Foam", "Spring", "Hybrid", "Orthopedic", "Latex"],
    seats:     ["Single", "Double", "Queen", "King"],
    finish:    ["Soft", "Medium", "Firm"],
  },
  dining: {
    designs:   ["Modern", "Rustic", "Scandinavian", "Industrial"],
    materials: ["Solid Wood", "Glass", "Marble", "Metal"],
    seats:     ["2 Seater", "4 Seater", "6 Seater", "8 Seater"],
    finish:    ["Natural Oak", "Walnut", "White", "Black"],
  },
  storage: {
    designs:   ["Open Shelf", "Cabinet", "Wardrobe", "Chest"],
    materials: ["Solid Wood", "Engineered Wood", "Metal", "Glass"],
    storage:   ["Without Doors", "With Doors", "With Drawers"],
    finish:    ["Honey Finish", "Walnut Finish", "White", "Natural"],
  },
  "study-office": {
    designs:   ["Modern", "Minimalist", "Industrial", "Traditional"],
    materials: ["Solid Wood", "Engineered Wood", "Metal", "Glass"],
    storage:   ["Without Storage", "With Drawers", "With Shelves"],
    finish:    ["Natural Oak", "Walnut", "White", "Black"],
  },
  outdoor: {
    designs:   ["Contemporary", "Traditional", "Rustic", "Minimalist"],
    materials: ["Teak", "Aluminium", "Rattan", "Steel"],
    seats:     ["2 Seater", "4 Seater", "6 Seater", "Lounger"],
    finish:    ["Natural", "Powder Coated", "Teak Oil"],
  },
};

/* ─── Collapsible filter section ────────────────────── */
function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-[#e5e0d4] py-3">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-sm font-semibold text-[#172554] mb-1"
      >
        {title}
        {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
      </button>
      {open && <div className="mt-2 space-y-1.5">{children}</div>}
    </div>
  );
}

/* ─── Checkbox option ────────────────────────────────── */
function CheckOption({
  label, checked, onChange,
}: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-[#334155] hover:text-[#1e3a8a]">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-3.5 w-3.5 rounded-sm accent-[#1e3a8a]"
      />
      {label}
    </label>
  );
}

/* ─── Toggle list helper ─────────────────────────────── */
function toggle(arr: string[], val: string): string[] {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];
}

/* ─── Main component ─────────────────────────────────── */
export default function FilterSidebar({
  filters, onChange, category, totalCount, filteredCount,
}: FilterSidebarProps) {
  const opts = OPTIONS[category] ?? {};
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeCount =
    filters.designs.length +
    filters.materials.length +
    filters.seats.length +
    filters.storage.length +
    filters.finish.length +
    (filters.fastDelivery ? 1 : 0) +
    (filters.clearanceOnly ? 1 : 0) +
    (filters.priceMin > 0 || filters.priceMax < 500000 ? 1 : 0);

  const reset = () => onChange(defaultFilters);

  const sidebar = (
    <div className="space-y-0">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#e5e0d4]">
        <span className="text-sm font-bold text-[#172554]">Filters</span>
        {activeCount > 0 && (
          <button onClick={reset} className="flex items-center gap-1 text-xs text-[#1e3a8a] hover:underline font-medium">
            <X size={12} /> Reset
          </button>
        )}
      </div>

      {/* Quick toggles */}
      <div className="py-3 border-b border-[#e5e0d4] space-y-2">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-[#334155]">
          <div
            onClick={() => onChange({ ...filters, fastDelivery: !filters.fastDelivery })}
            className={`relative h-5 w-9 rounded-full transition-colors cursor-pointer ${filters.fastDelivery ? "bg-[#1e3a8a]" : "bg-[#cbd5e1]"}`}
          >
            <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${filters.fastDelivery ? "translate-x-4" : "translate-x-0.5"}`} />
          </div>
          Fast Delivery
        </label>
        <label className="flex cursor-pointer items-center gap-2 text-sm text-[#334155]">
          <div
            onClick={() => onChange({ ...filters, clearanceOnly: !filters.clearanceOnly })}
            className={`relative h-5 w-9 rounded-full transition-colors cursor-pointer ${filters.clearanceOnly ? "bg-[#dc2626]" : "bg-[#cbd5e1]"}`}
          >
            <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${filters.clearanceOnly ? "translate-x-4" : "translate-x-0.5"}`} />
          </div>
          Clearance Sale
          {filters.clearanceOnly && (
            <span className="ml-1 rounded bg-[#dc2626] px-1.5 py-0.5 text-[10px] font-bold text-white">SALE</span>
          )}
        </label>
      </div>

      {/* Price range */}
      <FilterSection title="Price Range">
        <div className="flex items-center justify-between text-xs text-[#64748b] mb-2">
          <span>₹{filters.priceMin.toLocaleString("en-IN")}</span>
          <span>₹{filters.priceMax.toLocaleString("en-IN")}</span>
        </div>
        <input
          type="range"
          min={0}
          max={500000}
          step={5000}
          value={filters.priceMax}
          onChange={(e) => onChange({ ...filters, priceMax: Number(e.target.value) })}
          className="w-full accent-[#1e3a8a]"
        />
        <button
          onClick={() => onChange({ ...filters, priceMin: 0, priceMax: 500000 })}
          className="mt-2 w-full rounded border border-[#1e3a8a] py-1 text-xs font-semibold text-[#1e3a8a] hover:bg-[#eff3ff] transition-colors"
        >
          Apply
        </button>
      </FilterSection>

      {/* Dynamic filter sections */}
      {opts.designs && (
        <FilterSection title="Design">
          {opts.designs.map((d) => (
            <CheckOption
              key={d} label={d}
              checked={filters.designs.includes(d)}
              onChange={() => onChange({ ...filters, designs: toggle(filters.designs, d) })}
            />
          ))}
        </FilterSection>
      )}

      {opts.materials && (
        <FilterSection title="Leg / Material">
          {opts.materials.map((m) => (
            <CheckOption
              key={m} label={m}
              checked={filters.materials.includes(m)}
              onChange={() => onChange({ ...filters, materials: toggle(filters.materials, m) })}
            />
          ))}
        </FilterSection>
      )}

      {opts.storage && (
        <FilterSection title="Storage">
          {opts.storage.map((s) => (
            <CheckOption
              key={s} label={s}
              checked={filters.storage.includes(s)}
              onChange={() => onChange({ ...filters, storage: toggle(filters.storage, s) })}
            />
          ))}
        </FilterSection>
      )}

      {opts.seats && (
        <FilterSection title="Seats / Size">
          {opts.seats.map((s) => (
            <CheckOption
              key={s} label={s}
              checked={filters.seats.includes(s)}
              onChange={() => onChange({ ...filters, seats: toggle(filters.seats, s) })}
            />
          ))}
        </FilterSection>
      )}

      {opts.finish && (
        <FilterSection title="Finish">
          {opts.finish.map((f) => (
            <CheckOption
              key={f} label={f}
              checked={filters.finish.includes(f)}
              onChange={() => onChange({ ...filters, finish: toggle(filters.finish, f) })}
            />
          ))}
        </FilterSection>
      )}

      {/* Result count */}
      <div className="pt-3 text-xs text-[#64748b]">
        Showing <span className="font-semibold text-[#172554]">{filteredCount}</span> of {totalCount} products
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 rounded border border-[#e5e0d4] bg-white px-4 py-2 text-sm font-semibold text-[#172554] shadow-sm"
        >
          <SlidersHorizontal size={15} />
          Filters {activeCount > 0 && <span className="rounded-full bg-[#1e3a8a] text-white text-[10px] px-1.5 py-0.5">{activeCount}</span>}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="relative ml-auto h-full w-80 max-w-[90vw] overflow-y-auto bg-white p-5 shadow-xl">
            <button onClick={() => setMobileOpen(false)} className="absolute right-4 top-4 text-[#64748b]">
              <X size={20} />
            </button>
            <div className="mt-8">{sidebar}</div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-20 overflow-y-auto max-h-[calc(100vh-6rem)] pr-2">
          {sidebar}
        </div>
      </aside>
    </>
  );
}
