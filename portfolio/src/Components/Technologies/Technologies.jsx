import React from "react";

import { frontendSkills, backendSkills, otherSkills } from "./data.js";

const Technologies = () => {
  return (
    <div className="px-8 ">
      {/* FRONTEND SKILLS */}
      <button className="font-semibold text-sm transition-all mb-4 px-4 py-2 border-2 text-white bg-black rounded-md hover:invert">
        Frontend
      </button>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap mb-10">
        {frontendSkills.map(({ img, toolName, toolSite, alias }) => (
          <div
            className=" w-full h-max rounded-md mb-2 flex flex-col  p-4 border-2 sm:flex-row sm:h-20 sm:w-max sm:px-4 sm:items-center "
            key={toolName}>
            <img src={img} alt={toolName} className="h-14 w-14 object-cover" />
            <div className=" w-full mt-5  sm:ml-5 sm:mt-0">
              <p className="font-semibold">{toolName}</p>
              <a
                href={toolSite}
                className="text-slate-400 text-xs transition-all hover:text-black">
                {alias}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* BACKEND SKILLS */}
      <button className="font-semibold text-sm transition-all mb-4 px-4 py-2 border-2 text-white bg-black rounded-md hover:invert">
        Backend
      </button>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap mb-10">
        {backendSkills.map(({ img, toolName, toolSite, alias }) => (
          <div
            className=" w-full h-max rounded-md mb-2 p-4 flex flex-col 
            border-2 sm:flex-row sm:h-20 sm:w-max sm:px-4  sm:items-center "
            key={toolName}>
            <img src={img} alt={toolName} className="h-14 w-14 object-cover" />
            <div className=" w-full mt-5 sm:ml-5 sm:mt-0">
              <p className="font-semibold">{toolName}</p>
              <a
                href={toolSite}
                className="text-slate-400 text-xs transition-all hover:text-black">
                {alias}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Testing and Version Control Skills */}
      <button className="font-semibold text-sm transition-all mb-4 px-4 py-2 border-2 text-white bg-black rounded-md hover:invert">
        Testing and version control
      </button>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
        {otherSkills.map(({ img, toolName, toolSite, alias }) => (
          <div
            className=" w-full h-max p-4 rounded-md mb-2 flex flex-col sm:items-center sm:flex-row sm:h-20 sm:px-4 sm:w-max border-2 "
            key={toolName}>
            <img src={img} alt={toolName} className="h-14 w-14 object-cover" />
            <div className=" w-full mt-5 sm:ml-5 sm:mt-0">
              <p className="font-semibold">{toolName}</p>
              <a
                href={toolSite}
                className="text-slate-400 text-xs transition-all hover:text-black">
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
