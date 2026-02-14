import "./Modal.css";

export default function Modal({ open = false, title = "Modal", children, onClose, footer }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <section className="modal">
        <header className="modal-header">
          <h3>{title}</h3>
          <button type="button" onClick={onClose} aria-label="Close modal">
            x
          </button>
        </header>
        <div className="modal-body">{children}</div>
        {footer && <footer className="modal-footer">{footer}</footer>}
      </section>
    </div>
  );
}
