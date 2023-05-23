import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { CHARACTERS } from "../../const/routes";

export default function PublicRoute() {
  const { user } = useAuthContext();
  const location = useLocation();

  if (user) {
    return <Navigate to={CHARACTERS} state={{ from: location }} replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
