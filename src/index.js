// Import necessary dependencies from React and react-router-dom
import React from "react";
import App from "./App";
import './index.css';
import { createResponsiveNavigationBar } from "./ResponsiveDom";

let navEntries = [
  { path: "/app", element: <App />, name: "App" },
  { path: "/lol", element: <App />, name: "lol" }];



createResponsiveNavigationBar(navEntries);