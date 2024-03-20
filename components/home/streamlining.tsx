import React from "react";
import Image from "next/image";

const Streamlining = () => {
  return (
    <div
      className={
        "mx-auto mt-20 grid max-w-[1440px] items-center gap-4 px-3.5 md:grid-cols-2 lg:mt-40 lg:gap-12"
      }
    >
      <div className={"space-y-6 md:order-1"}>
        <h4 className={"text-teal-700"}>FOR INVESTOR RELATIONS TEAMS</h4>
        <h2 className={"text-3xl font-bold"}>
          Streamlining Investor Relations
        </h2>
        <p className={"text-lg text-blue-gray-300"}>
          Manage subscriptions, track status, monitor portfolios, access
          documents, and streamline communication with LP’s - all in one place
        </p>
      </div>
      <div>
        <Image
          src={"/stream.png"}
          alt={"Investwell"}
          className={"h-auto w-full"}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default Streamlining;
