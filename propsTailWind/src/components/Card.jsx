import React from "react";

function Card({ userName, src, alt, jobDescrciption = "Good hooman" }) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-4">
      <img
        src={`${src}&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60`}
        alt={alt}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white p-2">{userName}</h1>
        <p className="mt-2 text-sm text-gray-300 p-2">
          {jobDescrciption || "Good hooman"}
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white p-2">
          View Profile →
        </button>
      </div>
    </div>
  );
}

export default Card;
