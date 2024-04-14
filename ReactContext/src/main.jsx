import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { CounterProvider } from "./Context/Counter.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
