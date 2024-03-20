import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className={"mx-auto max-w-[1440px] px-3.5 py-8 md:py-20"}>
      <div className={"grid items-center gap-4 md:grid-cols-2"}>
        <div className={"space-y-6"}>
          <h1 className={"text-4xl font-bold md:text-5xl"}>
            Simplify Your Fund Management.
          </h1>
          <p className={"text-lg md:mt-6"}>
            Investwell makes alternative investments understandable and
            accessible for everyone involved, giving power to limited partners
            (LPs), investor relations professionals, and compliance officers.
          </p>
          <Button className={"flex items-center gap-3"}>
            Request Demo
            <MoveRight color={"#ffffff"} />
          </Button>
        </div>
        <div>
          <img
            src={"/hero-image.svg"}
            alt={"Investwell"}
            className={"h-auto w-full"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;