import { Link } from "react-router-dom";
import "./SuccessPage.css";

export default function SuccessPage({ orderNumber = "ECM-10294" }) {
  return (
    <section className="successpage">
      <div className="successpage-card">
        <div className="success-icon" aria-hidden="true">
          OK
        </div>
        <h2>Order Confirmed</h2>
        <p>Your order has been placed successfully.</p>
        <p className="order-id">Order Number: {orderNumber}</p>

        <div className="success-actions">
          <Link to="/shop">Continue Shopping</Link>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
