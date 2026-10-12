import {
  Truck,
  Store,
  PackageCheck,
  RotateCcw,
  ArrowUpRight,
} from "lucide-react";
import styles from "./FurnitureBenefits.module.css";

const benefits = [
  {
    icon: Truck,
    title: "Complimentary delivery",
    description: "On orders over Rs. 50,000",
    number: "01",
  },
  {
    icon: Store,
    title: "See it. Feel it. Love it.",
    description: "Visit our furniture showroom",
    number: "02",
  },
  {
    icon: PackageCheck,
    title: "Crafted with care",
    description: "Protected from our door to yours",
    number: "03",
  },
  {
    icon: RotateCcw,
    title: "A worry-free purchase",
    description: "Easy returns on eligible items",
    number: "04",
  },
];

export default function FurnitureBenefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span>THE DETAILS MATTER</span>
          <h2>
            A better way
            <br />
            <i>to furnish.</i>
          </h2>
        </div>

        <div className={styles.grid}>
          {benefits.map(({ icon: Icon, title, description, number }) => (
            <article className={styles.item} key={number}>
              <div className={styles.top}>
                <span className={styles.number}>{number}</span>
                <ArrowUpRight size={17} className={styles.arrow} />
              </div>

              <div className={styles.icon}>
                <Icon size={27} strokeWidth={1.4} />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
