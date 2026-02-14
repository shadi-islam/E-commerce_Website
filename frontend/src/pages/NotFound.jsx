import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound-page">
      <div className="notfound-card">
        <h1>404</h1>
        <p>The page you requested does not exist or has been moved.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </section>
  );
}
