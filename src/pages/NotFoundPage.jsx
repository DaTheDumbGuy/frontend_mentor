import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 not found</h1>
      <Link to="/frontend_mentor">Home from Link</Link>
    </div>
  );
}
