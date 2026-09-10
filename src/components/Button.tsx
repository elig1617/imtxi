import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const styles = {
  primary:
    "bg-accent text-ground hover:bg-accent/90 border border-transparent",
  secondary:
    "bg-transparent text-navy border border-navy/25 hover:border-navy/50",
  ghost: "bg-transparent text-navy border border-transparent hover:bg-navy/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  className = "",
  disabled,
  onClick,
}: Props) {
  const cls = `inline-flex items-center justify-center rounded-sm px-4 py-2.5 text-sm font-medium transition-colors disabled:opacity-60 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
