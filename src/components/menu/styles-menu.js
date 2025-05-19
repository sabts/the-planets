import styled from "styled-components";
import {COLORS} from "../../styles/colors"

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  font-size: 0.8rem;
  color: #FFF;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-inline: 16px;
  margin-bottom: 4rem;
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap:50px;
  font-size: 0.9375rem;
  font-weight: 700;
  padding-inline: 16px;
  color: #FFF;
  text-transform: uppercase;
`;

const StyledhamburgerMenu = styled.div `
  display: block;
  width: 24px;
  height: 3px;
  background-color: #FFF;
  box-shadow: 0px 10px #FFF, 0px 20px #FFF

`

const StyledPlanetItem = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const StyledPlanetCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;
export { StyledHeader, StyledhamburgerMenu, StyledMenu, StyledPlanetItem, StyledPlanetCircle}