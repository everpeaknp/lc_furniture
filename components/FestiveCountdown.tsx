'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const SALE_KEY = "festive_sale_end";

function getOrCreateEndTime(): number {
  if (typeof window === "undefined") return Date.now() + 2 * 24 * 60 * 60 * 1000;
  const stored = localStorage.getItem(SALE_KEY);
  if (stored) {
    const ms = parseInt(stored, 10);
    if (!isNaN(ms) && ms > Date.now()) return ms;
  }
  const end = Date.now() + 2 * 24 * 60 * 60 * 1000;
  localStorage.setItem(SALE_KEY, String(end));
  return end;
}

interface TimeLeft { hours: number; minutes: number; seconds: number; }

function calcTimeLeft(end: number): TimeLeft {
  const diff = Math.max(0, end - Date.now());
  return {
    hours:   Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function Pad({ n }: { n: number }) {
  return <>{String(n).padStart(2, "0")}</>;
}

export default function FestiveCountdown() {
  const endRef = useRef<number>(0);
  const [time, setTime] = useState<TimeLeft>({ hours: 48, minutes: 0, seconds: 0 });
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    endRef.current = getOrCreateEndTime();
    setTime(calcTimeLeft(endRef.current));
    const id = setInterval(() => setTime(calcTimeLeft(endRef.current)), 1000);
    return () => clearInterval(id);
  }, []);

  if (dismissed) return null;

  return (
    <div className="relative w-full bg-[#262720] text-[#f6f4ef] font-sans overflow-hidden">
      {/* animated shimmer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #D9A441 40%, transparent 80%)",
          animation: "festive-shimmer 3s linear infinite",
        }}
      />

      <div className="relative mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6 px-6 py-3 md:px-10 max-w-7xl">
        {/* Left: label */}
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-[#D9A441] shrink-0" />
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#D9A441]">Festive Sale</p>
            <p className="text-sm font-medium leading-tight">
              Up to <span className="text-[#D9A441] font-bold">40% off</span> — limited time only
            </p>
          </div>
        </div>

        {/* Centre: countdown */}
        <div className="flex items-center gap-1.5 text-center">
          <div className="flex flex-col items-center">
            <div className="min-w-[44px] rounded bg-white/10 px-3 py-1.5 text-2xl font-bold tabular-nums tracking-tight">
              <Pad n={time.hours} />
            </div>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-white/50">Hrs</span>
          </div>
          <span className="mb-4 text-2xl font-bold text-white/40">:</span>
          <div className="flex flex-col items-center">
            <div className="min-w-[44px] rounded bg-white/10 px-3 py-1.5 text-2xl font-bold tabular-nums tracking-tight">
              <Pad n={time.minutes} />
            </div>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-white/50">Min</span>
          </div>
          <span className="mb-4 text-2xl font-bold text-white/40">:</span>
          <div className="flex flex-col items-center">
            <div className="min-w-[44px] rounded bg-white/10 px-3 py-1.5 text-2xl font-bold tabular-nums tracking-tight">
              <Pad n={time.seconds} />
            </div>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-white/50">Sec</span>
          </div>
        </div>

        {/* Right: CTA + close */}
        <div className="flex items-center gap-4">
          <Link
            href="/shop"
            className="shrink-0 bg-[#D9A441] px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#262720] hover:opacity-90 transition-opacity font-sans"
          >
            Shop Sale
          </Link>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="p-1 text-white/40 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes festive-shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
