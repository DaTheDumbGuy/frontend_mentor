import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <nav>
      <Link to="/frontend_mentor/projects/RecipePage">Recipe</Link>
      <Link to="/frontend_mentor/projects/StatsPreviewCard">
        Stats Preview Card
      </Link>
    </nav>
  );
}
