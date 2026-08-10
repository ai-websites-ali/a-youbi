import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "onDark"
  | "onDarkSecondary";
type Size = "md" | "lg" | "sm";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-navy)] text-white hover:bg-[var(--color-blue)] focus-visible:outline-[var(--color-azure)] active:bg-[#07182e]",
  secondary:
    "bg-white text-[var(--color-navy)] border border-[var(--color-navy)]/25 hover:border-[var(--color-blue)] hover:text-[var(--color-blue)] focus-visible:outline-[var(--color-blue)] active:bg-[var(--color-soft)]",
  tertiary:
    "bg-transparent text-[var(--color-blue)] underline-offset-4 hover:underline hover:text-[var(--color-navy)] focus-visible:outline-[var(--color-blue)]",
  onDark:
    "bg-white text-[var(--color-navy)] hover:bg-[var(--color-soft)] focus-visible:outline-white active:bg-[var(--color-sand)]",
  onDarkSecondary:
    "bg-transparent text-white border border-white/55 hover:bg-white/10 focus-visible:outline-white active:bg-white/15",
};

const sizeClasses: Record<Size, string> = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-[3.25rem] px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60",
    variant !== "tertiary" && "shadow-sm",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    const external =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (external) {
      return (
        <a href={href} className={classes} {...linkRest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
