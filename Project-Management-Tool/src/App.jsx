import React from "react";

import { useState } from "react";

import SideBar from "./components/SideBar/SideBar";
import NewProjects from "./components/NewProjects/NewProjects";
import NoProjects from "./components/NoProjects/NoProjects";

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // used to select the ID of the project or null if we want to add a new project. Undefinedd if we did not want to select a project
    projects: [],
  });

  function handleStartAddProject() {
    console.log(projectsState);
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        _id: projectId,
      };
      console.log(prevState);
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: projectId,
      };
    });
  }

  function handleSetUndefined() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProjects
        onHandleSaveProject={handleAddProject}
        setUndefined={handleSetUndefined}></NewProjects>
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjects onAddHandleProject={handleStartAddProject}></NoProjects>
    );
  }

  return (
    <div className="flex">
      <SideBar
        projects={projectsState.projects}
        onAddHandleProject={handleStartAddProject}
        projectsNum={projectsState.projects.length}></SideBar>
      {content}
    </div>
  );
};

export default App;
