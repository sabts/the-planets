import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Link } from "react-router-dom";

const StyledPlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 1.5rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
  }
`;

const StyledTabPosition = styled.div`
  @media screen and (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: center;
  }
`;

const StyledPhotoMainContainer = styled.div`
  width: ${({ $planetSize }) => $planetSize}px ; 
  height: ${({ $planetSize }) => $planetSize}px;
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

  @media screen and (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    justify-self: center; 
    align-self: center;
    width: ${({ $planetSize }) => $planetSize}px ; 
  height: ${({ $planetSize }) => $planetSize}px;
  }
`;

const StyledPlanetPhoto = styled.img`
  width: ${({ $planetSize }) => `${$planetSize * 2}px`}; 
  height: ${({ $planetSize }) => `${$planetSize * 2}px`}; 
  display: block;
  object-fit: contain;
`;

const StyledPlanetInfoContainer = styled.div`
  color: #fff;
  text-align: center;
  @media screen and (min-width: 768px) {
    grid-column: 1 / 1;
    grid-row: 2 / 3;
    text-align: left;
  }
`;

const StyledPlanetNameTitle = styled.h2`
  font-family: "Antonio", sans-serif;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const StyledInfoText = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
`;

const StyledSourceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
  gap: 0.4rem;

  @media screen and (min-width: 768px) {
    justify-content: left;
    text-align: left;
  }
`;

const StyledSource = styled.span`
  font-family: "League Spartan", sans-serif;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5625rem;
`;

const StyledLinkSource = styled(Link)`
  font-family: "League Spartan", sans-serif;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5625rem;
  text-decoration-line: underline;
`;

const StyledExtraInfoDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1rem;
    grid-column: 1 / 3;
    grid-row: 3 / 3;
  }
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

  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 164px;
    height: 88px;
  }
`;

const StyledExtraInfoCaption = styled.span`
  font-family: "League Spartan", sans-serif;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.0454rem;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;


const StyledExtraInfoContent = styled.span`
  font-family: "Antonio", sans-serif;
  font-size: 1.25rem;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

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
  StyledExtraInfoContent,
  StyledTabPosition,
  StyledExtraInfoDiv,
};
