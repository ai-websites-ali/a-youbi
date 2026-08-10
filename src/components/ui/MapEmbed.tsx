import { business } from "@/config/business";
import { Button } from "@/components/ui/Button";

export function MapEmbed() {
  const { lat, lng } = business.coordinates;
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;

  return (
    <div className="min-w-0">
      <div className="overflow-hidden rounded-sm border border-[var(--color-navy)]/10 bg-[var(--color-soft)]">
        <iframe
          title="Carte Google Maps du Cabinet A.YOUBI à Réghaïa"
          src={src}
          className="aspect-[4/3] w-full max-w-full border-0 sm:aspect-[16/10]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="mt-3 text-sm text-[var(--color-slate)]/80">
        {business.address.floorNotice}
      </p>
      <div className="mt-4">
        <Button
          href={business.directions.href}
          variant="tertiary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Obtenir l’itinéraire
        </Button>
      </div>
    </div>
  );
}
