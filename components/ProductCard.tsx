import Arrow from "./Arrow";

export default function ProductCard({ item, className = "" }: { item: { name: string; price: string; image: string }, className?: string }) {
  return (
    <article className={`product-card ${className}`}>
      <a href="#shop" className="image-wrap">
        <img src={item.image} alt={item.name} />
        <span className="product-action">View piece</span>
      </a>
      <div className="product-meta">
        <div>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
        <button aria-label={`Add ${item.name} to wishlist`}>♡</button>
      </div>
    </article>
  );
}
