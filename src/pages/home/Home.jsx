import Menu from "../../components/menu/Menu";
import {MENU_CONTENT} from "../../constants//menu-content"
import { StyledAllPlanetsImg, StyledMainContainer } from "./styles-home";

const Home = () => {
  return (
    <>
     <Menu planets={MENU_CONTENT} />
     
    <StyledMainContainer>
      <StyledAllPlanetsImg  src="/assets/all-planets.png" alt="All Planets" />
    </StyledMainContainer>
    </>
  );
};

export default Home;
