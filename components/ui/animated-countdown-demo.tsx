"use client";

import { AnimatedCountdown } from "@/components/ui/animated-countdown";

export default function AnimatedCountdownDemo() {
  const target = new Date();
  target.setDate(target.getDate() + 7);
  target.setHours(target.getHours() + 12, 45, 30);

  return (
    <div className="flex min-h-[320px] w-full items-center justify-center p-6">
      <AnimatedCountdown targetDate={target} variant="modern" size="lg" />
    </div>
  );
}
