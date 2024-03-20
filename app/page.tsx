import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";

export default function Home() {
  return (
    <main className={"space-y-12"}>
      <Hero />
      <Stats />
    </main>
  );
}
