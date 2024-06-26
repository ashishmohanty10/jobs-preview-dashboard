import Image from "next/image";
import React from "react";
import figma from "../../public/figma.svg";
import illustrator from "../../public/illustrator.svg";
import xd from "../../public/xd.svg";
import { jobListing } from "@/data";

const SkillsSection = () => {
  return (
    <div className="py-6 pl-[80px] shadow">
      <div className="flex items-start gap-x-16">
        <div className="flex flex-col gap-y-2">
          <p className="text-[#6E6D6D] font-medium text-sm">Skills Required</p>

          <div className="flex items-center px-2 py-1  border border-[#D0D5DD] w-fit rounded-md gap-x-1">
            <Image src={figma} alt="Figma Logo" width={16} height={16} />
            <p className="text-[#344054] font-medium text-xs">
              {jobListing.skillsRequired[0]}
            </p>
          </div>

          <div className="flex items-center px-2 py-1  border border-[#D0D5DD] w-fit rounded-md gap-x-1">
            <Image src={illustrator} alt="Figma Logo" width={16} height={16} />
            <p className="text-[#344054] font-medium text-xs">
              {jobListing.skillsRequired[1]}
            </p>
          </div>

          <div className="flex items-center px-2 py-1  border border-[#D0D5DD] w-fit rounded-md gap-x-1">
            <Image src={xd} alt="Figma Logo" width={16} height={16} />
            <p className="text-[#344054] font-medium text-xs">
              {jobListing.skillsRequired[2]}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-[#6E6D6D] font-medium text-sm">
            Preferred Language
          </p>
          <p className="text-[#3D3D3D] font-semibold text-base">
            {jobListing.preferredLanguage}
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-[#6E6D6D] font-medium text-sm">Type</p>
          <p className="text-[#3D3D3D] font-semibold text-base">
            {jobListing.type}
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <p className="text-[#6E6D6D] font-medium text-sm">
            Years of Experience
          </p>
          <p className="text-[#3D3D3D] font-semibold text-base">
            {jobListing.experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
