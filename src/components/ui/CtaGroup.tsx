import { business, ctaLabels } from "@/config/business";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CtaGroupProps = {
  tertiaryHref?: string;
  tertiaryLabel?: string;
  className?: string;
  size?: "md" | "lg";
  showDirections?: boolean;
  tone?: "light" | "dark";
};

export function CtaGroup({
  tertiaryHref,
  tertiaryLabel,
  className,
  size = "md",
  showDirections = false,
  tone = "light",
}: CtaGroupProps) {
  const primaryVariant = tone === "dark" ? "onDark" : "primary";
  const secondaryVariant = tone === "dark" ? "onDarkSecondary" : "secondary";
  const tertiaryClass =
    tone === "dark" ? "text-white hover:text-white" : undefined;

  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      <Button href={business.phone.href} variant={primaryVariant} size={size}>
        {ctaLabels.primary}
      </Button>
      <Button
        href={business.whatsapp.href}
        variant={secondaryVariant}
        size={size}
        target="_blank"
        rel="noopener noreferrer"
      >
        {ctaLabels.secondary}
      </Button>
      {showDirections ? (
        <Button
          href={business.directions.href}
          variant="tertiary"
          size={size}
          className={tertiaryClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ctaLabels.directions}
        </Button>
      ) : null}
      {tertiaryHref && tertiaryLabel ? (
        <Button
          href={tertiaryHref}
          variant="tertiary"
          size={size}
          className={tertiaryClass}
        >
          {tertiaryLabel}
        </Button>
      ) : null}
    </div>
  );
}
