export function Field({
  label,
  value,
  onChange,
  placeholder,
  span,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  span?: boolean;
}) {
  return (
    <label className={span ? "flex flex-col gap-1 text-xs text-muted sm:col-span-2" : "flex flex-col gap-1 text-xs text-muted"}>
      {label}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-h-11 rounded-sm border border-line bg-ink px-3 text-sm text-fg tabular-nums"
      />
    </label>
  );
}
