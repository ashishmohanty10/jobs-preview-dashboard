import React from "react";
import JobsPage from "./jobs/page";
import Smallnavbar from "@/components/Smallnavbar";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div>
      <Smallnavbar />
      <JobsPage />
    </div>
  );
}
