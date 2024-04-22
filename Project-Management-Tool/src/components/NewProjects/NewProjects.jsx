import React from "react";
import Input from "../Input/Input";
import "./NewProjects.css";

import { useRef } from "react";

import calen from "../../assets/date.png";
import desc from "../../assets/description.png";
import titleImg from "../../assets/title.png";

const NewProjects = ({ onHandleSaveProject, setUndefined }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const date = new Date();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim === ""
    ) {
    }
    onHandleSaveProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="p-6 h-screen w-full">
      <div className="md:text-base font-semibold border-b-2 pb-5 pt-4">
        {date.toDateString()}
      </div>
      <div className="flex items-center justify-between  mt-10 mb-10">
        <h1 className="md:text-3xl font-semibold">New Project</h1>
        <div className="flex flex-row gap-4">
          <button
            className=" bg-red-500 px-4 py-2  text-white rounded-lg transition-all hover:bg-red-600"
            onClick={() => setUndefined()}>
            Cancel
          </button>
          <button
            className="btn-save px-4 py-2 text-white rounded-lg transition-all hover:bg-[#266bd3fa]"
            onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <Input
        isTextArea={false}
        label={"Title"}
        image={titleImg}
        ref={title}
        type="text"
      />

      <Input
        isTextArea={true}
        label={"Description"}
        image={desc}
        ref={description}
        type={"text"}
      />
      <Input
        isTextArea={false}
        label={"Date"}
        image={calen}
        ref={dueDate}
        type={"date"}
      />
    </div>
  );
};

export default NewProjects;
