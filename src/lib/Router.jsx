import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Planet from "../pages/planet/Planet";
import { MENU_CONTENT } from "../constants/menu_content";
import { PLANETS_INFO } from "../constants/planets_info";
const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route
        path={"/mercury"}
        element={<Planet planet="mercury" />}
        planet={PLANETS_INFO.name}
      />
      <Route
        path={"/venus"}
        element={<Planet planet="venus" />}
        planet={"venus"}
      />
      <Route
        path={"/earth"}
        element={<Planet planet="earth" />}
        planet={"earth"}
      />
      <Route
        path={"/mars"}
        element={<Planet planet="mars" />}
        planet={"mars"}
      />
      <Route
        path={"/jupiter"}
        element={<Planet planet="jupiter" />}
        planet={"jupiter"}
      />
      <Route
        path={"/saturn"}
        element={<Planet planet="saturn" />}
        planet={"saturn"}
      />
      <Route
        path={"/uranus"}
        element={<Planet planet="uranus" />}
        planet={"uranus"}
      />
      <Route
        path={MENU_CONTENT.neptune}
        element={<Planet planet="neptune" />}
        planet={"neptune"}
      />
    </Routes>
  );
};
//<Route path={MENU_CONTENT.mercury} element={<Planet planet="mercury" />} />;

export default Router;

// <Route path="/planet/:planetName" element={<Planet />} />
