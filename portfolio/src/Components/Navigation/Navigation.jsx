import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [active, setActive] = useState(true);

  // This will set the value of active to false, hence removing the active color from it when any of the navigation items are clicked
  function setFalse() {
    setActive(false);
  }

  return (
    <nav className="p-8">
      <ul className="flex font-semibold sm:text-sm md:gap-x-8 lg:text-base 2xl:text-lg">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all ${
                isActive || active
                  ? "text-slate-950  border-b-4 border-b-gray-950 dark:text-white dark:border-b-white"
                  : " text-slate-400"
              }`
            }>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `transition-all ${
                isActive
                  ? "text-slate-950 border-b-4 border-b-gray-950 dark:text-white dark:border-b-white"
                  : " text-slate-400"
              }`
            }
            onClick={setFalse}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `transition-all ${
                isActive
                  ? "text-slate-950 border-b-4 border-b-gray-950 dark:text-white dark:border-b-white"
                  : " text-slate-400"
              }`
            }
            onClick={setFalse}>
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technologies"
            className={({ isActive }) =>
              `transition-all ${
                isActive
                  ? "text-slate-950 border-b-4 border-b-gray-950 dark:text-white dark:border-b-white"
                  : " text-slate-400"
              }`
            }
            onClick={setFalse}>
            Technologies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
