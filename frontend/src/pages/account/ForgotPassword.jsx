import "./ForgotPassword.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={(event) => event.preventDefault()}>
        <h1>Forgot Password</h1>
        <p>Enter your email and we will send a reset link.</p>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button type="submit">Send Reset Link</button>
        <Link to="/login">Back to Login</Link>
      </form>
    </section>
  );
}
