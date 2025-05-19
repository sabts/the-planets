import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Planet from "../pages/planet/Planet";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planets/:name" element={<Planet />} />
    </Routes>
  );
};

export default Router;