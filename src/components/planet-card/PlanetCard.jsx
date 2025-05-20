import { useState } from "react";
import { PLANETS_INFO } from "../../constants/planets_info";
import {
  StyledExtraInfobox,
  StyledInfoText,
  StyledPlanetContainer,
  StyledPlanetInfoContainer,
  StyledPlanetPhoto,
} from "./styles-planet-card";

const PlanetCard = ({ planet }) => {
  const [activeSection, setActiveSection] = useState("overview");
  const planetSelected = findPlanet(planet);
  return (
    <>
      <div>
        <span onClick={() => setActiveSection("overview")}>OVERVIEW</span>
        <span onClick={() => setActiveSection("internalStructure")}>
          STRUCTURE
        </span>
        <span onClick={() => setActiveSection("surfaceGeology")}>SURFACE</span>
      </div>

      {activeSection === "overview" && (
        <StyledPlanetContainer>
          <StyledPlanetPhoto
            src={planetSelected.overview.image}
            alt={`${planetSelected.displayName} overview`}
          />
          <StyledPlanetInfoContainer>
            <h2>{planetSelected.displayName}</h2>
            <StyledInfoText>{planetSelected.overview.info}</StyledInfoText>
          </StyledPlanetInfoContainer>
        </StyledPlanetContainer>
      )}

      {activeSection === "internalStructure" && (
        <div>
          <img
            src={planetSelected.internalStructure.image}
            alt={`${planetSelected.displayName} internal structure`}
          />
          <p>{planetSelected.internalStructure.info}</p>
        </div>
      )}

      {activeSection === "surfaceGeology" && (
        <div>
          <img
            src={planetSelected.surfaceGeology.image.geology}
            alt={`${planetSelected.displayName} surface geology`}
          />
          <p>{planetSelected.surfaceGeology.info}</p>
        </div>
      )}
      <div>
        <a href={planetSelected.wikiUrl}>Source: Wikipedia</a>
      </div>
      <section>
        <StyledExtraInfobox>
          <span>ROTATION TIME</span>
          <span>{planetSelected.rotationTime}</span>
        </StyledExtraInfobox>
        <StyledExtraInfobox>
          <span>REVOLUTION TIME</span>
          <span>{planetSelected.revolutionTime}</span>
        </StyledExtraInfobox>
        <StyledExtraInfobox>
          <span>RADIUS</span>
          <span>{planetSelected.radius}</span>
        </StyledExtraInfobox>
        <StyledExtraInfobox>
          <span>AVERAGE TEMP.</span>
          <span>{planetSelected.averageTemp}</span>
        </StyledExtraInfobox>
      </section>
    </>
  );
};

const findPlanet = planetSelected => {
  return PLANETS_INFO.find(planet => planetSelected === planet.name);
};

export default PlanetCard;
