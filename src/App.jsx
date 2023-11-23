import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./views/Home/Home";
import Layout from "./components/Layout";
import Characters from "./views/Characters/Characters";
import Episodes from "./views/Episodes/Episodes";
import Locations from "./views/Locations/Locations";
import {
  CHARACTERS,
  EPISODES,
  HOME,
  LOCATIONS,
  // UNAUTHORIZE,
} from "./const/routes";
// import DetailsHome from "./views/Home/DetailsHome/DetailsHome";
import DetailsCharacters from "./views/Characters/DetailsCharacters/DetailsCharacters";
import DetailsLocations from "./views/Locations/DetailsLocations/DetailsLocations";
import DetailsEpisodes from "./views/Episodes/DetailsEpisodes/DetailsEpisodes";
import AuthContextProvider from "./context/AuthContext";
import PublicRoute from "../src/components/routes/PublicRoute";
// import PrivateRoute from "../src/components/routes/PrivateRoute";
// import Unauthorize from "./views/Unauthorize/Unauthorize";
// import { roles } from "./const/roles";
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            {/* <Route path={HOME} element={<Home />} /> */}
            <Route element={<Layout />}>
              <Route path={HOME}>
                <Route index element={<Characters />} />
                <Route path=":id" element={<DetailsCharacters />} />
              </Route>
            </Route>
          </Route>
          {/* <Route path={UNAUTHORIZE} element={<Unauthorize />} /> */}
          {/* <Route
            element={
              <PrivateRoute
                allowedRoles={[roles.superAdmin, roles.admin, roles.user]}
              />
            }
          > */}
            <Route element={<Layout />}>
              <Route path={CHARACTERS}>
                <Route index element={<Characters />} />
                <Route path=":id" element={<DetailsCharacters />} />
              </Route>
            </Route>
          {/* </Route> */}
          {/* <Route
            element={
              <PrivateRoute allowedRoles={[roles.superAdmin, roles.admin]} />
            }
          > */}
            <Route element={<Layout />}>
              <Route path={EPISODES}>
                <Route index element={<Episodes />} />
                <Route path=":id" element={<DetailsEpisodes />} />
              </Route>
            </Route>
          {/* </Route> */}
          {/* <Route element={<PrivateRoute allowedRoles={[roles.superAdmin]} />}> */}
            <Route element={<Layout />}>
              <Route path={LOCATIONS}>
                <Route index element={<Locations />} />
                <Route path=":id" element={<DetailsLocations />} />
              </Route>
            </Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
