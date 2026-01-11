export function SelectInput({ label, value, onChange, options, error }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "error" : ""}
      >
        <option value="">Select option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}
