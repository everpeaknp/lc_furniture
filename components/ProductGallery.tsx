'use client';

import { useState } from "react";

const views = [
  { label: "Full view", position: "50% 50%", zoom: 1 },
  { label: "Left detail", position: "25% 50%", zoom: 1.35 },
  { label: "Right detail", position: "75% 50%", zoom: 1.35 },
];

export default function ProductGallery({ image, name }: { image: string; name: string }) {
  const [selectedView, setSelectedView] = useState(0);
  const view = views[selectedView];

  return (
    <div className="min-w-0">
      <div className="grid aspect-square max-h-[580px] place-items-center overflow-hidden bg-[#f1efe9]">
        <img
          src={image}
          alt={name}
          className="h-full w-full transition-transform duration-300"
          style={{
            objectFit: selectedView === 0 ? "contain" : "cover",
            objectPosition: view.position,
            transform: `scale(${view.zoom})`,
          }}
        />
      </div>
      <div className="mt-3 flex gap-2" aria-label={`${name} image views`}>
        {views.map((thumbnail, index) => (
          <button
            key={thumbnail.label}
            type="button"
            aria-label={thumbnail.label}
            aria-pressed={selectedView === index}
            onClick={() => setSelectedView(index)}
            className={`h-[68px] w-[68px] shrink-0 overflow-hidden border bg-[#f1efe9] ${
              selectedView === index ? "border-[#1e3a8a]" : "border-[#e5e0d4]"
            }`}
          >
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              style={{ objectPosition: thumbnail.position, transform: `scale(${thumbnail.zoom})` }}
            />
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-[#64748b]">{view.label} · {name}</p>
    </div>
  );
}