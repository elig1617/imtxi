export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: string;
  tone?: "neutral" | "progress" | "accent";
}) {
  const tones = {
    neutral: "bg-navy/5 text-muted border-navy/10",
    progress: "bg-teal/10 text-teal border-teal/20",
    accent: "bg-accent/10 text-accent border-accent/25",
  };
  return (
    <span
      className={`inline-flex rounded-sm border px-2 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
