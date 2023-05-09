import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Layout from "./components/Layout";
import Characters from "./views/Characters/Characters";
import Episodes from "./views/Episodes/Episodes";
import Locations from "./views/Locations/Locations";
import { CHARACTERS, EPISODES, HOME, LOCATIONS } from "./const/routes";
import DetailsHome from "./views/Home/DetailsHome/DetailsHome";
import DetailsCharacters from"./views/Characters/DetailsCharacters/DetailsCharacters"
import DetailsLocations from "./views/Locations/DetailsLocations/DetailsLocations";
import DetailsEpisodes from "./views/Episodes/DetailsEpisodes/DetailsEpisodes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={HOME}>
            <Route index element={<Home />} />
            <Route path=":id" element={<DetailsHome />} />
          </Route>
          <Route path={CHARACTERS}>
            <Route index element={<Characters />} />
            <Route path=":id" element={<DetailsCharacters />} />
          </Route>
          <Route path={EPISODES}>
            <Route index element={<Episodes />} />
            <Route path=":id" element={<DetailsEpisodes/>}/>
          </Route>
          <Route path={LOCATIONS}>
            <Route index element={<Locations />} />
            <Route path=":id" element={<DetailsLocations />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
