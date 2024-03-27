import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./Layout.jsx";
import "./index.css";

// Router
// creating a browseer router to enanble client side routing for app
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Contact, About, ErrorPage, User, Github } from "./index.js";
import { githubInfoLoader } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // passing the main component, that needs to be rendered as an element of the route
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//       // child routes can also have their own layout. All of these will be injected into outlet
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="contact" element={<Contact></Contact>}></Route>
      <Route path="user/:id" element={<User />}></Route>
      <Route
        path="github"
        loader={githubInfoLoader}
        element={<Github />}></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// The routing is as followis
// Everything is inside home : even though it is present at the same level in the folder structure, it is considered base
