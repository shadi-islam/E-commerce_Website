import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({
  products = [],
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) {
  return (
    <section className="productgrid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={isWishlisted?.(product.id)}
          onToggleWishlist={onToggleWishlist}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}
