import { Link } from "react-router-dom";
import {
  StyledhamburgerMenu,
  StyledHeader,
  StyledMenu,
  StyledPlanetCircle,
  StyledPlanetItem,
} from "./styles-menu";
import { useState } from "react";
import { MENU_CONTENT } from "../../constants/menu-content";
import { useMediaQuery } from "react-responsive";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767  });

  return (
    <div>
    <StyledHeader>
    <Link to="/">
          <h1>THE PLANETS</h1>
        </Link>

      {isMobile ? (
        <StyledhamburgerMenu
          src="/assets/icon-hamburger.svg"
          onClick={() => setShowMenu(!showMenu)}
          $isOpen={showMenu}
        />
      ) : (
        <StyledMenu>
          {MENU_CONTENT.map((menu) => (
            <StyledPlanetItem key={menu.id}>
              <StyledPlanetCircle $color={menu.color} />
              <Link to={menu.link} onClick={() => setShowMenu(false)}>
                {menu.name}
              </Link>
            </StyledPlanetItem>
          ))}
        </StyledMenu>
      )}
    </StyledHeader>

    {isMobile && showMenu && (
      <StyledMenu>
        {MENU_CONTENT.map((menu) => (
          <StyledPlanetItem key={menu.id}>
            <StyledPlanetCircle $color={menu.color} />
            <Link to={menu.link} onClick={() => setShowMenu(false)}>
              {menu.name}
            </Link>
          </StyledPlanetItem>
        ))}
      </StyledMenu>
    )}
  </div>
);
};
export default Menu;
 