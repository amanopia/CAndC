import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
// React uses the layout as base and only changes the things thaat comes in beetween it
const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* // Here all the data comes in, only the header and
      footer remain static */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
