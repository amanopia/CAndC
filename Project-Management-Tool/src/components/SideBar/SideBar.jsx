import React from "react";
import "./SideBar.css";
import text from "../../assets/text.png";
import book from "../../assets/book.png";

// CUSTOM COMPONENTS
import Button from "../Button";

const SideBar = ({ onAddHandleProject, projectsNum, projects }) => {
  return (
    <aside className="p-6 border-r-2 border-stone-200 md:w-80 h-screen">
      <div className="flex items-center gap-1 border-b-2 pb-5 mb-10">
        <img src={text} alt="" className="md:h-10" />
        <h1 className="heading md:text-2xl font-bold">Coretan</h1>
      </div>

      <Button onClick={onAddHandleProject} projectsNum={projectsNum}>
        Add project
      </Button>

      <div className="mt-10">
        <ul className="flex flex-col gap-2">
          {projects.map((element) => {
            return (
              <li
                className="texxt-sm font-semibold px-4 py-2 rounded-md bg-stone-50 cursor-pointer hover:bg-stone-100 hover:border-l-black hover:border-l-4 hover:rounded-l-none transition-all "
                key={element._id}>
                {element.title}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
