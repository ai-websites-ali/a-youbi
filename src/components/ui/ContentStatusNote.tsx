import type { ContentStatus } from "@/config/types";
import { cn } from "@/lib/utils";

const labels: Record<ContentStatus, string> = {
  verified: "Information vérifiée",
  placeholder: "Contenu de démonstration",
  "client-confirmation": "À confirmer par le client",
};

export function ContentStatusNote({
  status,
  children,
  className,
}: {
  status: ContentStatus;
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "border-l-2 pl-3 text-sm leading-relaxed",
        status === "verified" &&
          "border-[var(--color-blue)] text-[var(--color-slate)]/80",
        status === "placeholder" &&
          "border-[var(--color-sand)] text-[var(--color-slate)]/80",
        status === "client-confirmation" &&
          "border-[var(--color-azure)] text-[var(--color-slate)]/80",
        className,
      )}
      data-content-status={status}
    >
      <span className="sr-only">{labels[status]}. </span>
      {children}
    </p>
  );
}
