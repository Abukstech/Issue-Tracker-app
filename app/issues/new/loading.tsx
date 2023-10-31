import { Skeleton } from "@/app/components";
const LoadingNewIssues = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <Skeleton height={"15rem"} />
    </div>
  );
};

export default LoadingNewIssues;
