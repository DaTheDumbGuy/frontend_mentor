import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/frontend_mentor/",
    element: <HomePage />,
  },
  {
    path: "/frontend_mentor/profile_page",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
