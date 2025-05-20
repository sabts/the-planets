import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledHeader = styled.div`
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
`;

const StyledMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 50px;
  font-size: 0.9375rem;
  font-weight: 700;
  padding-inline: 16px;
  color: #fff;
  text-transform: uppercase;
  background-color: ${COLORS.background};
  width: 100%;
  height: 100%;
   z-index: 10;
`;

const StyledhamburgerMenu = styled.div`
  display: block;
  width: 24px;
  height: 3px;
  background-color: #fff;
  box-shadow: 0px 10px #fff, 0px 20px #fff;
`;

const StyledPlanetItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledPlanetCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$color};
`;
export {
  StyledHeader,
  StyledhamburgerMenu,
  StyledMenu,
  StyledPlanetItem,
  StyledPlanetCircle,
};
