import React from "react";
import LpHero from "@/components/limited-partners/lp-hero";
import Stats from "@/components/home/stats";
import LpOnboard from "@/components/limited-partners/lp-onboard";
import LpUnleash from "@/components/limited-partners/lp-unleash";
import LpDirect from "@/components/limited-partners/lp-direct";
import Fund from "@/components/home/fund";
import Empower from "@/components/home/empower";

const Page = () => {
  return (
    <main className={"relative"}>
      <LpHero />
      <Stats />
      <LpOnboard />
      <LpUnleash />
      <LpDirect />
      <Fund />
      <Empower />
    </main>
  );
};

export default Page;
