import "./Button.css";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick,
}) {
  const className = [
    "button",
    `button-${variant}`,
    `button-${size}`,
    fullWidth ? "button-block" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
