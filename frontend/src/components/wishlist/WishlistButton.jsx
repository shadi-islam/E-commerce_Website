import "./WishlistButton.css";

export default function WishlistButton({ active = false, onToggle, label }) {
  return (
    <button
      type="button"
      className={`wishlistbutton ${active ? "active" : ""}`}
      onClick={onToggle}
      aria-pressed={active}
      aria-label={label || (active ? "Remove from wishlist" : "Add to wishlist")}
    >
      {active ? "Saved" : "Save"}
    </button>
  );
}
