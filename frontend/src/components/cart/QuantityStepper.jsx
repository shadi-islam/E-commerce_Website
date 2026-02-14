import "./QuantityStepper.css";

export default function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onIncrease,
  onDecrease,
}) {
  const decreaseDisabled = value <= min;
  const increaseDisabled = value >= max;

  return (
    <div className="quantitystepper" aria-label="Quantity controls">
      <button type="button" onClick={onDecrease} disabled={decreaseDisabled}>
        -
      </button>
      <span>{value}</span>
      <button type="button" onClick={onIncrease} disabled={increaseDisabled}>
        +
      </button>
    </div>
  );
}
