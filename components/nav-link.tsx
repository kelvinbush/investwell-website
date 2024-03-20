import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  isActive: boolean;
  title: string;
  onClick?: () => void;
}

const NavLink = ({ href, isActive, title, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block border-teal-700 p-1.5 text-sm font-semibold text-blue-gray-500 transition-all duration-200 hover:border-b hover:text-teal-700",
        isActive && "border-b text-teal-700",
      )}
    >
      {title}
    </Link>
  );
};

export default NavLink;
