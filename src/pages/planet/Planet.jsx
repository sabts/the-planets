import Menu from "../../components/menu/Menu";
import PlanetCard from "../../components/planet-card/PlanetCard";


const Planet = ({ planetName }) => {
  return (
    <>
      <Menu/>
      <PlanetCard planetName={planetName}/>
    </>
  );
};

export default Planet;
