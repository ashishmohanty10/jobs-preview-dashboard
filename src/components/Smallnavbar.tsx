"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const Smallnavbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-[67px] w-full pl-[80px] py-2 flex items-center justify-start shadow-md  gap-x-[72px] text-lg">
      <Link
        href="/"
        className={cn(
          ` list-none relative  font-medium flex justify-center items-center ${
            pathname === "/"
              ? "text-[#DC4A2D] font-semibold  h-[67px] flex-col "
              : "text-[#888888"
          } `
        )}
      >
        <p> Job Preview</p>
        {pathname === "/" && (
          <div className="w-[65px] h-[2px] bg-[#DC4A2D] absolute bottom-0"></div>
        )}
      </Link>

      <Link
        href="/jobs/applicants"
        className={cn(
          ` list-none relative  font-medium flex justify-center items-center ${
            pathname === "/jobs/applicants"
              ? "text-[#DC4A2D] font-semibold  h-[67px] flex-col "
              : "text-[#888888"
          } `
        )}
      >
        <p> Applicants</p>
        {pathname === "/jobs/applicants" && (
          <div className="w-[65px] h-[2px] bg-[#DC4A2D] absolute bottom-0"></div>
        )}
      </Link>

      <Link
        href="/jobs/match"
        className={cn(
          ` list-none relative  font-medium flex justify-center items-center ${
            pathname === "/jobs/match"
              ? "text-[#DC4A2D] font-semibold  h-[67px] flex-col "
              : "text-[#888888"
          } `
        )}
      >
        <p> Match</p>
        {pathname === "/jobs/match" && (
          <div className="w-[65px] h-[2px] bg-[#DC4A2D] absolute bottom-0"></div>
        )}
      </Link>

      <Link
        href="/jobs/message"
        className={cn(
          ` list-none relative  font-medium flex justify-center items-center ${
            pathname === "/jobs/message"
              ? "text-[#DC4A2D] font-semibold  h-[67px] flex-col"
              : "text-[#888888"
          } `
        )}
      >
        <p> Message</p>
        {pathname === "/jobs/message" && (
          <div className="w-[65px] h-[2px] bg-[#DC4A2D] absolute bottom-0"></div>
        )}
      </Link>
    </div>
  );
};

export default Smallnavbar;
