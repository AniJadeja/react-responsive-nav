// Import necessary dependencies from React and react-router-dom
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ReactDOM from 'react-dom/client';

import NavigationBar from "./NavigationBar/NavigationBar";

const createAppLayout = (navEntries) => {
  return (
    <>
      <NavigationBar navEntries={navEntries} />
      <Outlet />
    </>
  );
}


export const createResponsiveNavigationBar = (navEntries) => {
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

}




