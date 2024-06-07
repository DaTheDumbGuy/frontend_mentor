import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const StatsPreviewCard = lazy(() =>
  import("./pages/StatsPreviewCardComponent/StatsPreviewCard")
);
const NotFoundPage = lazy(() => import("./pages/Error404/NotFoundPage"));
const RecipePage = lazy(() => import("./pages/Recipe/Recipe"));

const projectComponents = {
  StatsPreviewCard: StatsPreviewCard,
  RecipePage: RecipePage,
};

function ProjectWrapper() {
  const { projectName } = useParams();

  function getProjectComponent() {
    return projectComponents[projectName] || NotFoundPage; // Handle non-existent projects
  }

  const ProjectComponent = getProjectComponent();

  return (
    <Suspense fallback={<div>Loading Project...</div>}>
      {ProjectComponent && <ProjectComponent />}
    </Suspense>
  );
}

export default ProjectWrapper;
