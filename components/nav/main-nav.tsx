"use client";
import React from "react";
import Link from "next/link";
import NavLink from "@/components/nav/nav-link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RequestDemoButton from "@/components/ui/request-demo.button";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Limited Partners",
    href: "/limited-partners",
  },
  {
    title: "Secondary",
    href: "/secondary",
  },
];

const MainNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={"sticky top-0 z-10 border-b border-black bg-white"}>
      <div className={"mx-auto max-w-[1440px] bg-white p-3.5"}>
        <nav className={"flex items-center justify-between"}>
          <div className={"flex items-center gap-3 "}>
            <div className={"md:hidden"}>
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                  <Menu
                    color={"#151c1f"}
                    className={"cursor-pointer"}
                    onClick={() => setOpen((prev) => !prev)}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex w-56 flex-col gap-5 p-4">
                  {links.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      title={link.title}
                      isActive={pathname === link.href}
                      onClick={() => setOpen(false)}
                    />
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link href={"/"} className={"text-2xl font-bold"}>
              Investwell
            </Link>
          </div>
          <ul className={"hidden items-center gap-3 md:flex"}>
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                title={link.title}
                isActive={pathname === link.href}
              />
            ))}
          </ul>
          <RequestDemoButton />
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
