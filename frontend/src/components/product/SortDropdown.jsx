import "./SortDropdown.css";

const options = [
  { value: "featured", label: "Featured" },
  { value: "price_low", label: "Price: Low to High" },
  { value: "price_high", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function SortDropdown({ value = "featured", onChange }) {
  return (
    <label className="sortdropdown">
      <select value={value} onChange={(event) => onChange?.(event.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
