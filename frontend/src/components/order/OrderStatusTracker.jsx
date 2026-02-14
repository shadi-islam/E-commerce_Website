import "./OrderStatusTracker.css";

const defaultSteps = ["Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered"];

export default function OrderStatusTracker({ steps = defaultSteps, current = 3 }) {
  return (
    <section className="orderstatustracker" aria-label="Order progress">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const state = stepNumber < current ? "done" : stepNumber === current ? "active" : "idle";
        return (
          <div key={step} className={`order-status-step ${state}`}>
            <span>{stepNumber}</span>
            <p>{step}</p>
          </div>
        );
      })}
    </section>
  );
}
