import "./DeliveryMethodSelector.css";

const defaultMethods = [
  { id: "standard", label: "Standard Delivery", eta: "3-5 business days", cost: 5.99 },
  { id: "express", label: "Express Delivery", eta: "1-2 business days", cost: 12.99 },
  { id: "pickup", label: "Store Pickup", eta: "Ready in 4 hours", cost: 0 },
];

export default function DeliveryMethodSelector({
  methods = defaultMethods,
  selectedId = "standard",
  onSelect,
}) {
  return (
    <section className="deliverymethodselector">
      <h3>Delivery Method</h3>
      <div className="deliverymethodselector-list">
        {methods.map((method) => (
          <button
            key={method.id}
            type="button"
            onClick={() => onSelect?.(method.id)}
            className={method.id === selectedId ? "selected" : ""}
          >
            <div>
              <strong>{method.label}</strong>
              <p>{method.eta}</p>
            </div>
            <span>{method.cost === 0 ? "Free" : `$${method.cost.toFixed(2)}`}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
