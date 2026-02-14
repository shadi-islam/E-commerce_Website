import "./OrderReview.css";

export default function OrderReview({
  items = [],
  address,
  delivery,
  subtotal = 0,
  shipping = 0,
  discount = 0,
}) {
  const total = Math.max(subtotal + shipping - discount, 0);

  return (
    <section className="orderreview">
      <h3>Review Your Order</h3>

      <div className="orderreview-block">
        <h4>Items</h4>
        {items.map((item) => (
          <div key={item.id} className="orderreview-row">
            <span>
              {item.name} x{item.quantity}
            </span>
            <strong>${(item.price * item.quantity).toFixed(2)}</strong>
          </div>
        ))}
      </div>

      <div className="orderreview-block">
        <h4>Shipping To</h4>
        <p>{address?.name}</p>
        <p>{address?.line}</p>
        <p>{address?.phone}</p>
      </div>

      <div className="orderreview-block">
        <h4>Delivery</h4>
        <p>{delivery?.label}</p>
        <p>{delivery?.eta}</p>
      </div>

      <div className="orderreview-total">
        <div className="orderreview-row">
          <span>Subtotal</span>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>
        <div className="orderreview-row">
          <span>Shipping</span>
          <strong>${shipping.toFixed(2)}</strong>
        </div>
        <div className="orderreview-row">
          <span>Discount</span>
          <strong>- ${discount.toFixed(2)}</strong>
        </div>
        <div className="orderreview-row grand">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </div>
    </section>
  );
}
