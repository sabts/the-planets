import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledPlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

//cada planeta tiene un tamaño
const StyledPlanetPhoto = styled.img`
  width: 111px;
  height: 111px;
`;

const StyledPlanetInfoContainer = styled.div`
  color: #fff;
  text-align: center;
`;

const StyledInfoText = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
`;

const StyledExtraInfobox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  background-color: ${COLORS.background};
  color: #fff;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.727px;
  text-transform: uppercase;
`;

export {
  StyledPlanetContainer,
  StyledPlanetPhoto,
  StyledPlanetInfoContainer,
  StyledInfoText,
  StyledExtraInfobox,
};
