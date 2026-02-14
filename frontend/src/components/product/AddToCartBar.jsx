import "./AddToCartBar.css";

export default function AddToCartBar({ quantity = 1, onDecrease, onIncrease, onAddToCart }) {
  return (
    <section className="addtocartbar">
      <div className="addtocartbar-qty">
        <button type="button" onClick={onDecrease}>
          -
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={onIncrease}>
          +
        </button>
      </div>
      <button type="button" className="addtocartbar-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </section>
  );
}
