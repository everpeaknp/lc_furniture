'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export const allCategories = [
  { label: "Sofas",         href: "/sofas" },
  { label: "Living Room",   href: "/living-room" },
  { label: "Bedroom",       href: "/bedroom" },
  { label: "Mattress",      href: "/mattress" },
  { label: "Dining",        href: "/dining" },
  { label: "Storage",       href: "/storage" },
  { label: "Study & Office",href: "/study-office" },
  { label: "Outdoor",       href: "/outdoor" },
  { label: "Interiors",     href: "/interiors" },
];

export default function CategorySidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-56 shrink-0">
      <div className="sticky top-20">
        <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#64748b] px-3">
          Categories
        </h2>
        <nav>
          <ul className="flex flex-col gap-0.5">
            {allCategories.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#1e3a8a] text-white"
                        : "text-[#334155] hover:bg-[#f1efe9] hover:text-[#1e3a8a]"
                    }`}
                  >
                    {label}
                    {active && <ChevronRight size={14} className="shrink-0" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-6 rounded-md bg-[#f1efe9] p-4">
          <p className="text-xs font-semibold text-[#172554]">Need help choosing?</p>
          <p className="mt-1 text-xs text-[#64748b]">Talk to one of our furniture experts.</p>
          <Link
            href="/contact"
            className="mt-3 inline-flex w-full items-center justify-center bg-[#1e3a8a] px-3 py-2 text-xs font-semibold text-white hover:bg-[#172554] transition-colors rounded-sm"
          >
            Talk to a designer
          </Link>
        </div>
      </div>
    </aside>
  );
}
