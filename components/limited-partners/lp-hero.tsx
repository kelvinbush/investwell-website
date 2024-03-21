import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const LpHero = () => {
  return (
    <div className={"mx-auto max-w-[1440px] px-3.5 py-8 md:py-20"}>
      <div className={"grid items-center gap-4 md:grid-cols-2"}>
        <div className={"space-y-6"}>
          <h1 className={"text-4xl font-bold md:text-5xl"}>
            Transparency, Speed, and Control.
          </h1>
          <p className={"text-lg text-blue-gray-300 md:mt-6"}>
            You demand greater transparency, a faster feedback loop, and an
            empowered investing experience. We get it. That&apos;s why we built
            a platform designed to put you in the driver&apos;s seat.
          </p>
          <Button className={"flex items-center gap-3"}>
            Request Demo
            <MoveRight color={"#ffffff"} />
          </Button>
        </div>
        <div>
          <Image
            src={"/hero-image.svg"}
            alt={"Investwell"}
            className={"h-auto w-full"}
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default LpHero;
