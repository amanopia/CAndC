import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//create root creates a DOM, and compares the main DOM and its own DOMM, and only re-renders the things that have changed
// browser on the other hand, repaints the whole DOM which is called page reload

// bheind the scene, react uses fiber algo to update the virtual DOM

// when web-page renders for the first time, only the button renders, but it is not clickable, because the javascript hasn't arrived yet. This is called hydration

// reconciliation algorithm compares the two trees which are DOM tree and the Virtual DOM tree that is created by React.createRoot
