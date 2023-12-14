import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppOld from "./AppOld.jsx";
import AppTest from "./AppTest.jsx";
import AppTestNoLayout from "./AppTestNoLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppTestNoLayout />
  </React.StrictMode>,
);
