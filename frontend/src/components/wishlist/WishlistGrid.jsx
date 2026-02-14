import { Link } from "react-router-dom";
import WishlistButton from "./WishlistButton";
import "./WishlistGrid.css";

export default function WishlistGrid({ items = [], onRemove, onMoveToCart }) {
  if (items.length === 0) {
    return <p className="wishlistgrid-empty">Your wishlist is empty.</p>;
  }

  return (
    <section className="wishlistgrid">
      {items.map((item) => (
        <article key={item.id} className="wishlist-card">
          <Link to={`/shop/${item.id}`} className="wishlist-image">
            <img src={item.image} alt={item.name} />
          </Link>
          <div className="wishlist-body">
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <strong>${item.price.toFixed(2)}</strong>
            <div className="wishlist-actions">
              <button type="button" onClick={() => onMoveToCart?.(item.id)}>
                Move to Cart
              </button>
              <WishlistButton active onToggle={() => onRemove?.(item.id)} label="Remove from wishlist" />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
