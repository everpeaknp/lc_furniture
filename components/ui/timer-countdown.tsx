"use client";

import { Timer } from "@ark-ui/react/timer";

export default function TimerCountdown() {
  return (
    <Timer.Root
      autoStart
      countdown
      startMs={2 * 24 * 60 * 60 * 1000}
      className="flex flex-col items-center"
    >
      <Timer.Area className="flex items-center gap-3 text-3xl font-bold font-sans">

        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="min-w-[52px] text-center bg-white/10 rounded px-3 py-1.5 text-[#f6f4ef] tabular-nums">
            <Timer.Item type="days" />
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/40 mt-1 font-sans">
            days
          </span>
        </div>

        <Timer.Separator className="text-white/30 mb-5">:</Timer.Separator>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="min-w-[52px] text-center bg-white/10 rounded px-3 py-1.5 text-[#f6f4ef] tabular-nums">
            <Timer.Item type="hours" />
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/40 mt-1 font-sans">
            hrs
          </span>
        </div>

        <Timer.Separator className="text-white/30 mb-5">:</Timer.Separator>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="min-w-[52px] text-center bg-white/10 rounded px-3 py-1.5 text-[#f6f4ef] tabular-nums">
            <Timer.Item type="minutes" />
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/40 mt-1 font-sans">
            min
          </span>
        </div>

        <Timer.Separator className="text-white/30 mb-5">:</Timer.Separator>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="min-w-[52px] text-center bg-white/10 rounded px-3 py-1.5 text-[#f6f4ef] tabular-nums">
            <Timer.Item type="seconds" />
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/40 mt-1 font-sans">
            sec
          </span>
        </div>

      </Timer.Area>
    </Timer.Root>
  );
}
