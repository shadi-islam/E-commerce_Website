import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import "./ProtectedRoute.css";

const readJson = (value) => {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const getAuthState = () => {
  const token =
    localStorage.getItem("token") ||
    localStorage.getItem("authToken") ||
    localStorage.getItem("accessToken");

  const user =
    readJson(localStorage.getItem("user")) ||
    readJson(localStorage.getItem("currentUser")) ||
    {};

  const role = (user?.role || localStorage.getItem("userRole") || "").toLowerCase();

  return { isAuthenticated: Boolean(token), role };
};

export default function ProtectedRoute({
  children,
  redirectTo = "/login",
  requireAdmin = false,
  allowRedirect = false,
}) {
  const location = useLocation();
  const { isAuthenticated, role } = getAuthState();
  const isAllowed = isAuthenticated && (!requireAdmin || role === "admin");

  if (isAllowed) {
    return children || <Outlet />;
  }

  if (allowRedirect) {
    return <Navigate to={redirectTo} replace state={{ from: location.pathname }} />;
  }

  return (
    <section className="protectedroute">
      <div className="protectedroute-card">
        <p className="protectedroute-eyebrow">Restricted Area</p>
        <h2>{isAuthenticated ? "Access denied" : "Please log in"}</h2>
        <p>
          {isAuthenticated
            ? "Your account does not have permission to open this page."
            : "You need an active account session to continue."}
        </p>

        <div className="protectedroute-actions">
          <Link to={redirectTo} className="btn-primary">
            Go to Login
          </Link>
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
