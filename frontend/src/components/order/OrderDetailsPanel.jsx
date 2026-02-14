import "./OrderDetailsPanel.css";

const defaultItems = [
  { id: "p1", name: "Wireless Earbuds", qty: 1, price: 79.99 },
  { id: "p2", name: "Smart Watch", qty: 2, price: 129.0 },
];

export default function OrderDetailsPanel({
  orderId = "ECM-10294",
  placedOn = "Feb 13, 2026",
  payment = "Paid via Card",
  shippingAddress = "221B Baker Street, San Francisco, CA 94107",
  items = defaultItems,
}) {
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <section className="orderdetailspanel">
      <header>
        <h3>Order Details</h3>
        <p>Order #{orderId}</p>
      </header>

      <div className="orderdetailspanel-meta">
        <p>
          <strong>Placed on:</strong> {placedOn}
        </p>
        <p>
          <strong>Payment:</strong> {payment}
        </p>
        <p>
          <strong>Ship to:</strong> {shippingAddress}
        </p>
      </div>

      <div className="orderdetailspanel-items">
        {items.map((item) => (
          <div key={item.id} className="orderdetailspanel-row">
            <span>
              {item.name} x{item.qty}
            </span>
            <strong>${(item.qty * item.price).toFixed(2)}</strong>
          </div>
        ))}
      </div>

      <div className="orderdetailspanel-total">
        <span>Subtotal</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>
    </section>
  );
}
