import React from "react";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Fund = () => {
  return (
    <div
      className={
        "mx-auto mt-20 flex max-w-[1440px] flex-col items-center space-y-6 rounded bg-blue-gray-700 px-3.5 py-20 text-center text-background lg:mt-32"
      }
    >
      <h3 className={"text-2xl font-semibold md:text-4xl"}>
        Fund management questions? We&apos;re here.
      </h3>
      <p className={"md:text-2xl"}>
        Streamline, empower, succeed. Unlock efficient fund management today.
      </p>
      <Button
        className={"flex items-center gap-3 bg-teal-500 text-center text-white"}
      >
        Request Demo
        <MoveRight color={"#ffffff"} />
      </Button>
    </div>
  );
};

export default Fund;
