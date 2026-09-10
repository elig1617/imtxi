import { ReactNode } from "react";

type Props = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  help?: string;
  as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[];
  rows?: number;
  children?: ReactNode;
};

export function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  help,
  as = "input",
  options,
  rows = 4,
}: Props) {
  const fieldCls =
    "mt-1.5 w-full rounded-sm border border-navy/20 bg-ground px-3 py-2.5 text-sm text-navy outline-none focus:border-accent";

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={fieldCls}
        />
      ) : as === "select" ? (
        <select id={name} name={name} required={required} className={fieldCls} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          {options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={fieldCls}
        />
      )}
      {help && <p className="mt-1 text-xs text-muted">{help}</p>}
    </div>
  );
}
