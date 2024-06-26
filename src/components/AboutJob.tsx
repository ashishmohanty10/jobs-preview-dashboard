import React from "react";

const jobDetails = [
  {
    tasks: [
      "1. Handle the UI/UX research design",
      "2. Work on researching on latest web applications designs & trends",
      "3. Work on conceptualizing and visualizing",
      "4. Work on creating graphics content and other graphic related works",
    ],
  },
  {
    category: "Benefits",
    details: ["Health insurance", "Provident Fund"],
  },
  {
    category: "Schedule",
    details: ["Day shift"],
  },
  {
    category: "Supplemental pay types",
    details: ["Performance bonus", "Yearly bonus"],
  },
  {
    category: "Work Location",
    details: ["In person"],
  },
];

export default function AboutJob() {
  return (
    <div className="py-6 pl-[40px] md:pl-[80px] shadow">
      <div className="flex flex-col gap-y-2">
        <p className="font-medium text-sm text-[#6E6D6D]">About the job</p>

        <div>
          {jobDetails.map((data, index) => (
            <div key={index}>
              <ul>
                {data.tasks &&
                  data.tasks.map((task, idx) => <li key={idx}>{task}</li>)}
              </ul>
              <h2>{data.category}</h2>
              <div className="pl-4">
                {data.details &&
                  data.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
