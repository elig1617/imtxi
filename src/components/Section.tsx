import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  tint?: boolean;
};

export function Section({ children, className = "", id, dark, tint }: Props) {
  const bg = dark
    ? "bg-teal text-on-dark"
    : tint
      ? "bg-tint-flat"
      : "bg-ground";

  return (
    <section id={id} className={`px-5 py-16 md:px-8 md:py-24 ${bg} ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
