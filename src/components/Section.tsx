import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
};

export function Section({ children, className = "", id, dark }: Props) {
  return (
    <section
      id={id}
      className={`px-5 py-14 md:px-8 md:py-20 ${
        dark ? "bg-teal text-on-dark" : "bg-ground"
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
