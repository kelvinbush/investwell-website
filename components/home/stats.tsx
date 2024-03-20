import React from "react";

const stats = [
  {
    title: "98%",
    description: "KYC verification accuracy",
  },
  {
    title: "+ 3 hrs",
    description: "Daily time savings",
  },
  {
    title: "< 7 min",
    description: "Average onboarding time",
  },
  {
    title: "99.8%",
    description: "Risk evaluation accuracy",
  },
];

const Stats = () => {
  return (
    <div className={"mx-auto max-w-[1440px] space-y-12 px-3.5"}>
      <h2 className={"text-center text-[32px] leading-[32px]"}>
        Streamlined for accuracy and efficiency
      </h2>
      <div
        className={"grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 lg:gap-20"}
      >
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;

interface StatCardProps {
  title: string;
  description: string;
}

const StatCard = ({ title, description }: StatCardProps) => {
  return (
    <div
      className={
        "flex flex-col justify-between space-y-8 rounded bg-blue-gray-700 p-4 text-background shadow md:p-6"
      }
    >
      <p className={""}>{description}</p>
      <h3
        className={
          "text-2xl font-semibold leading-5 md:text-3xl lg:text-[40px]"
        }
      >
        {title}
      </h3>
    </div>
  );
};
