'use client';

import { useState } from "react";

const upholsteryColors = [
  { name: "Ivory", value: "#e9e3d7" },
  { name: "Stone", value: "#aaa79f" },
  { name: "Forest", value: "#52675a" },
];

const woodColors = [
  { name: "Natural oak", value: "#c9a879" },
  { name: "Walnut", value: "#79543a" },
  { name: "Black", value: "#353535" },
];

export default function ProductOptions({ category, name }: { category: string; name: string }) {
  const isUpholstered = /sofa|chair|recliner|bed|upholster/i.test(`${category} ${name}`);
  const materials = isUpholstered ? ["Linen", "Bouclé", "Leather"] : ["Oak", "Walnut", "Ash"];
  const colors = isUpholstered ? upholsteryColors : woodColors;
  const [material, setMaterial] = useState(materials[0]);
  const [color, setColor] = useState(colors[0].name);

  return (
    <div className="mt-5 space-y-4">
      <fieldset>
        <legend className="mb-2 text-sm font-medium text-[#334155]">Material: <span className="font-normal text-[#64748b]">{material}</span></legend>
        <div className="flex flex-wrap gap-2">
          {materials.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={material === option}
              onClick={() => setMaterial(option)}
              className={`min-h-9 border px-3 text-xs transition-colors ${
                material === option ? "border-[#1e3a8a] bg-[#eff3ff] text-[#172554]" : "border-[#d8d5cc] text-[#475569] hover:border-[#1e3a8a]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-[#334155]">Color: <span className="font-normal text-[#64748b]">{color}</span></legend>
        <div className="flex flex-wrap gap-3">
          {colors.map((option) => (
            <button
              key={option.name}
              type="button"
              aria-label={option.name}
              aria-pressed={color === option.name}
              onClick={() => setColor(option.name)}
              className={`grid h-9 w-9 place-items-center border ${color === option.name ? "border-[#1e3a8a]" : "border-[#d8d5cc]"}`}
            >
              <span className="h-6 w-6 border border-black/10" style={{ backgroundColor: option.value }} />
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}