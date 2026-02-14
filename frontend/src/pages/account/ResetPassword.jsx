import "./ResetPassword.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [form, setForm] = useState({ password: "", confirm: "" });

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={(event) => event.preventDefault()}>
        <h1>Reset Password</h1>
        <label>
          New Password
          <input
            type="password"
            value={form.password}
            onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={form.confirm}
            onChange={(event) => setForm((current) => ({ ...current, confirm: event.target.value }))}
          />
        </label>
        <button type="submit">Update Password</button>
        <Link to="/login">Back to Login</Link>
      </form>
    </section>
  );
}
