import "./OrderDetails.css";
import OrderDetailsPanel from "../../components/order/OrderDetailsPanel";
import OrderStatusTracker from "../../components/order/OrderStatusTracker";

export default function OrderDetails() {
  return (
    <section className="orderdetails-page">
      <header>
        <p>Order Tracking</p>
        <h1>Order #ECM-10294</h1>
      </header>

      <OrderStatusTracker current={4} />
      <OrderDetailsPanel />
    </section>
  );
}
