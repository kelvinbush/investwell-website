import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import Investors from "@/components/home/investors";
import Streamlining from "@/components/home/streamlining";
import KycProcess from "@/components/home/kyc-process";
import Fund from "@/components/home/fund";
import Empower from "@/components/home/empower";

export default function Home() {
  return (
    <main className={"relative mb-10"}>
      <Hero />
      <Stats />
      <Investors />
      <Streamlining />
      <KycProcess />
      <Fund />
      <Empower />
    </main>
  );
}
