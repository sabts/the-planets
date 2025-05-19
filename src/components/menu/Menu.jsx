import { Link } from "react-router-dom";
import { StyledHeader, StyledMenu, StyledPlanetCircle, StyledPlanetItem } from "./styles-menu";
import { useState } from "react";

const Menu = ({planets}) => {
  const [showMenu, setShowMenu] = useState(false);
  return   <div>
    <StyledHeader>
    <h1>THE PLANETS</h1> 
    <img src="/assets/icon-hamburger.svg"  onClick={() => setShowMenu(!showMenu)}/>
    </StyledHeader>
    {showMenu && (
        <StyledMenu>
          <StyledPlanetItem>
            <StyledPlanetCircle $color={planets.mercury.color} />
            <Link to={planets.mercury.link}>
              {planets.mercury.name}
            </Link>
          </StyledPlanetItem>

          <StyledPlanetItem>
            <StyledPlanetCircle $color={planets.venus.color} />
            <Link to={planets.venus.link}>
              {planets.venus.name}
            </Link>
          </StyledPlanetItem>

          <StyledPlanetItem>
            <StyledPlanetCircle $color={planets.earth.color} />
            <Link to={planets.earth.link}>
              {planets.earth.name}
            </Link>
          </StyledPlanetItem>

          <StyledPlanetItem>
            <StyledPlanetCircle $color={planets.mars.color} />
            <Link to={planets.mars.link}>
              {planets.mars.name}
            </Link>
          </StyledPlanetItem>

          <StyledPlanetItem>
            <StyledPlanetCircle $color={planets.jupiter.color} />
            <Link to={planets.jupiter.link}>
              {planets.jupiter.name}
            </Link>
          </StyledPlanetItem>

          <StyledPlanetItem>
            <StyledPlanetCircle $color={planets.saturn.color} />
            <Link to={planets.saturn.link}>
              {planets.saturn.name}
            </Link>
          </StyledPlanetItem>

          <StyledPlanetItem>
            <StyledPlanetCircle $color={planets.uranus.color} />
            <Link to={planets.uranus.link}>
              {planets.uranus.name}
            </Link>
          </StyledPlanetItem>

          <StyledPlanetItem>
            <StyledPlanetCircle $color={planets.neptune.color} />
            <Link to={planets.neptune.link}>
              {planets.neptune.name}
            </Link>
          </StyledPlanetItem>
        </StyledMenu>
      )}
</div>}
export default Menu;
