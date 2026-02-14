import "./MyOrders.css";
import OrderCard from "../../components/order/OrderCard";

const orders = [
  { id: "ECM-10294", date: "Feb 13, 2026", total: 337.99, items: 3, status: "Shipped" },
  { id: "ECM-10282", date: "Feb 08, 2026", total: 89.5, items: 1, status: "Delivered" },
  { id: "ECM-10271", date: "Feb 03, 2026", total: 54.0, items: 2, status: "Pending" },
];

export default function MyOrders() {
  return (
    <section className="myorders-page">
      <header>
        <p>Account</p>
        <h1>My Orders</h1>
      </header>

      <div className="myorders-grid">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
}
