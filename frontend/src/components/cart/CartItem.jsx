import QuantityStepper from "./QuantityStepper";
import "./CartItem.css";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <article className="cartitem">
      <img src={item.image} alt={item.name} />

      <div className="cartitem-content">
        <div className="cartitem-head">
          <h3>{item.name}</h3>
          <button type="button" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </div>

        <p>{item.variant || item.category || "Standard"}</p>

        <div className="cartitem-bottom">
          <QuantityStepper
            value={item.quantity}
            onIncrease={() => onIncrease(item.id)}
            onDecrease={() => onDecrease(item.id)}
          />
          <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        </div>
      </div>
    </article>
  );
}
