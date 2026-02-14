import { useState } from "react";
import "./AddressForm.css";

const initialValues = {
  fullName: "",
  phone: "",
  line1: "",
  city: "",
  state: "",
  zip: "",
};

export default function AddressForm({ onSubmit }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(values);
  };

  return (
    <section className="addressform">
      <h3>Add New Address</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input name="fullName" value={values.fullName} onChange={handleChange} />
        </label>
        <label>
          Phone
          <input name="phone" value={values.phone} onChange={handleChange} />
        </label>
        <label className="span-2">
          Street Address
          <input name="line1" value={values.line1} onChange={handleChange} />
        </label>
        <label>
          City
          <input name="city" value={values.city} onChange={handleChange} />
        </label>
        <label>
          State
          <input name="state" value={values.state} onChange={handleChange} />
        </label>
        <label>
          ZIP Code
          <input name="zip" value={values.zip} onChange={handleChange} />
        </label>
        <div className="span-2">
          <button type="submit">Save Address</button>
        </div>
      </form>
    </section>
  );
}
