import React from "react";

import {
  frontendSkills,
  backendSkills,
  otherSkills,
  apiStandards,
} from "./data.js";

const Technologies = () => {
  return (
    <div className="px-8 mb-14">
      {/* FRONTEND SKILLS */}
      <button className="font-semibold text-sm transition-all mb-4 px-4 py-2 border-2 text-white bg-black rounded-md hover:invert lg:text-sm 2xl:text-xl dark:border-slate-500">
        Frontend
      </button>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap mb-10">
        {frontendSkills.map(({ img, toolName, toolSite, alias }) => (
          <div
            className=" w-full h-max rounded-md mb-2 flex flex-col p-4 border-2 sm:flex-row sm:h-20 sm:w-max sm:px-4 sm:items-center lg:h-28 lg:px-6  "
            key={toolName}>
            <img
              src={img}
              alt={toolName}
              className="h-14 w-14 object-cover lg:h-16 lg:w-16 2xl:h-20 2xl:w-20"
            />
            <div className=" w-full mt-5  sm:ml-5 sm:mt-0">
              <p className="font-semibold lg:text-base 2xl:text-lg">
                {toolName}
              </p>
              <a
                href={toolSite}
                className="text-slate-400 text-xs transition-all hover:text-black lg:text-sm 2xl:text-lg dark:hover:text-white">
                {alias}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* BACKEND SKILLS */}
      <button className="font-semibold text-sm transition-all mb-4 px-4 py-2 border-2 text-white bg-black rounded-md hover:invert lg:text-sm 2xl:text-xl dark:border-slate-500">
        Backend
      </button>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap mb-10 ">
        {backendSkills.map(({ img, toolName, toolSite, alias }) => (
          <div
            className=" w-full h-max rounded-md mb-2 p-4 flex flex-col 
            border-2 sm:flex-row sm:h-20 sm:w-max sm:px-4  sm:items-center lg:h-28 lg:px-6"
            key={toolName}>
            <img
              src={img}
              alt={toolName}
              className="h-14 w-14 object-cover lg:h-16 lg:w-16 2xl:h-20 2xl:w-20"
            />
            <div className=" w-full mt-5 sm:ml-5 sm:mt-0">
              <p className="font-semibold lg:text-base 2xl:text-lg">
                {toolName}
              </p>
              <a
                href={toolSite}
                className="text-slate-400 text-xs transition-all hover:text-black lg:text-sm 2xl:text-lg dark:hover:text-white">
                {alias}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Testing and Version Control Skills */}
      <button className="font-semibold text-sm transition-all mb-4 px-4 py-2 border-2 text-white bg-black rounded-md hover:invert lg:text-sm 2xl:text-xl dark:border-slate-500">
        Testing and version control
      </button>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-10">
        {otherSkills.map(({ img, toolName, toolSite, alias }) => (
          <div
            className=" w-full h-max p-4 rounded-md mb-2 flex flex-col sm:items-center sm:flex-row sm:h-20 sm:px-4 sm:w-max border-2 lg:h-28 lg:px-6"
            key={toolName}>
            <img
              src={img}
              alt={toolName}
              className="h-14 w-14 object-cover lg:h-16 lg:w-16 2xl:h-20 2xl:w-20"
            />
            <div className=" w-full mt-5  sm:ml-5 sm:mt-0">
              <p className="font-semibold lg:text-base 2xl:text-lg">
                {toolName}
              </p>
              <a
                href={toolSite}
                className="text-slate-400 text-xs transition-all hover:text-black lg:text-sm 2xl:text-lg dark:hover:text-white">
                {alias}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* API STANDARDS */}
      <button className="font-semibold text-sm transition-all mb-4 px-4 py-2 border-2 text-white bg-black rounded-md hover:invert lg:text-sm 2xl:text-xl dark:border-slate-500">
        Api Standards
      </button>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
        {apiStandards.map(({ img, toolName, toolSite, alias }) => (
          <div
            className=" w-full h-max p-4 rounded-md mb-2 flex flex-col sm:items-center sm:flex-row sm:h-20 sm:px-4 sm:w-max border-2 lg:h-28 lg:px-6"
            key={toolName}>
            <img
              src={img}
              alt={toolName}
              className="h-14 w-14 object-cover lg:h-16 lg:w-16 2xl:h-20 2xl:w-20"
            />
            <div className=" w-full mt-5  sm:ml-5 sm:mt-0">
              <p className="font-semibold lg:text-base 2xl:text-lg">
                {toolName}
              </p>
              <a
                href={toolSite}
                className="text-slate-400 text-xs transition-all hover:text-black lg:text-sm 2xl:text-lg dark:hover:text-white">
                {alias}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
