import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="p-8">
      <ul className="flex font-semibold sm:text-sm md:gap-x-8">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all ${
                isActive
                  ? "text-slate-950  border-b-4 border-b-gray-950 "
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
                  ? "text-slate-950 border-b-4 border-b-gray-950"
                  : " text-slate-400"
              }`
            }>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition-all ${
                isActive
                  ? "text-slate-950 border-b-4 border-b-gray-950"
                  : " text-slate-400"
              }`
            }>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technologies"
            className={({ isActive }) =>
              `transition-all ${
                isActive
                  ? "text-slate-950 border-b-4 border-b-gray-950"
                  : " text-slate-400"
              }`
            }>
            Technologies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
