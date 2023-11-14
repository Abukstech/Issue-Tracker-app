import React from "react";
import { Skeleton } from "@/app/components";

const IssueFormSkeleton = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <Skeleton height={"15rem"} />
    </div>
  );
};

export default IssueFormSkeleton;
