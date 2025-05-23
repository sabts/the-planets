import { useState } from "react";
import { PLANETS_INFO } from "../../constants/planets_info";
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
  StyledSectionButton,
  StyledSectionContainer,
  StyledSource,
  StyledSourceContainer,
} from "./styles-planet-card";

const PlanetCard = ({ planet }) => {
  const [activeSection, setActiveSection] = useState("overview");
  const planetSelected = findPlanet(planet);
  return (
    <>
      <StyledSectionContainer>
        <StyledSectionButton
          onClick={() => setActiveSection("overview")}
          $isActive={activeSection === "overview"}
          $planetColor={planetSelected.color}
        >
          OVERVIEW
        </StyledSectionButton>

        <StyledSectionButton
          onClick={() => setActiveSection("internalStructure")}
          $isActive={activeSection === "internalStructure"}
          $planetColor={planetSelected.color}
        >
          STRUCTURE
        </StyledSectionButton>

        <StyledSectionButton
          onClick={() => setActiveSection("surfaceGeology")}
          $isActive={activeSection === "surfaceGeology"}
          $planetColor={planetSelected.color}
        >
          SURFACE
        </StyledSectionButton>
      </StyledSectionContainer>

      {activeSection === "overview" && (
        <StyledPlanetContainer>
          <StyledPlanetPhoto
            src={planetSelected.overview.image}
            $planetSize={planetSelected.size}
            alt={`${planetSelected.displayName} overview`}
          />
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
          <StyledPlanetPhoto
            src={planetSelected.internalStructure.image}
            $planetSize={planetSelected.size}
            alt={`${planetSelected.displayName} internal structure`}
          />
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
