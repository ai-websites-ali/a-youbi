import type { ReactNode } from "react";
import type { ServiceIconId } from "@/config/services";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export function PhoneIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...rest}>
      <path
        d="M6.5 4.5h2.2l1.1 3.2-1.4 1.1a12.5 12.5 0 0 0 5.8 5.8l1.1-1.4 3.2 1.1v2.2c0 .9-.7 1.6-1.6 1.6A13.9 13.9 0 0 1 3.5 6.1c0-.9.7-1.6 1.6-1.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...rest}>
      <path
        d="M12 3.5a8 8 0 0 0-6.9 12l-1 3.5 3.6-1A8 8 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9.2 9.4c.3-.6.6-.6.9-.6h.3c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.2-.1.4.1.7.4.6 1.1 1.3 1.8 1.7.3.2.5.1.7-.1l.5-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.3c0 .3 0 .6-.6.9-.5.3-1.3.4-2.2 0A9.5 9.5 0 0 1 9.5 11c-.3-.7-.3-1.3 0-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DirectionsIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-5 w-5", className)} {...rest}>
      <path
        d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function MenuIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)} {...rest}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-6 w-6", className)} {...rest}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} {...rest}>
      <path d="m7 10 5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function frame(children: ReactNode, className?: string) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("h-10 w-10", className)} aria-hidden="true">
      {children}
    </svg>
  );
}

export function ServiceIcon({
  id,
  className,
}: {
  id: ServiceIconId;
  className?: string;
}) {
  switch (id) {
    case "ledger":
      return frame(
        <>
          <rect x="10" y="8" width="28" height="32" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M16 16h16M16 22h16M16 28h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M30 30l2.5 2.5L38 27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>,
        className,
      );
    case "fiscal":
      return frame(
        <>
          <rect x="12" y="9" width="24" height="30" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M18 17h12M18 23h12M18 29h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="33" cy="33" r="6" fill="var(--color-ivory)" stroke="currentColor" strokeWidth="1.6" />
          <path d="M33 30v6M30.5 33H35.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>,
        className,
      );
    case "payroll":
      return frame(
        <>
          <rect x="9" y="12" width="30" height="22" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 18h30M15 26h8M15 30h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="31" cy="28" r="3" stroke="currentColor" strokeWidth="1.6" />
        </>,
        className,
      );
    case "creation":
      return frame(
        <>
          <path d="M12 34V16l12-6 12 6v18" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M20 34v-8h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M24 14v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>,
        className,
      );
    case "conseil":
      return frame(
        <>
          <path d="M10 30V14h18v10H16l-6 6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M22 20h14v12l-5-4H22V20Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </>,
        className,
      );
    case "audit":
      return frame(
        <>
          <circle cx="22" cy="22" r="10" stroke="currentColor" strokeWidth="1.8" />
          <path d="m29 29 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 22.5 21 25.5 26.5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>,
        className,
      );
    default:
      return null;
  }
}
