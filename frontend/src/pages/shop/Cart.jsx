import { useMemo, useState } from "react";
import CartDrawer from "../../components/cart/CartDrawer";
import CartItem from "../../components/cart/CartItem";
import PriceSummary from "../../components/cart/PriceSummary";
import PromoCodeBox from "../../components/cart/PromoCodeBox";
import { useAppContext } from "../../context/AppContext";
import "./Cart.css";

export default function Cart() {
  const { cartItems, updateCartQuantity, removeFromCart } = useAppContext();
  const [discount, setDiscount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
  const shipping = cartItems.length > 0 ? 8 : 0;

  const applyPromo = (code) => {
    if (code.toUpperCase() === "SAVE10") {
      setDiscount(subtotal * 0.1);
      return;
    }
    setDiscount(0);
  };

  return (
    <section className="cart-page">
      <header className="cart-page-header">
        <div>
          <p>Shopping Cart</p>
          <h1>Your Items</h1>
        </div>
        <button type="button" onClick={() => setDrawerOpen(true)}>
          Open Cart Drawer
        </button>
      </header>

      <div className="cart-page-grid">
        <div className="cart-list">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={(id) => updateCartQuantity(id, item.quantity + 1)}
                onDecrease={(id) => updateCartQuantity(id, Math.max(1, item.quantity - 1))}
                onRemove={removeFromCart}
              />
            ))
          ) : (
            <p className="cart-empty">Your cart is currently empty.</p>
          )}
        </div>

        <div className="cart-sidebar">
          <PromoCodeBox onApply={applyPromo} />
          <PriceSummary
            subtotal={subtotal}
            discount={discount}
            shipping={shipping}
            onCheckout={() => {}}
          />
        </div>
      </div>

      <CartDrawer
        open={drawerOpen}
        items={cartItems}
        subtotal={subtotal}
        discount={discount}
        shipping={shipping}
        onClose={() => setDrawerOpen(false)}
        onIncrease={(id) => {
          const item = cartItems.find((entry) => entry.id === id);
          if (item) updateCartQuantity(id, item.quantity + 1);
        }}
        onDecrease={(id) => {
          const item = cartItems.find((entry) => entry.id === id);
          if (item) updateCartQuantity(id, Math.max(1, item.quantity - 1));
        }}
        onRemove={removeFromCart}
        onCheckout={() => {}}
      />
    </section>
  );
}
