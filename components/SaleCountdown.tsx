"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./SaleCountdown.module.css";

const SALE_END = new Date("2026-12-31T23:59:59+05:45").getTime();

function getTimeLeft() {
  const remaining = Math.max(0, SALE_END - Date.now());

  return {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
}

export default function SaleCountdown() {
  const [time, setTime] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.bar} aria-label="Limited time sale">
      <div className={styles.inner}>
        <div className={styles.message}>
          <span className={styles.tag}>LIMITED OFFER</span>
          <span className={styles.text}>
            SALE <span className={styles.highlight}>UP TO 40% OFF</span>
          </span>
        </div>

        <div className={styles.timer} aria-label="Time remaining">
          {[
            { value: time.days, label: "D" },
            { value: time.hours, label: "H" },
            { value: time.minutes, label: "M" },
            { value: time.seconds, label: "S" },
          ].map((unit) => (
            <div className={styles.unit} key={unit.label}>
              <span suppressHydrationWarning>{String(unit.value).padStart(2, "0")}</span>
              <small>{unit.label}</small>
            </div>
          ))}
        </div>

        <a href="/shop?sale=true" className={styles.link}>
          SHOP SALE <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
