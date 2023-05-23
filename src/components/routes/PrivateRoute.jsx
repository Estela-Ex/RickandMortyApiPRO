import { useAuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { HOME, UNAUTHORIZE} from "../../const/routes";

export default function PrivateRoute({allowedRoles}) {
  const { user } = useAuthContext();
  const location = useLocation();


  return allowedRoles?.includes(user?.role) ? (
    <Outlet/>
  ) : user ? (
      <Navigate to={UNAUTHORIZE} state={{from: location}} replace/>
  ) : (
      <Navigate to={HOME} state={{from: location}} replace/>
  ) 
}
