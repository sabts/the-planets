import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" page="home" />
      <Route path="/mercury" page="mercury" />
    </Routes>
  );
};
export default Router;
