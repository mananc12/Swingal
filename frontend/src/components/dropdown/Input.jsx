export function Input({ value, children, set, min = -200, max = 200, step }) {
    return (
      <label className="drop-label">
        <code>{children}</code>
        <input
          className="drop-input"
          value={value}
          type="range"
          min={min}
          max={max}
          onChange={(e) => set(parseFloat(e.target.value))}
          step={step}
        />
        <input
        className="drop-input"
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => set(parseFloat(e.target.value) || 0)}
        />
      </label>
    );
  }
  