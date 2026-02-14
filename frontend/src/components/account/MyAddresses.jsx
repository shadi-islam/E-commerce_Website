import "./MyAddresses.css";

const addresses = [
  {
    id: 1,
    type: "Home",
    name: "Alex Johnson",
    line1: "221B Baker Street",
    city: "San Francisco",
    region: "CA",
    zip: "94107",
    phone: "+1 (415) 555-0198",
    isDefault: true,
  },
  {
    id: 2,
    type: "Office",
    name: "Alex Johnson",
    line1: "415 Market Street",
    city: "San Francisco",
    region: "CA",
    zip: "94105",
    phone: "+1 (415) 555-0143",
    isDefault: false,
  },
];

export default function MyAddresses() {
  return (
    <section className="myaddresses">
      <header className="myaddresses-header">
        <div>
          <p className="myaddresses-eyebrow">Account</p>
          <h2>Saved Addresses</h2>
        </div>
        <button type="button" className="myaddresses-add-btn">
          Add New Address
        </button>
      </header>

      <div className="myaddresses-grid">
        {addresses.map((address) => (
          <article key={address.id} className="address-card">
            <div className="address-card-top">
              <span className="address-tag">{address.type}</span>
              {address.isDefault && (
                <span className="address-default">Default</span>
              )}
            </div>

            <h3>{address.name}</h3>
            <p>
              {address.line1}
              <br />
              {address.city}, {address.region} {address.zip}
            </p>
            <p className="address-phone">{address.phone}</p>

            <div className="address-actions">
              <button type="button">Edit</button>
              <button type="button" className="danger">
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
