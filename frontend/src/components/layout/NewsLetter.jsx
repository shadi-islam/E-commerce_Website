import { useState } from "react";
import "./NewsLetter.css";

export default function NewsLetter({ onSubmit }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = email.trim();
    if (!value) return;
    onSubmit?.(value);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="newsletter-copy">
        <p>Stay Updated</p>
        <h3>Get offers and product drops</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
