import "./AdminTopbar.css";

export default function AdminTopbar({
  title = "Dashboard",
  subtitle = "Manage orders, products, and customers",
  userName = "Admin",
  onSearch,
}) {
  return (
    <header className="admintopbar">
      <div className="admintopbar-title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="admintopbar-actions">
        <label className="admintopbar-search">
          <span className="sr-only">Search admin data</span>
          <input
            type="search"
            placeholder="Search products or orders"
            onChange={(event) => onSearch?.(event.target.value)}
          />
        </label>
        <button type="button" className="admintopbar-alert" aria-label="Notifications">
          Alerts
        </button>
        <div className="admintopbar-user" aria-label="Signed in user">
          {userName}
        </div>
      </div>
    </header>
  );
}
