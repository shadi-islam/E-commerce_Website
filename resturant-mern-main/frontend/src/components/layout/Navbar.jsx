import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">ShopNova</Link>
      <nav><Link to="/shop">Shop</Link><Link to="/cart">Cart</Link><Link to="/login">Account</Link></nav>
    </header>
  );
}
