import ExecutiveSummary from "@/components/sections/executive-summary";
import Proposition from "@/components/sections/proposition";
import WhatIsEsim from "@/components/sections/what-is-esim";
import WhyEsim from "@/components/sections/why-esim";
import BusinessCase from "@/components/sections/business-case";
import Calculator from "@/components/sections/calculator";
import OtherOpportunities from "@/components/sections/other-opportunities";
import Cta from "@/components/sections/cta";
import SiteHeader from "@/components/sections/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ExecutiveSummary />
        <Proposition />
        <WhatIsEsim />
        <WhyEsim />
        <BusinessCase />
        <Calculator />
        <OtherOpportunities />
        <Cta />
      </main>
    </>
  );
}
