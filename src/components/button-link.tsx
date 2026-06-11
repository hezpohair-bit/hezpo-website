import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className
}: ButtonLinkProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition",
    variant === "primary" && "bg-hezpo-red text-white hover:bg-ink",
    variant === "secondary" && "border border-ink bg-white text-ink hover:border-hezpo-red hover:text-hezpo-red",
    variant === "ghost" && "text-ink hover:text-hezpo-red",
    className
  );

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {children}
        <ArrowRight aria-hidden="true" size={16} />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      <ArrowRight aria-hidden="true" size={16} />
    </Link>
  );
}
