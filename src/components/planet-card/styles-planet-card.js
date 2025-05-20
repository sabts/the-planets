import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Link } from "react-router-dom";

const StyledPlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 1.5rem;
`;

const StyledSectionContainer = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
font-size: 0.5625rem;
font-weight: 700;
letter-spacing: 0.1206rem;
color: #fff;
height: 55px;
padding: 1.5rem;
`
const StyledSectionButton = styled.span`
  display: flex;
  align-items: center;
  height: 55px;
  padding: 10px 15px;
  height: strech;
  color: ${({ $isActive }) => ($isActive ? '#fff' : 'rgba(255, 255, 255, 0.2)')};
  border-bottom: 4px solid
    ${({ $isActive, $planetColor }) => ($isActive ? $planetColor : 'transparent')};
  transition: all 0.2s ease-in-out;
`;

//cada planeta tiene un tamaño colocarlo en el objeto $planetSize y un before para el surface $planetLocation
const StyledPlanetPhoto = styled.div`
  width: ${({ $planetSize }) => $planetSize};
  height: ${({ $planetSize }) => $planetSize};
  margin: 50px;
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  display: block;

   &::after {
  content: "";
  position: absolute;
  top: 95%;
  left: 50%;
  width: 70%;
  height: 70%;
  background-image: url(${({ $planetLocation }) => $planetLocation});
  background-size: contain;
  background-repeat: no-repeat; 
  background-position: center;
  transform: translate(-50%, -50%);
  }
`;

const StyledPlanetInfoContainer = styled.div`
  color: #fff;
  text-align: center;
`;

const StyledPlanetNameTitle = styled.h2`
color: #fff;
font-size: 2.5rem;
font-weight: 400;
text-transform: uppercase;
`

const StyledInfoText = styled.p`
  font-size: 0.6875rem;
  font-weight: 400;
  line-height: 1.375rem;
`;

const StyledSourceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px
`

const StyledSource = styled.span`
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5625rem;
`

const StyledLinkSource = styled(Link)`
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.5625rem;
  text-decoration-line: underline;
`

const StyledExtraInfobox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  background-color: ${COLORS.background};
  color: #fff;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.727px;
  text-transform: uppercase;
  width: 327px;
  height: 48px;
  margin-bottom: 8px;
`;

const StyledExtraInfoCaption = styled.span`
color: rgba(255, 255, 255, 0.2);
font-size: 0.5rem;
font-style: normal;
font-weight: 700;
line-height: 1rem;
letter-spacing: 0.0454rem;
text-transform: uppercase;
`

export {
  StyledPlanetContainer,
  StyledSectionContainer,
  StyledSectionButton,
  StyledPlanetPhoto,
  StyledPlanetInfoContainer,
  StyledPlanetNameTitle,
  StyledInfoText,
  StyledSourceContainer,
  StyledSource,
  StyledLinkSource,
  StyledExtraInfobox,
  StyledExtraInfoCaption,
};
