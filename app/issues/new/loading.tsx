import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssues = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <Skeleton  height={'15rem'}/>
    </div>
  );
};

export default LoadingNewIssues;
