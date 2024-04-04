import React from "react";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";

import { Outlet } from "react-router-dom";
import { Toaster } from "./Components/ui/toaster";
const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;
