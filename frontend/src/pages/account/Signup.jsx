import "./Signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export default function Signup() {
  const navigate = useNavigate();
  const { setSession } = useAppContext();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.password) return;
    setSession({ name: form.name, email: form.email, role: "customer" }, "demo-token");
    navigate("/account/profile");
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={onSubmit}>
        <h1>Create Account</h1>
        <label>
          Full Name
          <input name="name" value={form.name} onChange={onChange} />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={onChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" value={form.password} onChange={onChange} />
        </label>
        <button type="submit">Sign Up</button>
        <Link to="/login">Already have an account?</Link>
      </form>
    </section>
  );
}
