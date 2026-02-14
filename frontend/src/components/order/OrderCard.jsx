import { Link } from "react-router-dom";
import StatusPill from "../admin/StatusPill";
import "./OrderCard.css";

export default function OrderCard({
  order = {
    id: "ECM-10294",
    date: "Feb 13, 2026",
    total: 337.99,
    items: 3,
    status: "Shipped",
  },
}) {
  return (
    <article className="ordercard">
      <div className="ordercard-top">
        <div>
          <p>Order #{order.id}</p>
          <small>{order.date}</small>
        </div>
        <StatusPill label={order.status} />
      </div>

      <div className="ordercard-meta">
        <span>{order.items} items</span>
        <strong>${order.total.toFixed(2)}</strong>
      </div>

      <div className="ordercard-actions">
        <Link to="/account/order-details">View Details</Link>
      </div>
    </article>
  );
}
