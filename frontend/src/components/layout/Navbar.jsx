import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./Navbar.css";

export default function Navbar() {
  const { cartCount, wishlistItems, user, isAuthenticated } = useAppContext();

  return (
    <header className="navbar-wrap">
      <div className="navbar">
        <Link to="/" className="brand">
          ShopNova
        </Link>
        <nav>
          <Link to="/shop">Shop</Link>
          <Link to="/wishlist">Wishlist ({wishlistItems.length})</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to={isAuthenticated ? "/account/profile" : "/login"}>
            {isAuthenticated ? user?.name || "My Account" : "Account"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
