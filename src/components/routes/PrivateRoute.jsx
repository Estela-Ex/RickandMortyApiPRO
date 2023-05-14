import { useAuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "../../const/routes";

export default function PrivateRoute() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to={HOME} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
