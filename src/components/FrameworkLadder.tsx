type Tier = {
  tier: string;
  label: string;
  definition: string;
  claims: string;
};

const defaultTiers: Tier[] = [
  {
    tier: "Tier 1",
    label: "Cleared · RCT",
    definition:
      "FDA-cleared or authorized for a therapeutic indication, supported by randomized controlled trial evidence.",
    claims: "Specific therapeutic claims within the cleared indication.",
  },
  {
    tier: "Tier 2",
    label: "Cleared · Clinical evidence",
    definition:
      "FDA-cleared or authorized, supported by clinical evidence short of RCT.",
    claims:
      "Therapeutic claims within the cleared indication, with evidence qualification.",
  },
  {
    tier: "Tier 3",
    label: "Registered · Feasibility",
    definition:
      "FDA establishment registration only; feasibility or observational data.",
    claims: "No therapeutic claims; adjunctive or investigational use.",
  },
  {
    tier: "Tier 4",
    label: "Wellness",
    definition: "No FDA authorization; general wellness positioning.",
    claims: "Wellness and engagement claims only.",
  },
];

/** Compact vertical ladder for home hero (methodology labels only). */
export function FrameworkLadderMini() {
  const steps = [
    { n: "1", label: "Cleared · RCT evidence" },
    { n: "2", label: "Cleared · Clinical evidence" },
    { n: "3", label: "Registered · Feasibility" },
    { n: "4", label: "Wellness positioning" },
  ];

  return (
    <aside
      className="surface-card relative overflow-hidden p-6 md:p-7"
      aria-label="Four-tier evaluation framework overview"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10"
        aria-hidden
      />
      <p className="eyebrow mb-1">Framework</p>
      <p className="font-serif text-lg font-semibold text-navy">
        Four-tier evaluation ladder
      </p>
      <p className="mt-2 text-sm text-muted">
        Regulatory status × clinical evidence — methodology only.
      </p>

      <ol className="relative mt-6 space-y-0">
        <div
          className="absolute bottom-3 left-[15px] top-3 w-px bg-rule"
          aria-hidden
        />
        {steps.map((s, i) => (
          <li key={s.n} className="relative flex items-start gap-4 py-2.5">
            <span
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border text-xs font-bold ${
                i === 0
                  ? "border-accent/40 bg-accent text-ground"
                  : "border-navy/15 bg-ground text-navy"
              }`}
            >
              {s.n}
            </span>
            <span className="pt-1.5 text-sm font-medium text-navy/90">
              {s.label}
            </span>
          </li>
        ))}
      </ol>

      <svg
        className="mt-5 w-full text-navy/15"
        viewBox="0 0 280 48"
        fill="none"
        aria-hidden
      >
        <rect x="8" y="8" width="64" height="32" rx="2" stroke="currentColor" strokeWidth="1.25" />
        <rect x="80" y="14" width="56" height="26" rx="2" stroke="currentColor" strokeWidth="1.25" opacity="0.85" />
        <rect x="144" y="20" width="48" height="20" rx="2" stroke="currentColor" strokeWidth="1.25" opacity="0.7" />
        <rect x="200" y="26" width="40" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" opacity="0.55" />
        <path d="M72 24h8M136 27h8M192 33h8" stroke="currentColor" strokeWidth="1" />
      </svg>
    </aside>
  );
}

export function FrameworkLadder({ tiers = defaultTiers }: { tiers?: Tier[] }) {
  return (
    <div className="space-y-4">
      {/* Visual ladder */}
      <div className="surface-card overflow-hidden">
        <div className="border-b border-rule bg-navy px-5 py-4 md:px-6">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-on-dark/60">
            Evaluation ladder
          </p>
          <p className="mt-1 font-serif text-lg text-on-dark">
            Regulatory status × clinical evidence
          </p>
        </div>
        <ol className="divide-y divide-rule">
          {tiers.map((t, i) => {
            const widths = ["w-full", "w-[88%]", "w-[72%]", "w-[56%]"];
            return (
              <li
                key={t.tier}
                className="grid gap-4 px-5 py-6 md:grid-cols-12 md:gap-6 md:px-6"
              >
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-sm font-serif text-sm font-semibold ${
                        i === 0
                          ? "bg-accent text-ground"
                          : "bg-navy/[0.06] text-navy"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-serif text-lg font-semibold">{t.tier}</p>
                      <p className="text-xs font-medium text-muted">{t.label}</p>
                    </div>
                  </div>
                  <div className="mt-4 hidden h-2 overflow-hidden rounded-sm bg-navy/[0.06] md:block">
                    <div
                      className={`h-full rounded-sm bg-teal/70 ${widths[i]}`}
                      aria-hidden
                    />
                  </div>
                </div>
                <div className="md:col-span-5">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted">
                    Definition
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/85">
                    {t.definition}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted">
                    Appropriate claims
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/85">
                    {t.claims}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Compact SVG diagram */}
      <div className="surface-card bg-tint-flat p-5 md:p-6">
        <p className="eyebrow mb-4">At a glance</p>
        <svg
          viewBox="0 0 640 160"
          className="h-auto w-full max-w-3xl text-navy"
          role="img"
          aria-label="Descending four-tier ladder from Tier 1 to Tier 4"
        >
          <defs>
            <linearGradient id="ladderFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0B3B3C" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0B3B3C" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          {[
            { y: 12, w: 560, label: "Tier 1 — Cleared · RCT" },
            { y: 48, w: 480, label: "Tier 2 — Cleared · Clinical evidence" },
            { y: 84, w: 400, label: "Tier 3 — Registered · Feasibility" },
            { y: 120, w: 320, label: "Tier 4 — Wellness" },
          ].map((row, i) => (
            <g key={row.label}>
              <rect
                x={40}
                y={row.y}
                width={row.w}
                height={28}
                rx={2}
                fill="url(#ladderFill)"
                stroke="#10243E"
                strokeOpacity={0.2 - i * 0.03}
                strokeWidth={1.25}
              />
              <text
                x={52}
                y={row.y + 18}
                fill="#10243E"
                fontSize="12"
                fontFamily="var(--font-inter), Inter, sans-serif"
                fontWeight="600"
              >
                {row.label}
              </text>
              <circle
                cx={24}
                cy={row.y + 14}
                r={8}
                fill={i === 0 ? "#9A7B4F" : "#10243E"}
                fillOpacity={i === 0 ? 1 : 0.12}
              />
              <text
                x={24}
                y={row.y + 18}
                textAnchor="middle"
                fill={i === 0 ? "#FAF9F6" : "#10243E"}
                fontSize="10"
                fontWeight="700"
                fontFamily="var(--font-inter), Inter, sans-serif"
              >
                {i + 1}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
