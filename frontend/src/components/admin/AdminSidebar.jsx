import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

const defaultLinks = [
  { to: "/admin/dashboard", label: "Dashboard" },
  { to: "/admin/orders", label: "Orders" },
  { to: "/admin/products", label: "Products" },
  { to: "/admin/users", label: "Users" },
  { to: "/admin/analytics", label: "Analytics" },
  { to: "/admin/coupons", label: "Coupons" },
  { to: "/admin/settings", label: "Settings" },
];

export default function AdminSidebar({
  links = defaultLinks,
  brand = "Storefront Admin",
}) {
  return (
    <aside className="adminsidebar">
      <div className="adminsidebar-brand">
        <p className="adminsidebar-eyebrow">Control Panel</p>
        <h2>{brand}</h2>
      </div>

      <nav className="adminsidebar-nav" aria-label="Admin sections">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "adminsidebar-link active" : "adminsidebar-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
