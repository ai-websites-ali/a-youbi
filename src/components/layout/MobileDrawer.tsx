"use client";

import { useEffect, useId, useRef, type RefObject } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { business, ctaLabels } from "@/config/business";
import { mainNav } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { CloseIcon } from "@/components/ui/Icons";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
};

function getFocusable(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
}

export function MobileDrawer({
  open,
  onClose,
  returnFocusRef,
}: MobileDrawerProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const stickyFooter = document.getElementById("sticky-mobile-footer");
    stickyFooter?.setAttribute("inert", "");
    const focusReturnTarget = returnFocusRef.current;

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = getFocusable(panelRef.current);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      stickyFooter?.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
      focusReturnTarget?.focus();
    };
  }, [open, onClose, returnFocusRef]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] lg:hidden" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-[var(--color-navy)]/45"
        aria-label="Fermer le menu"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute right-0 top-0 flex h-[100dvh] w-[min(22rem,100%)] flex-col bg-[var(--color-ivory)] shadow-xl"
        style={{ paddingBottom: "calc(4.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-navy)]/10 px-4 py-4">
          <p
            id={titleId}
            className="font-[family-name:var(--font-display)] text-lg text-[var(--color-navy)]"
          >
            Menu
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-[var(--color-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
            aria-label="Fermer le menu de navigation"
          >
            <CloseIcon aria-hidden />
          </button>
        </div>

        <nav aria-label="Navigation mobile" className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href} className="min-w-0">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-sm px-3 py-3 text-base font-medium text-[var(--color-navy)] hover:bg-[var(--color-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children ? (
                  <ul className="mb-2 ml-3 space-y-1 border-l border-[var(--color-navy)]/10 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block rounded-sm px-2 py-2 text-sm text-[var(--color-slate)] hover:text-[var(--color-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-[var(--color-navy)]/10 p-4">
          <Button href={business.phone.href} variant="primary" className="w-full">
            {ctaLabels.primary}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
