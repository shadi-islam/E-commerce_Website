import { useState } from "react";
import AddToCartBar from "./AddToCartBar";
import DeliveryInfo from "./DeliveryInfo";
import StockBadge from "./StockBadge";
import VariantSelector from "./VariantSelector";
import WishlistButton from "../wishlist/WishlistButton";
import "./ProductInfo.css";

export default function ProductInfo({
  id = "p1",
  name = "Smart Watch",
  description = "Premium smartwatch with health tracking and long battery life.",
  price = 129,
  category = "Wearables",
  image =
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  stockCount = 18,
  isWishlisted = false,
  onToggleWishlist,
  onAddToCart,
}) {
  const [selectedVariant, setSelectedVariant] = useState("Black");
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="productinfo">
      <h1>{name}</h1>
      <p className="productinfo-description">{description}</p>
      <p className="productinfo-description">{category}</p>
      <strong className="productinfo-price">${price.toFixed(2)}</strong>
      <StockBadge inStock={stockCount > 0} count={stockCount} />
      <WishlistButton active={isWishlisted} onToggle={onToggleWishlist} />

      <VariantSelector selected={selectedVariant} onSelect={setSelectedVariant} />
      <AddToCartBar
        quantity={quantity}
        onDecrease={() => setQuantity((qty) => Math.max(1, qty - 1))}
        onIncrease={() => setQuantity((qty) => qty + 1)}
        onAddToCart={() =>
          onAddToCart?.({
            id,
            name,
            category,
            price,
            image,
            variant: selectedVariant,
          }, quantity)
        }
      />
      <DeliveryInfo />
    </section>
  );
}
