import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { StickyMobileFooter } from "@/components/layout/StickyMobileFooter";
import { business } from "@/config/business";
import { siteConfig } from "@/config/site";
import { JsonLd, professionalServiceJsonLd } from "@/lib/structured-data";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Cabinet A.YOUBI | Comptabilité et commissariat aux comptes à Réghaïa",
    template: "%s | Cabinet A.YOUBI",
  },
  description: siteConfig.description,
  applicationName: business.shortName.value,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: business.shortName.value,
    title:
      "Cabinet A.YOUBI | Comptabilité et commissariat aux comptes à Réghaïa",
    description: siteConfig.description,
    url: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-[var(--color-ivory)] text-[var(--color-slate)] antialiased">
        <JsonLd data={professionalServiceJsonLd()} />
        <SkipLink />
        <Header />
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileFooter />
      </body>
    </html>
  );
}
