import "./Toast.css";

export default function Toast({
  message = "Saved successfully.",
  tone = "success",
  visible = true,
  onClose,
}) {
  if (!visible) return null;

  return (
    <div className={`toast toast-${tone}`} role="status" aria-live="polite">
      <p>{message}</p>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Close toast">
          x
        </button>
      )}
    </div>
  );
}
