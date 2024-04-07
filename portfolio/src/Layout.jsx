import React from "react";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { Outlet } from "react-router-dom";
import { Toaster } from "./Components/ui/toaster";
const Layout = () => {
  return (
    <div>
      <ReactLenis root>
        <Header></Header>
        <Navigation></Navigation>
        <Outlet></Outlet>
        <Toaster></Toaster>
      </ReactLenis>
    </div>
  );
};

export default Layout;
