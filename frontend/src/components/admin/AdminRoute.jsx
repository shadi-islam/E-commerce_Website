import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import "./AdminRoute.css";

const readJson = (value) => {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

const getAdminState = () => {
  const token =
    localStorage.getItem("token") ||
    localStorage.getItem("authToken") ||
    localStorage.getItem("accessToken");
  const user =
    readJson(localStorage.getItem("user")) ||
    readJson(localStorage.getItem("currentUser")) ||
    {};
  const role = (user?.role || localStorage.getItem("userRole") || "").toLowerCase();

  return { isAuthenticated: Boolean(token), isAdmin: role === "admin" };
};

export default function AdminRoute({
  children,
  redirectTo = "/login",
  allowRedirect = false,
}) {
  const location = useLocation();
  const { isAuthenticated, isAdmin } = getAdminState();

  if (isAuthenticated && isAdmin) {
    return children || <Outlet />;
  }

  if (allowRedirect) {
    return <Navigate to={redirectTo} replace state={{ from: location.pathname }} />;
  }

  return (
    <section className="adminroute">
      <div className="adminroute-card">
        <p className="adminroute-eyebrow">Admin Portal</p>
        <h2>{isAuthenticated ? "Admin access required" : "Login required"}</h2>
        <p>
          {isAuthenticated
            ? "Your account is signed in but does not have admin privileges."
            : "Sign in with an admin account to access the dashboard."}
        </p>
        <div className="adminroute-actions">
          <Link className="adminroute-primary" to={redirectTo}>
            Go to Login
          </Link>
          <Link className="adminroute-secondary" to="/">
            Back to Store
          </Link>
        </div>
      </div>
    </section>
  );
}
