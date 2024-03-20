import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div
      className={"mt-20 flex  bg-blue-gray-700 py-10 text-[#9CA3AF] lg:mt-32"}
    >
      <div className={"mx-auto max-w-[1440px] px-3.5"}>
        <div
          className={
            "grid gap-4 border-b border-[#9ca3af] py-6 md:grid-cols-2 lg:gap-20"
          }
        >
          <div>
            <h1 className={"text-2xl font-bold text-white"}>Investwell</h1>
            <p className={"mt-4"}>
              Investwell demystifies alternative investments for all
              stakeholders, empowering LPs, investor relations professionals,
              and compliance officers.
            </p>
          </div>
          <div className={"flex flex-col justify-between gap-4 md:flex-row"}>
            <div className={"flex flex-col gap-3"}>
              <h4
                className={
                  "border-b border-teal-500 text-sm font-bold uppercase"
                }
              >
                Useful Links
              </h4>
              <Link href={"/"} className={"text-[#9CA3AF] hover:underline"}>
                Home
              </Link>
              <Link
                href={"/limited-partners"}
                className={"text-[#9CA3AF] hover:underline"}
              >
                Limited Partners
              </Link>
              <Link
                href={"/fund-administrators"}
                className={"text-[#9CA3AF] hover:underline"}
              >
                Fund Administrators
              </Link>
              <Link
                href={"/secondary"}
                className={"text-[#9CA3AF] hover:underline"}
              >
                Secondary
              </Link>
            </div>
            <div className={"flex flex-col gap-2"}>
              <h4
                className={
                  "border-b border-teal-500 text-sm font-bold uppercase"
                }
              >
                Contact Info
              </h4>
              <p>Email: hello@investwell.fr</p>
              <p>Phone: +33766761661</p>
              <p>Address: 41 Rue de l&apos;Alma 92400 Courbevoie</p>
            </div>
          </div>
        </div>
        <div
          className={
            "grid items-center justify-between gap-4 border-b border-[#9ca3af] py-6 md:grid-cols-2"
          }
        >
          <div>
            <h3 className={"mb-2 text-sm font-semibold uppercase"}>
              Subscribe to our newsletter
            </h3>
            <p>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <div className={"flex  items-center gap-4 md:justify-end"}>
            <Input
              type="email"
              placeholder="Enter your email"
              className={"max-w-[300px]"}
            />
            <Button className={"bg-teal-500"}>Subscribe</Button>
          </div>
        </div>
        <div
          className={
            "mt-8 grid items-center justify-between gap-4 md:grid-cols-2"
          }
        >
          <p>&copy; 2024 Investwell SAS. All rights reserved.</p>
          <div className={"flex items-center gap-4 md:justify-end"}>
            <Facebook />
            <Instagram />
            <Twitter />
            <Github />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.51 20 20 15.52 20 10C20 4.48 15.51 0 10 0ZM16.605 4.61C17.8357 6.10931 18.5167 7.98437 18.535 9.924C18.254 9.87 15.434 9.295 12.592 9.653C12.527 9.512 12.472 9.36 12.408 9.208C12.231 8.79105 12.043 8.3789 11.844 7.972C14.989 6.692 16.421 4.848 16.605 4.61ZM10 1.475C12.17 1.475 14.154 2.288 15.662 3.623C15.51 3.839 14.219 5.564 11.182 6.703C9.783 4.133 8.232 2.028 7.993 1.703C8.65086 1.54922 9.32441 1.4727 10 1.475ZM6.367 2.278C7.51144 3.86431 8.56867 5.51175 9.534 7.213C5.542 8.276 2.017 8.253 1.638 8.253C1.91283 6.96013 2.48261 5.74822 3.3029 4.71179C4.12319 3.67537 5.17182 2.84245 6.367 2.278ZM1.453 10.01V9.75C1.823 9.76 5.965 9.815 10.228 8.535C10.478 9.012 10.705 9.5 10.922 9.988C10.813 10.021 10.694 10.053 10.586 10.086C6.182 11.506 3.839 15.389 3.644 15.715C2.23384 14.1495 1.45264 12.117 1.453 10.01ZM10 18.547C8.10143 18.5502 6.25667 17.9164 4.761 16.747C4.913 16.432 6.649 13.091 11.464 11.41C11.486 11.4 11.497 11.4 11.518 11.388C12.3303 13.4834 12.9407 15.6516 13.341 17.863C12.2858 18.317 11.1487 18.5498 10 18.547ZM14.761 17.082C14.675 16.562 14.219 14.067 13.102 10.998C15.781 10.575 18.124 11.269 18.416 11.367C18.2336 12.5201 17.8148 13.623 17.1858 14.6065C16.5568 15.59 15.7313 16.4328 14.761 17.082Z"
                fill="#9CA3AF"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
