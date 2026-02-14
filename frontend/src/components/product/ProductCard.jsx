import { Link } from "react-router-dom";
import StockBadge from "./StockBadge";
import WishlistButton from "../wishlist/WishlistButton";
import "./ProductCard.css";

export default function ProductCard({
  product,
  isWishlisted = false,
  onToggleWishlist,
  onAddToCart,
}) {
  return (
    <article className="productcard">
      <Link to={`/shop/${product.id}`} className="productcard-image">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="productcard-body">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <StockBadge inStock={product.inStock} count={product.stockCount || 0} />
        <strong>${product.price.toFixed(2)}</strong>
        <div className="productcard-actions">
          <button type="button" onClick={() => onAddToCart?.(product)} disabled={!product.inStock}>
            Add to Cart
          </button>
          <WishlistButton
            active={isWishlisted}
            onToggle={() => onToggleWishlist?.(product)}
          />
        </div>
      </div>
    </article>
  );
}
