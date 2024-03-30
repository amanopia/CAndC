import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import { About, Technologies, Projects, Experience } from "./index.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path="/about" element={<About></About>}></Route>
      <Route
        path="/technologies"
        element={<Technologies></Technologies>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
      <Route path="/experience" element={<Experience></Experience>}></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
