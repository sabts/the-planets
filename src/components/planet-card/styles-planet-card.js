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

const StyledPhotoMainContainer = styled.div`
  width: ${({ $planetSize }) => $planetSize};
  height: ${({ $planetSize }) => $planetSize};
  margin: 50px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 70%;
    width: 100px;
    height: 100px;
    background-image: url(${({ $planetLocation }) => $planetLocation});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateX(-50%); 
  }
`;

const StyledPlanetPhoto = styled.img`
  width: ${({ $planetSize }) => $planetSize};
  height: ${({ $planetSize }) => $planetSize};
  display: block;
  object-fit: contain 
`;

const StyledPlanetInfoContainer = styled.div`
  color: #fff;
  text-align: center;
`;

const StyledPlanetNameTitle = styled.h2`
  font-family: 'Antonio', sans-serif;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const StyledInfoText = styled.p`
font-family: 'League Spartan', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
`;

const StyledSourceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
`;

const StyledSource = styled.span`
 font-family: 'League Spartan', sans-serif;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5625rem;
`;

const StyledLinkSource = styled(Link)`
font-family: 'League Spartan', sans-serif;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5625rem;
  text-decoration-line: underline;
`;

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
font-family: 'League Spartan', sans-serif;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.0454rem;
  text-transform: uppercase;
`;

const StyledExtraInfoContent = styled.span`
font-family: 'Antonio', sans-serif;
font-size: 1.25rem;
`

export {
  StyledPlanetContainer,
  StyledPhotoMainContainer,
  StyledPlanetPhoto,
  StyledPlanetInfoContainer,
  StyledPlanetNameTitle,
  StyledInfoText,
  StyledSourceContainer,
  StyledSource,
  StyledLinkSource,
  StyledExtraInfobox,
  StyledExtraInfoCaption,
  StyledExtraInfoContent
};
