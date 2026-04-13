import Hero from "@/components/sections/hero";
import ExecutiveSummary from "@/components/sections/executive-summary";
import Proposition from "@/components/sections/proposition";
import WhatIsEsim from "@/components/sections/what-is-esim";
import WhyEsim from "@/components/sections/why-esim";
import BusinessCase from "@/components/sections/business-case";
import Financials from "@/components/sections/financials";
import OtherOpportunities from "@/components/sections/other-opportunities";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ExecutiveSummary />
      <Proposition />
      <WhatIsEsim />
      <WhyEsim />
      <BusinessCase />
      <Financials />
      <OtherOpportunities />
      <Cta />
    </main>
  );
}
