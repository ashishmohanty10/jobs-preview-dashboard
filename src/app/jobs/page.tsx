import AboutJob from "@/components/AboutJob";
import Company from "@/components/Company";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

import {
  Eye,
  MessageSquare,
  PencilIcon,
  Trash2Icon,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

const applicantsData = [
  {
    icon: <UsersRound size={20} />,
    label: "Applicants",
    number: 400,
  },
  {
    icon: <UserRoundCheck size={20} />,
    label: "Matches",
    number: 100,
  },
  {
    icon: <MessageSquare size={20} />,
    label: "Messages",
    number: 147,
  },
  {
    icon: <Eye size={20} />,
    label: "Views",
    number: 800,
  },
];

export default function JobsPage() {
  return (
    <>
      <div className="xl:grid xl:grid-cols-12">
        <div className=" col-span-8 mb-10 xl:mb-0">
          <HeroSection />
          <SkillsSection />
          <AboutJob />
          <Company />
        </div>

        <div className="col-span-4 px-10 py-10 border h-full w-full flex  flex-col items-center gap-y-6">
          <div className="flex space-x-4 w-full justify-center">
            <button className="flex items-center justify-center h-[46px] w-[172px] gap-[10px]  bg-[#FEF4F2] rounded-lg text-base font-medium border border-[#DC4A2D]">
              <Trash2Icon size={20} className="text-[#DC4A2D]" />
              <span className="text-[#DC4A2D]">Delete</span>
            </button>

            <button className=" flex justify-center h-[46px] w-[172px]  gap-[10px] items-center rounded-lg bg-[#DC4A2D] text-white text-base font-medium">
              <PencilIcon size={20} />
              <span>Edit</span>
            </button>
          </div>

          <div className="w-full px-10 ">
            {applicantsData.map((data, idx) => (
              <div
                key={idx}
                className="flex justify-between w-full border-b border-[#E7E7E7] items-center py-4 "
              >
                <div className="flex font-medium items-center gap-x-[10px]">
                  <div>{data.icon}</div>
                  <p>{data.label}</p>
                </div>

                <div className="font-semibold text-xl">
                  <p>{data.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
