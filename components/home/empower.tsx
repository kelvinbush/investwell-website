import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const EList = [
  {
    title: "Investors",
    description:
      "Invest seamlessly with self-onboarding, real-time data access, and a dedicated investor portal",
    href: "/limited-partners",
  },
  {
    title: "Investor Relations",
    description:
      "Streamline communication, reduce response times by over 50%, and ensure secure document management.",
    href: "/fund-administrators",
  },
  {
    title: "Compliance Teams",
    description:
      "Automate KYC/AML processes, simplify ongoing monitoring, and confidently meet regulatory requirements.",
    href: "/secondary",
  },
];

const Empower = () => {
  return (
    <div className={"mt-16 bg-teal-50 py-10"}>
      <div className={"mx-auto max-w-[1440px] px-3.5 text-center"}>
        <h3 className={"text-3xl font-bold"}>
          Empowering Every Role in Your Fund Ecosystem
        </h3>
        <p className={"mt-4 text-lg text-blue-gray-300"}>
          Investwell streamlines the investment journey for everyone involved.
        </p>
        <div className={"mt-12 grid gap-4 md:grid-cols-3"}>
          {EList.map((e, i) => (
            <Ecard key={i} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Empower;

interface EcardProps {
  title: string;
  description: string;
  href: string;
}

const Ecard = ({ title, description, href }: EcardProps) => {
  return (
    <div
      className={
        "flex flex-col justify-between bg-white px-3.5 py-4 text-left shadow-lg"
      }
    >
      <div className={"mb-10"}>
        <h4 className={"text-xl font-semibold"}>{title}</h4>
        <p className={"mt-4 text-sm text-blue-gray-300"}>{description}</p>
      </div>
      <Link
        href={href}
        className={
          "mt-auto flex items-center gap-1 text-sm uppercase text-teal-700 transition-all duration-200 hover:underline"
        }
      >
        Learn More
        <MoveRight color={"#006b61"} size={16} />
      </Link>
    </div>
  );
};
