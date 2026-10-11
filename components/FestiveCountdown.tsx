'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, X } from "lucide-react";

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

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  const totalSecs = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSecs / 86400),
    hours: Math.floor((totalSecs % 86400) / 3600),
    minutes: Math.floor((totalSecs % 3600) / 60),
    seconds: totalSecs % 60,
  };
}

function pad(num: number): string {
  return String(Math.max(0, num)).padStart(2, "0");
}

export default function FestiveCountdown() {
  const [end, setEnd] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const target = getOrCreateEndTime();
    setEnd(target);
    setTimeLeft(calculateTimeLeft(target));
    setMounted(true);

    const interval = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  if (dismissed) return null;

  const timerUnits = [
    { key: "days", label: "Days", value: pad(timeLeft.days) },
    { key: "hours", label: "Hrs", value: pad(timeLeft.hours) },
    { key: "minutes", label: "Min", value: pad(timeLeft.minutes) },
    { key: "seconds", label: "Sec", value: pad(timeLeft.seconds) },
  ];

  return (
    <div className="relative w-full bg-[#1e3a8a] text-white font-sans overflow-hidden border-y border-[#172554] shadow-sm">
      {/* Animated subtle shimmer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 40%, transparent 80%)",
          animation: "festive-shimmer 3s linear infinite",
        }}
      />

      <div className="relative mx-auto flex flex-wrap items-center justify-between gap-y-3 gap-x-6 px-4 py-4 md:px-12 max-w-[1440px] h-full">
        {/* Left: Banner text */}
        <div className="flex items-center h-full">
          <p className="text-sm sm:text-base font-medium leading-normal text-white">
            Grab the biggest Sale for limited time only
          </p>
        </div>

        {/* Centre: Small Square Sales Timer (Length = Breadth) */}
        <div className="flex items-center h-full gap-1.5 sm:gap-2" aria-label="Sales countdown timer">
          {timerUnits.map((unit, idx) => (
            <div key={unit.key} className="flex items-center gap-1.5 sm:gap-2">
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 aspect-square rounded-md bg-[#172554] border border-[#60a5fa]/40 flex flex-col items-center justify-center text-center shadow-inner select-none transition-transform hover:scale-105"
                title={`${unit.label}: ${unit.value}`}
              >
                <span className="font-mono text-xs sm:text-sm font-bold text-white leading-none tabular-nums">
                  {mounted ? unit.value : "--"}
                </span>
                <span className="text-[7px] sm:text-[8px] font-semibold uppercase tracking-wider text-[#bfdbfe] mt-0.5 leading-none">
                  {unit.label}
                </span>
              </div>
              {idx < timerUnits.length - 1 && (
                <span className="text-[#93c5fd]/60 font-mono text-xs font-bold leading-none select-none">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Right: CTA & Dismiss */}
        <div className="flex items-center gap-3">
          <Link
            href="/shop"
            className="shrink-0 bg-[#faf8f2] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#1e3a8a] hover:bg-white transition-colors font-sans rounded-none shadow-sm"
          >
            Shop Sale
          </Link>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="p-1 text-white/60 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
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
