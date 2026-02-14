import "./Dashboard.css";
import DataTable from "../../components/admin/DataTable";
import ImageUploader from "../../components/admin/ImageUploader";
import StatusPill from "../../components/admin/StatusPill";

const quickStats = [
  { label: "Orders Today", value: "126", status: "Processing" },
  { label: "Revenue", value: "$12,480", status: "Paid" },
  { label: "Refund Requests", value: "4", status: "Pending" },
];

export default function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="dashboard-stats">
        {quickStats.map((item) => (
          <article key={item.label} className="dashboard-stat-card">
            <p>{item.label}</p>
            <h3>{item.value}</h3>
            <StatusPill label={item.status} />
          </article>
        ))}
      </div>

      <DataTable />
      <ImageUploader label="Upload Product Images" />
    </section>
  );
}
