import "./DeliveryInfo.css";

const defaultPoints = [
  "Free shipping over $100",
  "30-day returns and exchanges",
  "Ships within 24 hours",
];

export default function DeliveryInfo({ points = defaultPoints }) {
  return (
    <section className="deliveryinfo">
      <h4>Delivery & Returns</h4>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
