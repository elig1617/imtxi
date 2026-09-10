import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const styles = {
  primary:
    "bg-accent text-ground hover:bg-accent/90 border border-transparent shadow-sm",
  secondary:
    "bg-ground text-navy border border-navy/20 hover:border-navy/45 hover:bg-navy/[0.02]",
  ghost: "bg-transparent text-navy border border-transparent hover:bg-navy/5",
  onDark:
    "bg-ground text-navy border border-transparent hover:bg-white shadow-sm",
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
  const cls = `inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-sm font-semibold tracking-tight transition-colors disabled:opacity-60 ${styles[variant]} ${className}`;

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
