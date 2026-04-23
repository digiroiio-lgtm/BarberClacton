import Link from "next/link";

type CtaButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CtaButton({ href, label, variant = "primary", className }: CtaButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-amber-500 text-zinc-950 hover:bg-amber-400"
      : "border border-zinc-700 text-zinc-200 hover:border-zinc-500";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${classes} ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}
