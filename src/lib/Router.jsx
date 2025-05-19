import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Planet from "../pages/planet/Planet";
import {ROUTES} from "./routes"

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.planets.mercury} element={<Planet planet="mercury" />} />
      <Route path={ROUTES.planets.venus} element={<Planet planet="venus" />} />
      <Route path={ROUTES.planets.earth} element={<Planet planet="earth" />} />
      <Route path={ROUTES.planets.mars} element={<Planet planet="mars" />} />
      <Route path={ROUTES.planets.jupiter} element={<Planet planet="jupiter" />} />
      <Route path={ROUTES.planets.saturn} element={<Planet planet="saturn" />} />
      <Route path={ROUTES.planets.uranus} element={<Planet planet="uranus" />} />
      <Route path={ROUTES.planets.neptune} element={<Planet planet="neptune" />} />
    </Routes>
  );
};

export default Router;