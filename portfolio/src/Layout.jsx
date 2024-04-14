import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { Outlet } from "react-router-dom";
import { Toaster } from "./Components/ui/toaster";

import { ThemeProvider } from "./Context/ThemeContext";
const Layout = () => {
  const [themeMode, setThemeMode] = useState("light");
  const darkMode = () => {
    setThemeMode("dark");
  };
  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <div>
      <ReactLenis root>
        <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
          <Header></Header>
          <Navigation></Navigation>
          <Outlet></Outlet>
          <Toaster></Toaster>
        </ThemeProvider>
      </ReactLenis>
    </div>
  );
};

export default Layout;
