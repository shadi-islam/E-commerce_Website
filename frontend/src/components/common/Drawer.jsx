import "./Drawer.css";

export default function Drawer({
  open = false,
  title = "Panel",
  children,
  onClose,
  position = "right",
}) {
  if (!open) return null;

  return (
    <div className="drawer-overlay" role="dialog" aria-modal="true">
      <aside className={`drawer drawer-${position}`}>
        <header className="drawer-header">
          <h3>{title}</h3>
          <button type="button" onClick={onClose} aria-label="Close drawer">
            x
          </button>
        </header>
        <div className="drawer-body">{children}</div>
      </aside>
    </div>
  );
}
