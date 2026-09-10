type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="border-b border-rule bg-ground">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        {eyebrow && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-3xl md:text-5xl">{title}</h1>
        {description && (
          <p className="measure mt-5 text-lg text-muted">{description}</p>
        )}
      </div>
    </header>
  );
}
