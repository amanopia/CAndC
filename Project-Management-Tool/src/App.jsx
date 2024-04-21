import React from "react";
import SideBar from "./components/SideBar/SideBar";
import NewProjects from "./components/NewProjects/NewProjects";
const App = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <NewProjects></NewProjects>
    </div>
  );
};

export default App;
