// Import necessary dependencies from React and react-router-dom
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import NavigationBar from './NavigationBar/NavigationBar';

let navEntries = [
  { path: "/app", element: <App />, name: "App" },
  { path: "/lol", element: <App />, name: "lol" }];


const createAppLayout = (navEntries) => {
  return (
    <>
      <NavigationBar navEntries={navEntries} />
      <Outlet />
    </>
  );
}
const appLayout = createAppLayout(navEntries);
const router = createBrowserRouter([
  {
    element: appLayout,
    errorElement: <h1>404</h1>,
    children: navEntries
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


