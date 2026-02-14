import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export default function Login() {
  const navigate = useNavigate();
  const { setSession } = useAppContext();
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.email || !form.password) return;
    setSession({ name: "Alex Johnson", email: form.email, role: "customer" }, "demo-token");
    navigate("/account/profile");
  };

  return (
    <section className="login-page">
      <form className="login-card" onSubmit={onSubmit}>
        <h1>Welcome Back</h1>
        <p>Sign in to track orders and manage your account.</p>

        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={onChange} />
        </label>
        <label>
          Password
          <input name="password" type="password" value={form.password} onChange={onChange} />
        </label>

        <button type="submit">Sign In</button>
        <div className="login-links">
          <Link to="/account/forgot-password">Forgot password?</Link>
          <Link to="/account/signup">Create account</Link>
        </div>
      </form>
    </section>
  );
}
