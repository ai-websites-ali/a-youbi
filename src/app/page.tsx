import { CabinetPresentation } from "@/components/sections/CabinetPresentation";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { ProfessionalPresentation } from "@/components/sections/ProfessionalPresentation";
import { Services } from "@/components/sections/Services";
import { Statistics } from "@/components/sections/Statistics";
import { Strengths } from "@/components/sections/Strengths";
import { pageMetadata } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(pageMetadata.home);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <CabinetPresentation />
      <ProfessionalPresentation />
      <Services />
      <Strengths />
      <Method />
      <PracticalInfo />
      <FinalCta />
    </>
  );
}
