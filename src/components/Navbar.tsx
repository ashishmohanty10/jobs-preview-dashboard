"use client";

import { Briefcase, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/logo.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import Breifcase from "../../public/briefcase-02.svg";
import Message from "../../public/message.svg";
import CoinsHand from "../../public/coins-hand.svg";
import Bell from "../../public/bell-02.svg";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className=" flex justify-between items-center shadow-md px-12 py-4 h-[80px] sticky top-0 bg-white z-20">
      <div className="bg-[#E7E7E7]  w-[100px] h-[60px] flex justify-center items-center">
        <h1 className="font-bold text-xl text-[#DC4A2D]">Logo</h1>
      </div>
      <ul className="flex px-2 py-3 border border-[#D1D1D1] rounded-full gap-x-16 h-[66px] text-base font-medium text-[#3D3D3D]">
        <Link href={"/"} className="flex space-x-2 items-center">
          <div
            className={cn(
              ` px-3 py-2 flex items-center justify-center space-x-2 font-medium text-xl ${
                pathname === "/" || pathname.startsWith("/jobs")
                  ? "bg-[#DC4A2D] rounded-full text-white border-2 border-[#FCB4A5]"
                  : "text-[#B0B0B0]"
              }`
            )}
          >
            <Briefcase
              size={24}
              className={cn(
                `${
                  pathname !== "/" || pathname.startsWith("/jobs")
                    ? "text-[#B0B0B0]"
                    : ""
                }`
              )}
            />
            <span>{"Jobs"}</span>
          </div>
        </Link>

        <Link href={"/messages"} className="flex space-x-2 items-center">
          <div
            className={cn(
              ` px-3 py-2 flex items-center justify-center space-x-2 font-medium text-xl ${
                pathname === "/messages"
                  ? "bg-[#DC4A2D] rounded-full text-white border-2 border-[#FCB4A5]"
                  : "text-[#B0B0B0]"
              }`
            )}
          >
            <div className="relative">
              <Image src={Message} alt="Bell icons" className="size-6" />
              <div className=" w-1.5 h-1.5 bg-[#DC4A2D] rounded-full absolute top-0  -right-0"></div>
            </div>
            <span>{"Messages"}</span>
          </div>
        </Link>

        <Link href={"/payments"} className="flex space-x-2 items-center">
          <div
            className={cn(
              ` px-3 py-2 flex items-center justify-center space-x-2 font-medium text-xl ${
                pathname === "/payments"
                  ? "bg-[#DC4A2D] rounded-full text-white border-2 border-[#FCB4A5]"
                  : "text-[#B0B0B0]"
              }`
            )}
          >
            <Image src={CoinsHand} className=" size-6" alt="Link Icons" />
            <span>{"Payments"}</span>
          </div>
        </Link>
      </ul>

      <div className="flex items-center space-x-2">
        <div className="relative">
          <Image src={Bell} alt="Bell icons" className="size-6" />
          <div className=" w-1.5 h-1.5 bg-[#DC4A2D] rounded-full absolute top-0 right-1"></div>
        </div>

        <div className="flex items-center">
          <Image src={Logo} alt="Company Logo" />
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
