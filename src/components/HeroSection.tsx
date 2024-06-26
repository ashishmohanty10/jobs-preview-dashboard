import Image from "next/image";
import React from "react";
import Coins from "../../public/coins-stacked-03.svg";
import Location from "../../public/marker-pin-01.svg";
import { jobListing } from "@/data";

const HeroSection = () => {
  return (
    <div className="py-6 flex flex-col justify-start gap-y-6 pl-[80px]  shadow">
      <div className="flex gap-x-3 items-center">
        <p className="font-semibold text-4xl">{jobListing.title}</p>
        <div className="text-sm font-medium text-[#888888] flex items-center gap-x-3">
          <div className="size-1 bg-[#D1D1D1] rounded-full"></div>
          <span className="">{jobListing.posted}</span>
        </div>

        <div className="flex items-center gap-x-2 px-2 py-1 bg-green-200 border border-green-400 rounded-full text-sm justify-center">
          <div className="size-1 bg-green-500 rounded-full"></div>
          <span className="text-green-800 font-medium">
            {jobListing.status}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <div className="text-[#5D5D5D] font-medium  flex items-center gap-x-2">
          <Image src={Location} alt="Staked coins" />
          <p className="text-xl">{jobListing.location}</p>
        </div>
        <div className="size-1 bg-[#D1D1D1] rounded-full"></div>
        <div className="text-[#5D5D5D] font-medium  flex items-center gap-x-2">
          <Image src={Coins} alt="Staked coins" />
          <p className="text-xl">{jobListing.salary}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
