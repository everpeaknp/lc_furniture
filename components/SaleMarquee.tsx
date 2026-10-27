"use client";

import { useEffect, useState } from "react";
import styles from "./SaleMarquee.module.css";
import { api, SaleBanner } from "@/lib/api";

export default function SaleMarquee() {
  const [saleData, setSaleData] = useState<SaleBanner | null>(null);

  useEffect(() => {
    api.getSaleBanner()
      .then((data) => {
        setSaleData(data);
      })
      .catch((error) => {
        console.error('Failed to fetch sale banner:', error);
      });
  }, []);

  const text = saleData?.text || "SALE!! SALE!! Biggest festive Sale";

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}
