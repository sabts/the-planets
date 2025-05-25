import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledHeader = styled.div`
  font-family: 'Antonio', sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  font-size: 0.8rem;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-inline: 16px;
  background-color: ${COLORS.background};

  @media screen and (min-width: 768px) {
    gap: 0;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
  gap: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  padding: 1rem 2rem; 
  }
`;

const StyledMenu = styled.ul`
font-family: 'League Spartan', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 50px;  
  font-size: 1rem;
  font-weight: 700;
  padding-top: 2rem;
  padding-inline: 1rem;
  color: #fff;
  text-transform: uppercase;
  background-color: ${COLORS.background};

  @media screen and (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
    gap: 24px;
    width: auto;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;
    width: auto;
  }
`;

const StyledhamburgerMenu = styled.img`
  opacity: ${({ $isOpen }) => ($isOpen ? 0.5 : 1)};
`;


const StyledPlanetItem = styled.li`
 position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 70px;
    text-align: center;
    &::before{
    content: "";
    position: absolute;
    top: -300%;
    left: 0;
    height: 5px;
    width: 100%;
    background-color: transparent;
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    background-color: ${({ $color }) => $color};
  }
  }
`;

const StyledPlanetCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$color};

  @media screen and (min-width: 768px) {
   display: none;
  }
`;
export {
  StyledHeader,
  StyledhamburgerMenu,
  StyledMenu,
  StyledPlanetItem,
  StyledPlanetCircle,
};
