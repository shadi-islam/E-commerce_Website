import "./VariantSelector.css";

const defaultOptions = ["Black", "Silver", "Blue"];

export default function VariantSelector({
  label = "Color",
  options = defaultOptions,
  selected = defaultOptions[0],
  onSelect,
}) {
  return (
    <section className="variantselector">
      <p>{label}</p>
      <div>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={option === selected ? "active" : ""}
            onClick={() => onSelect?.(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}
