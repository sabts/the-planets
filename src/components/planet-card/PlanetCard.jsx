import { useState } from "react";
import { PLANETS_INFO } from "../../constants/planets-info";
import {
  StyledExtraInfobox,
  StyledExtraInfoCaption,
  StyledInfoText,
  StyledLinkSource,
  StyledPhotoMainContainer,
  StyledPlanetContainer,
  StyledPlanetInfoContainer,
  StyledPlanetNameTitle,
  StyledPlanetPhoto,
  StyledSource,
  StyledSourceContainer,
} from "./styles-planet-card";
import Tabs from "../tabs/tabs";

const PlanetCard = ({ planet }) => {
  const [activeTab, setActiveTab] = useState(0);
  const planetSelected = findPlanet(planet);
  return (
    <>
    <Tabs
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    planetColor={planetSelected.color}
    />

      {activeTab !== 2 && (
        <StyledPlanetContainer>
          <StyledPhotoMainContainer>
          <StyledPlanetPhoto
            src={planetSelected.image[activeTab]}
            $planetSize={planetSelected.size}
            alt=""
          />
          </StyledPhotoMainContainer>
          <StyledPlanetInfoContainer>
            <StyledPlanetNameTitle>
              {planetSelected.displayName}
            </StyledPlanetNameTitle>
            <StyledInfoText>{planetSelected.overview.info}</StyledInfoText>
          </StyledPlanetInfoContainer>
        </StyledPlanetContainer>
      )}

      {activeSection === "internalStructure" && (
        <StyledPlanetContainer>
              <StyledPhotoMainContainer>
          <StyledPlanetPhoto
            src={planetSelected.internalStructure.image}
            $planetSize={planetSelected.size}
            alt={`${planetSelected.displayName} internal structure`}
          />
          </StyledPhotoMainContainer>
          <StyledPlanetInfoContainer>
            <StyledPlanetNameTitle>
              {planetSelected.displayName}
            </StyledPlanetNameTitle>
            <StyledInfoText>
              {planetSelected.internalStructure.info}
            </StyledInfoText>
          </StyledPlanetInfoContainer>
        </StyledPlanetContainer>
      )}

      {activeSection === "surfaceGeology" && (
        <StyledPlanetContainer>
          <StyledPhotoMainContainer
            $planetLocation={planetSelected.surfaceGeology.image.geology}
          >
            <StyledPlanetPhoto
              src={planetSelected.surfaceGeology.image.planet}
              $planetSize={planetSelected.size}
              alt={`${planetSelected.displayName} surface geology`}
            />
          </StyledPhotoMainContainer>
          <StyledPlanetInfoContainer>
            <StyledPlanetNameTitle>
              {planetSelected.displayName}
            </StyledPlanetNameTitle>
            <StyledInfoText>
              {planetSelected.surfaceGeology.info}
            </StyledInfoText>
          </StyledPlanetInfoContainer>
        </StyledPlanetContainer>
      )}

      <StyledSourceContainer>
        <StyledSource>Source:</StyledSource>
        <StyledLinkSource href={planetSelected.wikiUrl}>
          Wikipedia
        </StyledLinkSource>
      </StyledSourceContainer>

      <StyledPlanetContainer>
        <StyledExtraInfobox>
          <StyledExtraInfoCaption>ROTATION TIME</StyledExtraInfoCaption>
          <span>{planetSelected.rotationTime}</span>
        </StyledExtraInfobox>
        <StyledExtraInfobox>
          <StyledExtraInfoCaption>REVOLUTION TIME</StyledExtraInfoCaption>
          <span>{planetSelected.revolutionTime}</span>
        </StyledExtraInfobox>
        <StyledExtraInfobox>
          <StyledExtraInfoCaption>RADIUS</StyledExtraInfoCaption>
          <span>{planetSelected.radius}</span>
        </StyledExtraInfobox>
        <StyledExtraInfobox>
          <StyledExtraInfoCaption>AVERAGE TEMP.</StyledExtraInfoCaption>
          <span>{planetSelected.averageTemp}</span>
        </StyledExtraInfobox>
      </StyledPlanetContainer>
    </>
  );
};

const findPlanet = planetSelected => {
  return PLANETS_INFO.find(planet => planetSelected === planet.name);
};

export default PlanetCard;
