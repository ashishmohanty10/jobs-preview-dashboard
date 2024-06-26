"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Smallnavbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-[67px] w-full pl-[80px] py-2 flex items-center justify-start shadow-md  gap-x-[72px] text-lg">
      <Link
        href="/"
        className={` list-none relative  font-medium flex justify-center items-center ${
          pathname === "/"
            ? "text-[#DC4A2D] font-semibold  h-[67px] flex-col "
            : "text-[#888888"
        } `}
      >
        <p> Job Preview</p>
        {pathname === "/" && (
          <div className="w-[65px] h-[2px] bg-[#DC4A2D] absolute bottom-0"></div>
        )}
      </Link>
      {/* <Link
        href="#"
        className="list-none  text-[#DC4A2D]  font-semibold flex flex-col justify-center items-center relative h-[67px] "
      >
        <p className="">Job Preview</p>
        <div className="w-[65px] h-[2px] bg-[#DC4A2D] absolute bottom-0"></div>
      </Link> */}

      <Link
        href="/jobs/applicants"
        className={` list-none relative  font-medium flex justify-center items-center ${
          pathname === "/jobs/applicants"
            ? "text-[#DC4A2D] font-semibold  h-[67px] flex-col "
            : "text-[#888888"
        } `}
      >
        <p> Applicants</p>
        {pathname === "/jobs/applicants" && (
          <div className="w-[65px] h-[2px] bg-[#DC4A2D] absolute bottom-0"></div>
        )}
      </Link>

      <Link href="#" className="list-none  text-[#888888] font-medium">
        Match
      </Link>

      <Link href="#" className="list-none  text-[#888888] font-medium">
        Message
      </Link>
    </div>
  );
};

export default Smallnavbar;
