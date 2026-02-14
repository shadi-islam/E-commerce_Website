import { Outlet } from "react-router-dom";
import "./AdminLayout.css";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";

export default function AdminLayout() {
  return (
    <section className="admin-layout">
      <AdminSidebar />
      <div className="admin-layout-main">
        <AdminTopbar />
        <Outlet />
      </div>
    </section>
  );
}
