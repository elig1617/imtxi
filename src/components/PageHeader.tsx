type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="relative border-b border-rule bg-tint">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-rule" />
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <div className="accent-rule mb-6" aria-hidden />
        <h1 className="max-w-3xl text-3xl md:text-[2.75rem] md:leading-[1.15]">
          {title}
        </h1>
        {description && (
          <p className="measure mt-6 text-lg leading-relaxed text-muted md:text-xl">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
