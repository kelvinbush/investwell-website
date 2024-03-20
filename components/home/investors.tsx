import React from "react";
import Image from "next/image";

const Investors = () => {
  return (
    <div
      className={
        "mx-auto mt-20 grid max-w-[1440px] items-center gap-4 px-3.5 md:grid-cols-2 lg:mt-32 lg:gap-12"
      }
    >
      <div className={"space-y-6"}>
        <h4 className={"text-teal-700"}>FOR INVESTORS</h4>
        <h2 className={"text-3xl font-bold"}>Empowering Limited Partners</h2>
        <p className={"text-lg text-blue-gray-300"}>
          Self-onboard & manage subscriptions seamlessly. Stay informed with
          unified view of portfolios, side letters, reports and other documents.
        </p>
      </div>
      <div>
        <Image
          src={"/investors.png"}
          alt={"Investwell"}
          className={"h-auto w-full"}
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default Investors;
