import styles from "./SaleMarquee.module.css";

export default function SaleMarquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <span className={styles.text}>SALE!! SALE!! Biggest festive Sale</span>
        <span className={styles.text}>SALE!! SALE!! Biggest festive Sale</span>
        <span className={styles.text}>SALE!! SALE!! Biggest festive Sale</span>
        <span className={styles.text}>SALE!! SALE!! Biggest festive Sale</span>
        <span className={styles.text}>SALE!! SALE!! Biggest festive Sale</span>
        <span className={styles.text}>SALE!! SALE!! Biggest festive Sale</span>
        <span className={styles.text}>SALE!! SALE!! Biggest festive Sale</span>
        <span className={styles.text}>SALE!! SALE!! Biggest festive Sale</span>
      </div>
    </div>
  );
}
