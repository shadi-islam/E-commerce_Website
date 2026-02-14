import "./Input.css";

export default function Input({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  helperText,
  ...rest
}) {
  return (
    <label className={`input ${error ? "input-error" : ""}`} htmlFor={id}>
      {label && <span className="input-label">{label}</span>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error ? (
        <small className="input-message">{error}</small>
      ) : (
        helperText && <small className="input-message">{helperText}</small>
      )}
    </label>
  );
}
