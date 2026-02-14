import "./StockBadge.css";

export default function StockBadge({ inStock = true, count = 0 }) {
  if (inStock) {
    return <span className="stockbadge in">In stock ({count})</span>;
  }
  return <span className="stockbadge out">Out of stock</span>;
}
