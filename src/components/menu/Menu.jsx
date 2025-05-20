import { Link } from "react-router-dom";
import {
  StyledHeader,
  StyledMenu,
  StyledPlanetCircle,
  StyledPlanetItem,
} from "./styles-menu";
import { useState } from "react";
import { MENU_CONTENT } from "../../constants/menu_content";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <StyledHeader>
        <h1>THE PLANETS</h1>
        <img
          src="/assets/icon-hamburger.svg"
          onClick={() => setShowMenu(!showMenu)}
        />
      </StyledHeader>
      <nav>
        {showMenu && (
          <StyledMenu>
            {MENU_CONTENT.map(menu => (
              <StyledPlanetItem key={menu.id}>
                <StyledPlanetCircle $color={menu.color} />
                <Link to={menu.link} onClick={() => setShowMenu(!showMenu)}>
                  {menu.name}
                </Link>
              </StyledPlanetItem>
            ))}
          </StyledMenu>
        )}
      </nav>
    </div>
  );
};
export default Menu;
