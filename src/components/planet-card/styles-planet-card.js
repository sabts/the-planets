import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Link } from "react-router-dom";

const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 1.5rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 5rem;
  }
`;

const StyledTabPosition = styled.div`
  @media screen and (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: center;
    position: relative;
    top: -10%;
  }
  @media screen and (min-width: 1024px) {
    grid-column: 3;
    grid-row: 2;
    width: 350px;
    height: 180px;
    left: -12%;
  }
`;

const StyledPhotoMainContainer = styled.div`
  width: ${({ $planetSize }) => `${$planetSize}px`};
  height: ${({ $planetSize }) => `${$planetSize}px`};
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
  }

  @media screen and (min-width: 1024px) {
    grid-column: 1 /3;
    grid-row: 1 / 3;
    justify-self: center;
    align-self: center;
    width: ${({ $planetSize }) => `${$planetSize * 3}px`};
    height: ${({ $planetSize }) => `${$planetSize * 3}px`};
  }
  &::after {
    width: 170px;
    height: 170px;
  }
`;

const StyledPlanetPhoto = styled.img`
  width: ${({ $planetSize }) => `${$planetSize}px`};
  height: ${({ $planetSize }) => `${$planetSize}px`};
  display: block;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    width: ${({ $planetSize }) => `${$planetSize * 3}px`};
    height: ${({ $planetSize }) => `${$planetSize * 3}px`};
  }
`;

const StyledPlanetInfoContainer = styled.div`
  color: #fff;
  text-align: center;
  @media screen and (min-width: 768px) {
    grid-column: 1;
    grid-row: 2 /3;
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    grid-column: 3;
    grid-row: 1;
    justify-self: center;
    align-self: center;
  }
`;

const StyledPlanetNameTitle = styled.h2`
  font-family: "Antonio", sans-serif;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    font-size: 5rem;
  }
`;

const StyledInfoText = styled.p`
  font-family: "League Spartan", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
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

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
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
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 1rem;
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
    align-items: flex-start;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    width: 255px;
    height: 128px;
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
  line-height: normal;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
    letter-spacing: -1.5px;
    text-transform: uppercase;
  }
`;

export {
  StyledMainContainer,
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
