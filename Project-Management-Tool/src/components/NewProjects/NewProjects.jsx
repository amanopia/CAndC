import React from "react";
import Input from "../Input/Input";
import "./NewProjects.css";

import calen from "../../assets/date.png";
import desc from "../../assets/description.png";
import title from "../../assets/title.png";

const NewProjects = () => {
  const date = new Date();
  console.log(date);

  return (
    <div className="p-6 h-screen w-full">
      <div className="md:text-base font-semibold border-b-2 pb-5 pt-4">
        {date.toDateString()}
      </div>
      <div className="flex items-center justify-between  mt-10 mb-10">
        <h1 className="md:text-3xl font-semibold">New Project</h1>
        <div className="flex flex-row gap-4">
          <button className=" bg-red-500 px-4 py-2  text-white rounded-lg transition-all hover:bg-red-600">
            Cancel
          </button>
          <button className="btn-save px-4 py-2 text-white rounded-lg transition-all hover:bg-[#266bd3fa]">
            Save
          </button>
        </div>
      </div>
      <Input isTextArea={false} label={"Title"} image={title} />
      <Input isTextArea={true} label={"Description"} image={desc} />
      <Input isTextArea={false} label={"Date"} image={calen} />
    </div>
  );
};

export default NewProjects;
