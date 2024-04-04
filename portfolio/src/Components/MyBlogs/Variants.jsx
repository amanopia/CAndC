import React from "react";
import { Skeleton } from "../ui/skeleton";

const Variants = () => {
  return (
    <div className="p-3 border-2 rounded-xl mb-5 flex flex-col sm:flex-row sm:items-stretch ">
      <Skeleton className="rounded-lg mb-4 transition-all h-32 w-full sm:h-56 sm:w-64 sm:object-cover sm:mb-0 sm:mr-4 md:h-80 md:w-96"></Skeleton>
      <div className="flex flex-col justify-around">
        <div>
          <Skeleton className="mb-3 font-semibold h-16 w-full sm:h-16 sm:w-80"></Skeleton>
          <Skeleton className="mb-3 font-semibold h-20 w-full sm:h-20 sm:w-80"></Skeleton>
        </div>
        {/* read time and views count */}
        <div className="mt-4 flex justify-between">
          <Skeleton className="h-7 w-10"></Skeleton>
          <Skeleton className="h-7 w-10"></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default Variants;
