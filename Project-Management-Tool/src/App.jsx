import React from "react";

import { useState } from "react";

import SideBar from "./components/SideBar/SideBar";
import NewProjects from "./components/NewProjects/NewProjects";
import NoProjects from "./components/NoProjects/NoProjects";
import ShowProject from "./components/ShowProject/ShowProject";

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // used to select the ID of the project or null if we want to add a new project. Undefinedd if we did not want to select a project
    projects: [],
  });

  function deleteProject(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
        projects: prev.projects.filter((project) => project._id !== id),
      };
    });
  }
  function getProjectIdOnClick(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
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
      const projectId = prevState.projects.length + 1;
      const newProject = {
        ...projectData,
        _id: prevState.projects.length + 1,
      };
      console.log(prevState);
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: projectId,
      };
    });
  }

  function handleonCancel() {
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
        onCancel={handleonCancel}></NewProjects>
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjects onAddHandleProject={handleStartAddProject}></NoProjects>
    );
  } else {
    content = (
      <ShowProject
        projects={projectsState.projects}
        id={projectsState.selectedProjectId}
        onDeleteProject={deleteProject}></ShowProject>
    );
  }

  return (
    <div className="flex">
      <SideBar
        projects={projectsState.projects}
        onAddHandleProject={handleStartAddProject}
        projectsnum={projectsState.projects.length}
        onClickGetProjectId={getProjectIdOnClick}
        selectedProjectId={projectsState.selectedProjectId}></SideBar>
      {content}
    </div>
  );
};

export default App;
