import Link from "next/link";
import { JsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          items.map((item) => ({
            name: item.label,
            path: item.href,
          })),
        )}
      />
      <nav aria-label="Fil d’Ariane" className="min-w-0">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--color-slate)]/75">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={`${item.label}-${index}`}
                className="flex min-w-0 items-center gap-2"
              >
                {index > 0 ? (
                  <span aria-hidden="true" className="text-[var(--color-sand)]">
                    /
                  </span>
                ) : null}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="truncate font-medium text-[var(--color-navy)]"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="truncate underline-offset-2 hover:text-[var(--color-blue)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
