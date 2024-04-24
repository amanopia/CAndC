import React, { useState } from "react";

const ShowProject = ({ projects, id, onDeleteProject }) => {
  console.log(projects, id);
  const selectedProject = projects.filter((project) => project._id === id);
  console.log(selectedProject);

  const date = new Date();

  return (
    <div className="p-6 h-screen w-full">
      <div className="md:text-base font-semibold border-b-2 pb-5 pt-4">
        {date.toDateString()}
      </div>
      <div className="mt-10">
        <h1 className="font-semibold text-4xl">{selectedProject[0].title}</h1>
        <p className="mt-10 text-stone-400 whitespace-pre-wrap">
          {selectedProject[0].description}
        </p>
        <p className="mt-10 text-xs font-semibold text-blue-600 px-4 py-2 rounded-full bg-blue-200 max-w-fit">
          {new Date(selectedProject[0].dueDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <button
        className="mt-10  bg-red-500 px-4 py-2  text-white rounded-lg transition-all hover:bg-red-600"
        onClick={() => onDeleteProject(selectedProject[0]["_id"])}>
        Delete project
      </button>
    </div>
  );
};

export default ShowProject;
