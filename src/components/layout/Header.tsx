"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business, ctaLabels } from "@/config/business";
import { mainNav } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ChevronIcon, MenuIcon } from "@/components/ui/Icons";
import { Monogram } from "@/components/ui/Monogram";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonId = useId();
  const servicesMenuId = useId();

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setDrawerOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]/95 backdrop-blur-sm">
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
          >
            <Monogram size="sm" className="shrink-0" />
            <span className="min-w-0">
              <span className="block truncate font-[family-name:var(--font-display)] text-lg leading-none text-[var(--color-navy)]">
                Cabinet A.YOUBI
              </span>
              <span className="mt-1 hidden truncate text-xs text-[var(--color-slate)]/75 sm:block">
                Comptabilité · Réghaïa
              </span>
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden min-w-0 lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                if ("children" in item && item.children) {
                  return (
                    <li key={item.href} className="relative">
                      <div ref={servicesRef}>
                        <button
                          id={servicesButtonId}
                          type="button"
                          aria-expanded={servicesOpen}
                          aria-haspopup="true"
                          aria-controls={servicesMenuId}
                          onClick={() => setServicesOpen((value) => !value)}
                          className={cn(
                            "inline-flex min-h-11 items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]",
                            active
                              ? "text-[var(--color-blue)]"
                              : "text-[var(--color-slate)] hover:text-[var(--color-navy)]",
                          )}
                        >
                          {item.label}
                          <ChevronIcon
                            aria-hidden
                            className={cn(
                              "transition-transform",
                              servicesOpen && "rotate-180",
                            )}
                          />
                        </button>
                        {servicesOpen ? (
                          <ul
                            id={servicesMenuId}
                            role="menu"
                            aria-labelledby={servicesButtonId}
                            className="absolute left-0 top-full z-50 mt-2 w-72 rounded-sm border border-[var(--color-navy)]/10 bg-white p-2 shadow-lg"
                          >
                            <li role="none">
                              <Link
                                role="menuitem"
                                href={item.href}
                                className="block rounded-sm px-3 py-2 text-sm font-medium text-[var(--color-navy)] hover:bg-[var(--color-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
                                onClick={() => setServicesOpen(false)}
                              >
                                Tous les services
                              </Link>
                            </li>
                            {item.children.map((child) => (
                              <li key={child.href} role="none">
                                <Link
                                  role="menuitem"
                                  href={child.href}
                                  className="block rounded-sm px-3 py-2 text-sm text-[var(--color-slate)] hover:bg-[var(--color-soft)] hover:text-[var(--color-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex min-h-11 items-center rounded-sm px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]",
                        active
                          ? "text-[var(--color-blue)]"
                          : "text-[var(--color-slate)] hover:text-[var(--color-navy)]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={business.phone.href}
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex"
            >
              {ctaLabels.primary}
            </Button>
            <button
              ref={burgerRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-[var(--color-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)] lg:hidden"
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={drawerOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon aria-hidden />
            </button>
          </div>
        </Container>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        returnFocusRef={burgerRef}
      />
    </>
  );
}
