import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Chai from "./chai.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App1210828031d3u1dedu2i</h1>
    </div>
  );
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_parent",
  },
  children: "Click me to visit google",
};

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Click on me
  </a>
);

const anotherUser = "James";
const ReactTypeElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click me to visit google",
  anotherUser, // this has to be evaluated expression
  anotherUser
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <MyApp></MyApp> */}
    {/* {MyApp()} */}
    {/* {anotherElement}
    <br />
    {ReactTypeElement} */}
    {ReactTypeElement}
  </React.StrictMode>
);

// the reason, why an object cannot be rendered directly because we are using the custom render method of react, and it expects it own type of argumnets and not objects, but our custom function does
// we can pass an HTML element to it

// After the react tree is rendered, then the variables are injected into the function

// babel injects code created through React.createElement
