import "./PriceSummary.css";

export default function PriceSummary({
  subtotal = 0,
  discount = 0,
  shipping = 0,
  onCheckout,
}) {
  const total = Math.max(subtotal - discount + shipping, 0);

  return (
    <section className="pricesummary">
      <h3>Order Summary</h3>

      <div className="pricesummary-row">
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>
      <div className="pricesummary-row">
        <span>Discount</span>
        <strong>- ${discount.toFixed(2)}</strong>
      </div>
      <div className="pricesummary-row">
        <span>Shipping</span>
        <strong>${shipping.toFixed(2)}</strong>
      </div>

      <div className="pricesummary-total">
        <span>Total</span>
        <strong>${total.toFixed(2)}</strong>
      </div>

      <button type="button" onClick={onCheckout}>
        Proceed to Checkout
      </button>
    </section>
  );
}
