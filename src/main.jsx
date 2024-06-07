import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import NotFoundPage from "./pages/Error404/NotFoundPage";
import Projects from "./pages/ProjectLinks/Projects";
import ProjectWrapper from "./ProjectWrapper";

const router = createBrowserRouter([
  {
    path: "/frontend_mentor",
    element: <HomePage />,
  },
  {
    path: "/frontend_mentor/projects",
    element: <Projects />,
  },
  {
    path: "/frontend_mentor/projects/:projectName",
    element: <ProjectWrapper />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
