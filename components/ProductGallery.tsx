'use client';

import { useState, useRef, useEffect, useCallback } from "react";

const ZOOM_FACTOR = 2.5;
const LENS = 120; // lens square size in px

const views = [
  { label: "Full view", position: "50% 50%" },
  { label: "Left detail", position: "25% 50%" },
  { label: "Right detail", position: "75% 50%" },
];

interface ZoomRect {
  imgTop: number;
  imgRight: number;
  imgHeight: number;
  panelRight: number; // right edge of the whole product card section
  panelTop: number;
  panelHeight: number;
}

export default function ProductGallery({ image, name }: { image: string; name: string }) {
  const [selectedView, setSelectedView] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [zoomRect, setZoomRect] = useState<ZoomRect | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const measureRects = useCallback(() => {
    if (!mainRef.current) return;
    const imgR = mainRef.current.getBoundingClientRect();

    // Walk up to find the product card section (has data-product-card attr)
    const section = mainRef.current.closest<HTMLElement>("[data-product-card]");
    const secR = section ? section.getBoundingClientRect() : imgR;

    setZoomRect({
      imgTop:    imgR.top,
      imgRight:  imgR.right,
      imgHeight: imgR.height,
      panelRight:  secR.right,
      panelTop:    secR.top,
      panelHeight: secR.height,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", measureRects);
    window.addEventListener("scroll", measureRects, { passive: true });
    return () => {
      window.removeEventListener("resize", measureRects);
      window.removeEventListener("scroll", measureRects);
    };
  }, [measureRects]);

  const handleMouseEnter = () => {
    measureRects();
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const mainW = mainRef.current?.clientWidth  ?? 500;
  const mainH = mainRef.current?.clientHeight ?? 500;

  // Clamp lens inside the image
  const lensLeft = Math.min(Math.max(mousePos.x - LENS / 2, 0), mainW - LENS);
  const lensTop  = Math.min(Math.max(mousePos.y - LENS / 2, 0), mainH - LENS);

  // Zoom panel background maths — scale so the image fills the whole panel
  const panelW = zoomRect ? zoomRect.panelRight - zoomRect.imgRight - 12 : 0;
  const panelH = zoomRect ? zoomRect.panelHeight : mainH;

  // Scale the image to cover the panel at ZOOM_FACTOR, anchored to the lens position
  const scaleX = panelW / mainW * ZOOM_FACTOR;
  const scaleY = panelH / mainH * ZOOM_FACTOR;
  const bgW = mainW * scaleX;
  const bgH = mainH * scaleY;
  const bgX = -(lensLeft * scaleX);
  const bgY = -(lensTop  * scaleY);

  const view = views[selectedView];

  return (
    <div className="min-w-0">
      {/* ── Main image ── */}
      <div
        ref={mainRef}
        className="relative aspect-square max-h-[580px] w-full overflow-hidden bg-[#f1efe9] cursor-crosshair select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          style={{ objectPosition: view.position }}
          draggable={false}
        />

        {/* Lens square */}
        {isHovered && (
          <div
            className="pointer-events-none absolute box-border border-2 border-white/80 bg-white/20 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]"
            style={{ width: LENS, height: LENS, left: lensLeft, top: lensTop }}
          />
        )}
      </div>

      {/* ── Zoom panel — fixed, covers the rest of the product card ── */}
      {isHovered && zoomRect && panelW > 50 && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed z-[200] hidden xl:block overflow-hidden"
          style={{
            top:    zoomRect.panelTop,
            left:   zoomRect.imgRight + 12,
            width:  panelW,
            height: panelH,
            backgroundImage:    `url(${image})`,
            backgroundRepeat:   "no-repeat",
            backgroundSize:     `${bgW}px ${bgH}px`,
            backgroundPosition: `${bgX}px ${bgY}px`,
            backgroundColor:    "#f1efe9",
          }}
        />
      )}

      {/* ── Thumbnails ── */}
      <div className="mt-3 flex gap-2" aria-label={`${name} image views`}>
        {views.map((thumbnail, index) => (
          <button
            key={thumbnail.label}
            type="button"
            aria-label={thumbnail.label}
            aria-pressed={selectedView === index}
            onClick={() => setSelectedView(index)}
            className={`h-[68px] w-[68px] shrink-0 overflow-hidden border bg-[#f1efe9] transition-colors ${
              selectedView === index ? "border-[#1e3a8a]" : "border-[#e5e0d4] hover:border-[#1e3a8a]"
            }`}
          >
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              style={{ objectPosition: thumbnail.position }}
            />
          </button>
        ))}
      </div>

      <p className="mt-2 text-xs text-[#64748b]">{view.label} · {name}</p>
    </div>
  );
}
