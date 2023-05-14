import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { CHARACTERS } from "../../const/routes";

export default function PublicRoute() {
  const { user } = useAuthContext();
  console.log("hola")

  if (user) {
    return <Navigate to={CHARACTERS} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
