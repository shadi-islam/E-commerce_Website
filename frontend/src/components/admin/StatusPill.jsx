import "./StatusPill.css";

const toneMap = {
  active: "success",
  paid: "success",
  delivered: "success",
  pending: "warning",
  processing: "info",
  inactive: "neutral",
  cancelled: "danger",
  failed: "danger",
};

export default function StatusPill({ label = "Pending", tone }) {
  const normalized = String(label).toLowerCase();
  const resolvedTone = tone || toneMap[normalized] || "neutral";

  return <span className={`statuspill ${resolvedTone}`}>{label}</span>;
}
