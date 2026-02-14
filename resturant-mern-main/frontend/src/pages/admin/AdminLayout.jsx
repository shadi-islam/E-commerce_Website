import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.css";
export default function AdminLayout() {
  return (
    <section className="admin-layout">
      <aside><h3>Admin</h3><Link to="dashboard">Dashboard</Link></aside>
      <div><Outlet /></div>
    </section>
  );
}
