import React from "react";
import Login from "./Login";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";

export default function Body() {
  const appRouter = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Body />,
    // },
    {
      path: "/browse",
      element: <Browser />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/header",
      element: <Header />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
