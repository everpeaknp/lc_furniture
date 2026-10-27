"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./SaleCountdown.module.css";
import { api, SaleBanner } from "@/lib/api";

const DEFAULT_SALE_END = new Date("2026-12-31T23:59:59+05:45").getTime();

function getTimeLeft(endDate: number) {
  const remaining = Math.max(0, endDate - Date.now());

  return {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
}

export default function SaleCountdown() {
  const [time, setTime] = useState(() => getTimeLeft(DEFAULT_SALE_END));
  const [saleData, setSaleData] = useState<SaleBanner | null>(null);
  const [saleEnd, setSaleEnd] = useState(DEFAULT_SALE_END);

  useEffect(() => {
    api.getSaleBanner()
      .then((data) => {
        setSaleData(data);
        if (data.end_date) {
          setSaleEnd(new Date(data.end_date).getTime());
        }
      })
      .catch((error) => {
        console.error('Failed to fetch sale banner:', error);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(() => getTimeLeft(saleEnd));
    }, 1000);

    return () => clearInterval(timer);
  }, [saleEnd]);

  const discount = saleData?.discount_percentage || 40;

  return (
    <section className={styles.bar} aria-label="Limited time sale">
      <div className={styles.inner}>
        <div className={styles.message}>
          <span className={styles.tag}>LIMITED OFFER</span>
          <span className={styles.text}>
            SALE <span className={styles.highlight}>UP TO {discount}% OFF</span>
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
          SHOP SALE <ArrowRight size={12} />
        </a>
      </div>
    </section>
  );
}
