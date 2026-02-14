import "./AddressPicker.css";

const sampleAddresses = [
  {
    id: "addr-1",
    label: "Home",
    name: "Alex Johnson",
    line: "221B Baker Street, San Francisco, CA 94107",
    phone: "+1 (415) 555-0101",
  },
  {
    id: "addr-2",
    label: "Office",
    name: "Alex Johnson",
    line: "415 Market Street, San Francisco, CA 94105",
    phone: "+1 (415) 555-0144",
  },
];

export default function AddressPicker({
  addresses = sampleAddresses,
  selectedId = "addr-1",
  onSelect,
}) {
  return (
    <section className="addresspicker">
      <header>
        <h3>Choose Delivery Address</h3>
      </header>

      <div className="addresspicker-grid">
        {addresses.map((address) => (
          <button
            key={address.id}
            type="button"
            onClick={() => onSelect?.(address.id)}
            className={address.id === selectedId ? "selected" : ""}
          >
            <div className="addresspicker-top">
              <strong>{address.label}</strong>
              {address.id === selectedId && <span>Selected</span>}
            </div>
            <p>{address.name}</p>
            <p>{address.line}</p>
            <small>{address.phone}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
