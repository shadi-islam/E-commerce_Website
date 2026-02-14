import "./ProductFilters.css";

const brands = ["NovaTech", "Pulse", "Aether", "Orbit"];

export default function ProductFilters({ selected = [], onToggle }) {
  return (
    <aside className="productfilters">
      <h3>Filters</h3>
      <div className="productfilters-group">
        <p>Brand</p>
        {brands.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={selected.includes(brand)}
              onChange={() => onToggle?.(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}
