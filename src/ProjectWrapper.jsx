import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectWrapper() {
  const { projectName } = useParams();
  const [ProjectComponent, setProjectComponent] = useState(null);

  useEffect(() => {
    const importProject = async () => {
      try {
        const projectModule = await import(`./pages/${projectName}.jsx`);
        setProjectComponent(projectModule.default); // Assuming default export
      } catch (error) {
        console.error("Error importing project:", error);
      }
    };

    importProject();
  }, [projectName]);

  return <>{ProjectComponent}</>;
}

export default ProjectWrapper;
