import { Link } from "react-router-dom";
import "./EmptyState.css";

export default function EmptyState({
  title = "Nothing here yet",
  description = "Try adding items or changing your filters.",
  actionLabel,
  actionTo = "/",
}) {
  return (
    <section className="emptystate">
      <div className="emptystate-icon" aria-hidden="true">
        0
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {actionLabel && <Link to={actionTo}>{actionLabel}</Link>}
    </section>
  );
}
