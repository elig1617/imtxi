export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: string;
  tone?: "neutral" | "progress" | "accent" | "caution";
}) {
  const tones = {
    neutral: "bg-navy/[0.06] text-muted border-navy/10",
    progress: "bg-teal/10 text-teal border-teal/25",
    accent: "bg-accent/12 text-accent border-accent/30",
    caution: "bg-navy/[0.04] text-navy/70 border-navy/15",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.06em] ${tones[tone]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === "accent"
            ? "bg-accent"
            : tone === "progress"
              ? "bg-teal"
              : "bg-navy/35"
        }`}
        aria-hidden
      />
      {children}
    </span>
  );
}
