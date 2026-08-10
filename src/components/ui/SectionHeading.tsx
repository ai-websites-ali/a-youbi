import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  supporting,
  align = "left",
  className,
  id,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  supporting?: ReactNode;
  align?: "left" | "center";
  className?: string;
  id?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl min-w-0",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-[var(--color-azure)]" : "text-[var(--color-blue)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-[var(--color-navy)]",
        )}
      >
        {title}
      </h2>
      {supporting ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "dark" ? "text-white/75" : "text-[var(--color-slate)]/85",
          )}
        >
          {supporting}
        </p>
      ) : null}
    </div>
  );
}
