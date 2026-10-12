"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import {
  searchFurniture,
  type FurnitureProduct,
} from "@/lib/furnitureSearch";
import styles from "./FurnitureSearch.module.css";

type Props = {
  products: FurnitureProduct[];
  onOpenChange?: (isOpen: boolean) => void;
};

export default function FurnitureSearch({ products, onOpenChange }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(
    () => searchFurniture(products, query).slice(0, 8),
    [products, query]
  );

  const handleOpenChange = (newIsOpen: boolean) => {
    setIsOpen(newIsOpen);
    onOpenChange?.(newIsOpen);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (results.length > 0 && results[0].href) {
      router.push(results[0].href);
      handleOpenChange(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.searchBar}
        onSubmit={handleSubmit}
      >
        <Search size={20} className={styles.searchIcon} />

        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            handleOpenChange(true);
          }}
          onFocus={() => handleOpenChange(true)}
          placeholder="Search sofas, tables, chairs..."
          aria-label="Search furniture"
          aria-expanded={isOpen && query.trim().length > 0}
        />

        {query && (
          <button
            type="button"
            className={styles.clear}
            onClick={() => {
              setQuery("");
              handleOpenChange(false);
            }}
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </form>

      {isOpen && query.trim() && (
        <div className={styles.results}>
          <div className={styles.resultHeader}>
            <span>SEARCH RESULTS</span>
            <span>{results.length} found</span>
          </div>

          {results.length > 0 ? (
            <>
              {results.map((product) => (
                <a
                  key={product.id}
                  href={
                    product.href ??
                    `/products/${encodeURIComponent(product.id)}`
                  }
                  className={styles.result}
                  onClick={() => handleOpenChange(false)}
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <Search size={18} />
                    </div>
                  )}

                  <div className={styles.productInfo}>
                    <strong>{product.name}</strong>
                    <span>{product.category}</span>
                  </div>

                  <span className={styles.price}>
                    Rs. {product.price.toLocaleString("en-IN")}
                  </span>
                </a>
              ))}
              {results.length > 0 && results[0].href && (
                <a
                  href={results[0].href}
                  className={styles.viewAll}
                  onClick={() => handleOpenChange(false)}
                >
                  View all {results[0].category} →
                </a>
              )}
            </>
          ) : (
            <p className={styles.empty}>
              No furniture found. Try searching for sofa, chair, or table.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
