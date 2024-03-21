import React from "react";
import Image from "next/image";

const LpUnleash = () => {
  return (
    <div
      className={
        "mx-auto mt-20 grid max-w-[1440px] items-center gap-4 px-3.5 md:grid-cols-2 lg:mt-40 lg:gap-12"
      }
    >
      <div className={"space-y-6 md:order-1"}>
        <h4 className={"uppercase text-teal-700"}>
          Unprecedented Transparency & Access
        </h4>
        <h2 className={"text-3xl font-bold"}>Unleash your Portfolio Power</h2>
        <p className={"text-lg text-blue-gray-300"}>
          Go beyond the surface: Analyze, track, & master your investments.
          Ditch document stress - get instant access & insights. Make smarter
          moves, maximize returns.
        </p>
      </div>
      <div>
        <Image
          src={"/unleash.png"}
          alt={"Investwell"}
          className={"h-auto w-full"}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default LpUnleash;
