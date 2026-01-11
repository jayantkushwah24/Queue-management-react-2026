export function TextInput({ label, value, onChange, placeholder, error }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "error" : ""}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}
