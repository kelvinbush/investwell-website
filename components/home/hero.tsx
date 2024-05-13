import React from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import RequestDemoButton from "@/components/ui/request-demo.button";

const Hero = () => {
  return (
    <div className={"mx-auto max-w-[1440px] px-3.5 py-8 md:py-20"}>
      <div className={"grid items-center gap-4 md:grid-cols-2"}>
        <div className={"space-y-6"}>
          <h1 className={"text-4xl font-bold md:text-5xl"}>
            Simplify Your Fund Management.
          </h1>
          <p className={"text-lg text-blue-gray-300 md:mt-6"}>
            Investwell makes alternative investments understandable and
            accessible for everyone involved, giving power to limited partners
            (LPs), investor relations professionals, and compliance officers.
          </p>
          <RequestDemoButton>
            <MoveRight color={"#ffffff"} />
          </RequestDemoButton>
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

export default Hero;
