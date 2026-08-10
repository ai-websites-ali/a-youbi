import { business, ctaLabels } from "@/config/business";
import {
  DirectionsIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const actions = [
  {
    href: business.phone.href,
    label: ctaLabels.callShort,
    icon: PhoneIcon,
    external: false,
  },
  {
    href: business.whatsapp.href,
    label: ctaLabels.whatsappShort,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    href: business.directions.href,
    label: ctaLabels.directionsShort,
    icon: DirectionsIcon,
    external: true,
  },
] as const;

export function StickyMobileFooter() {
  return (
    <div
      id="sticky-mobile-footer"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-[var(--color-navy)]/15 bg-[var(--color-navy)] text-white lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <nav aria-label="Contact rapide" className="grid grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              key={action.label}
              href={action.href}
              className="flex min-h-12 flex-col items-center justify-center gap-1 px-2 py-2 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
              {...(action.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Icon aria-hidden className="h-5 w-5 text-white" />
              <span className="text-xs font-medium text-white">{action.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
