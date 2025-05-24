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

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = window.innerWidth < 768;

  return (
    <div>
      <StyledHeader>
      <Link to="/" onClick={() => setShowMenu(false)}>
        <h1 >THE PLANETS</h1>
        </Link>
        
      {isMobile && (
          <StyledhamburgerMenu
            src="/assets/icon-hamburger.svg"
            onClick={() => setShowMenu(!showMenu)}
            $isOpen={showMenu}
          />
        )}
    </StyledHeader> 
      <nav>
        {(isMobile && showMenu) || !isMobile ? (
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
        ) : null}
      </nav>
    </div>
  );
};

export default Menu;
