import { monogram } from "@/config/media";
import { cn } from "@/lib/utils";

export function Monogram({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClass =
    size === "lg"
      ? "h-28 w-28 text-4xl"
      : size === "sm"
        ? "h-12 w-12 text-lg"
        : "h-20 w-20 text-2xl";

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-sm border border-[var(--color-navy)]/15 bg-[var(--color-navy)] text-white shadow-sm",
        sizeClass,
        className,
      )}
      aria-label={monogram.label}
      role="img"
    >
      <span
        aria-hidden="true"
        className="absolute inset-2 border border-white/20"
      />
      <span className="font-[family-name:var(--font-display)] tracking-[0.12em]">
        {monogram.initials}
      </span>
    </div>
  );
}
