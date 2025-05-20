import Menu from "../../components/menu/Menu";
import PlanetCard from "../../components/planet-card/PlanetCard";

const Planet = ({ planet }) => {
  return (
    <>
      <Menu />
      <PlanetCard planet={planet} />
    </>
  );
};

export default Planet;
