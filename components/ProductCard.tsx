import Arrow from "./Arrow";

export default function ProductCard({ item, className = "", productId }: { item: { name: string; price: string; image: string }, className?: string, productId?: string }) {
  // Generate a URL-friendly ID from the product name if not provided
  const id = productId || item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const details = new URLSearchParams({
    name: item.name,
    price: item.price,
    image: item.image,
  });
  
  return (
    <article className={`product-card ${className}`}>
      <a href={`/product/${id}?${details.toString()}`} className="image-wrap">
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
