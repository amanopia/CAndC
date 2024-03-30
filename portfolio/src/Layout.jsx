import React from "react";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";

import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
