import React from "react";
import Image from "next/image";

const LpDirect = () => {
  return (
    <div
      className={
        "mx-auto mt-20 grid max-w-[1440px] items-center gap-4 px-3.5 md:grid-cols-2 lg:mt-32 lg:gap-12"
      }
    >
      <div className={"space-y-6"}>
        <h4 className={"text-teal-700"}>FOR COMPLIANCE TEAMS</h4>
        <h2 className={"text-3xl font-bold"}>Direct Communication</h2>
        <p className={"text-lg text-blue-gray-300"}>
          Talk directly to fund managers. Ask questions, share insights, get
          answers - all securely in one place
        </p>
      </div>
      <div>
        <Image
          src={"/direct.png"}
          alt={"Investwell"}
          className={"h-auto w-full"}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default LpDirect;
