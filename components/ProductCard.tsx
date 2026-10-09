import Arrow from "./Arrow";

export default function ProductCard({ item }: { item: { name: string; price: string; image: string } }) {
  return (
    <article className="product-card">
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
