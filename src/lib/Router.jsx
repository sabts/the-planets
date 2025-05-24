import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Planet from "../pages/planet/Planet";
import { MENU_CONTENT } from "../constants/menu-content";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {MENU_CONTENT.map((planet) => (
        <Route
        key={planet.id}
        path={planet.link}
        element={<Planet planetName={planet.name.toLowerCase()} />}
        />
      ))}
    </Routes>
  );
};

//useParams() preguntar
//<Route path="/:planet" element={<Planet />} />

export default Router;
