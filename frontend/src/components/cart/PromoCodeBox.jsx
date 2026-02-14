import { useState } from "react";
import "./PromoCodeBox.css";

export default function PromoCodeBox({ onApply }) {
  const [code, setCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = code.trim();
    if (!trimmed) return;
    onApply?.(trimmed);
  };

  return (
    <section className="promocodebox">
      <h3>Promo Code</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="Enter code"
        />
        <button type="submit">Apply</button>
      </form>
    </section>
  );
}
