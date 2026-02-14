import "./Footer.css";
import NewsLetter from "./NewsLetter";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <NewsLetter />

        <div className="footer-links">
          <div>
            <h4>ShopNova</h4>
            <p>Reliable products, smooth checkout, and support that responds quickly.</p>
          </div>
          <div>
            <h5>Company</h5>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
          <div>
            <h5>Support</h5>
            <a href="/shop">Browse Products</a>
            <a href="/cart">View Cart</a>
            <a href="/contact">Contact Support</a>
          </div>
        </div>

        <p className="footer-copy">Copyright {new Date().getFullYear()} ShopNova. All rights reserved.</p>
      </div>
    </footer>
  );
}
