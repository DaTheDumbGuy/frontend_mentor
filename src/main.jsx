import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import "./index.css";
import ProfilesPage from "./pages/ProfilesPage";
import ProjectWrapper from "./ProjectWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
  },
  {
    path: "/frontend_mentor",
    element: <HomePage />,
  },
  {
    path: "/frontend_mentor/projects",
    element: <ProfilesPage />,
  },
  {
    path: "/frontend_mentor/projects/:projectName",
    element: <ProjectWrapper />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
