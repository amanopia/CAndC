import React from "react";
import create from "../../assets/create.png";

// CUSTOM COMPONENTS
import Button from "../Button";
const NoProjects = ({ onAddHandleProject }) => {
  return (
    <div className="flex flex-col items-center mx-auto md:w-80 p-6 gap-8">
      <h1 className="text-3xl font-semibold">No projects.</h1>
      <img
        src={create}
        alt="create-project"
        className="object-cover h-20 w-20"
      />
      <Button onClick={onAddHandleProject}>Create new</Button>
    </div>
  );
};

export default NoProjects;
