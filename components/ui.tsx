import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Page-width wrapper with side padding. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>{children}</div>;
}

const tones = {
  base: "bg-ink-950",
  alt: "border-y border-line/60 bg-ink-900",
};

/* A full-width page section. */
export function Section({
  id,
  tone = "base",
  className,
  children,
}: {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

/* Small label + big title (+ optional intro) at the top of a section. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.14em] text-accent-400 uppercase">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-[2.75rem] sm:leading-[1.1]">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

/* Small rounded square holding an icon. */
export function IconBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/25",
        className,
      )}
    >
      {children}
    </span>
  );
}

const buttonVariants = {
  primary:
    "bg-accent-600 text-white shadow-[0_8px_30px_-8px_rgba(37,99,235,0.7)] hover:bg-accent-500",
  outline: "border border-white/15 bg-white/[0.04] text-fg hover:border-white/30 hover:bg-white/[0.08]",
  dark: "bg-ink-950 text-fg hover:bg-ink-700",
  white: "bg-white text-ink-950 hover:bg-white/90",
};

const buttonSizes = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-base sm:text-lg",
};

/* A link styled as a button (for tel:, mailto:, and #section links). */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: keyof typeof buttonVariants; size?: keyof typeof buttonSizes }) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-colors",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    />
  );
}
