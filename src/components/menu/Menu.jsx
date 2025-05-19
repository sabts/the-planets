import { Link } from "react-router-dom";
import { StyledMenu, StyledPlanetCircle } from "./styles-menu";

const Menu = ({planets}) => {
  return <StyledMenu>
      <StyledPlanetCircle  $color={planets.mercury.color}/>
      <Link key="mercury" to={planets.mercury.link}>
        {planets.mercury.name}
      </Link>
      <Link key="venus" to={planets.venus.link}>
        {planets.venus.name}
      </Link>
      <Link key="earth" to={planets.earth.link}>
        {planets.earth.name}
      </Link>
      <Link key="mars" to={planets.mars.link}>
        {planets.mars.name}
      </Link>
      <Link key="jupiter" to={planets.jupiter.link}>
        {planets.jupiter.name}
      </Link>
      <Link key="saturn" to={planets.saturn.link}>
        {planets.saturn.name}
      </Link>
      <Link key="uranus" to={planets.uranus.link}>
        {planets.uranus.name}
      </Link>
      <Link key="neptune" to={planets.neptune.link}>
        {planets.neptune.name}
      </Link>
    </StyledMenu>
};
export default Menu;
