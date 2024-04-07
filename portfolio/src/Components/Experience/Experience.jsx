import React from "react";

import civ from "../../assets/civica_logo.jfif";
import dxc from "../../assets/dxc.png";

import "./Experience.css";

const Experience = () => {
  return (
    <div className="px-8">
      {/* COMPANY 1 */}
      <div className="flex flex-col items-stretch items-center">
        <div className="flex flex-col justify-center container w-80 border-2 p-4 rounded-2xl mb-8 ml-0 lg:w-96 ">
          {/* CONTAINS LOGO AND WORK PROFILE */}
          <div className="flex gap-4 items-center">
            <img src={civ} alt="logo1" className="h-12 rounded-full lg:h-14" />
            <div className="flex flex-col">
              <p className="font-semibold lg:text-lg xl:text-xl">
                Graduate Trainee
              </p>
              <a className="font-semibold text-sm text-slate-400 lg:text-base xl:text-lg">
                Civica
              </a>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-400 lg:text-sm">
            April 2023 - July 2023
          </p>
        </div>
        {/* Company 1 DESCRIPTION */}
        <ul className="text-sm flex flex-col gap-3 ml-5 list-disc lg:text-base xl:text-xl">
          <li>
            Developed feature-rich CRUD applications using ASP.NET in
            conjunction with Entity Framework and dependency injection, that
            interact with a SQL database
          </li>

          <li>
            Developed APIs for interacting with ASP.NET applications and
            implemented CRUD functionality
          </li>
          <li>
            Implemented various design patterns, such as Repository pattern and
            Dependency Injection, to ensure modular and maintainable code.
            Utilized object-oriented programming principles to create reusable
            components and promote code efficiency
          </li>
        </ul>
      </div>
      {/* COMPANY 2 */}
      <div>
        <div className="container w-80 border-2 p-4 rounded-2xl mt-10 mb-8 ml-0">
          {/* CONTAINS LOGO AND WORK PROFILE */}
          <div className="flex gap-4 items-center">
            <img
              src={dxc}
              alt="logo1"
              className="h-12 w-12 object-cover rounded-full lg:h-14 lg:w-14"
            />
            <div className="flex flex-col">
              <p className="font-semibold lg:text-lg xl:text-xl">QA Trainee</p>
              <a className="font-semibold text-sm text-slate-400 lg:text-base xl:text-lg">
                DXC Technology
              </a>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-400 lg:text-sm">
            June 2022 - July 2022
          </p>
        </div>
        {/* Company 1 DESCRIPTION */}
        <ul className="text-sm flex flex-col gap-3 ml-5 list-disc lg:text-base xl:text-xl">
          <li>
            Performed tests to check the functionality of different components
            of web applications using tools such as Selenium and Cucumber
          </li>
          <li>
            Wrote Java automated tests to check application features by
            automating the browser through Selenium Web drivers such as Chrome
            Driver and Internet Explorer Driver
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
