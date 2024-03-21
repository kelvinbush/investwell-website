import React from "react";
import Image from "next/image";

const LpOnboard = () => {
  return (
    <div
      className={
        "mx-auto mt-20 grid max-w-[1440px] items-center gap-4 px-3.5 md:grid-cols-2 lg:mt-32 lg:gap-12"
      }
    >
      <div className={"space-y-6"}>
        <h4 className={"text-teal-700"}>INTEGRATED CONTROL</h4>
        <h2 className={"text-3xl font-bold"}>Onboarding and Subscriptions</h2>
        <p className={"text-lg text-blue-gray-300"}>
          One-stop investment hub: Track, analyze, and manage all your assets.
          Get real-time updates, clear reports and secure documents.
        </p>
      </div>
      <div>
        <Image
          src={"/welcome.png"}
          alt={"Investwell"}
          className={"h-auto w-full"}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default LpOnboard;
