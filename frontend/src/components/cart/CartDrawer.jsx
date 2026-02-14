import CartItem from "./CartItem";
import PriceSummary from "./PriceSummary";
import "./CartDrawer.css";

export default function CartDrawer({
  open = false,
  items = [],
  subtotal = 0,
  discount = 0,
  shipping = 0,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  if (!open) return null;

  return (
    <div className="cartdrawer-overlay" role="dialog" aria-modal="true">
      <aside className="cartdrawer">
        <header className="cartdrawer-header">
          <h2>Your Cart</h2>
          <button type="button" onClick={onClose} aria-label="Close cart">
            x
          </button>
        </header>

        <div className="cartdrawer-items">
          {items.length > 0 ? (
            items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))
          ) : (
            <p className="cartdrawer-empty">Your cart is empty.</p>
          )}
        </div>

        <PriceSummary
          subtotal={subtotal}
          discount={discount}
          shipping={shipping}
          onCheckout={onCheckout}
        />
      </aside>
    </div>
  );
}
