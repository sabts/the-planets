import { useState } from "react";
import { PLANETS_INFO } from "../../constants/planets_info";

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
        <div>
          <img
            src={planetSelected.overview.image}
            alt={`${planetSelected.displayName} overview`}
          />
          <p>{planetSelected.overview.info}</p>
        </div>
      )}

      {activeSection === "internalStructure" && (
        <div>
          <img
            src={planetSelected.internalStructure.image}
            alt={`${planetSelected.displayName} internal structure`}
          />
          <p>{planetSelectede.internalStructure.info}</p>
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

      <section>
        <div>
          <span>ROTATION TIME</span>
          <span>{planetSelected.rotationTime}</span>
        </div>
        <div>
          <span>REVOLUTION TIME</span>
          <span>{planetSelected.revolutionTime}</span>
        </div>
        <div>
          <span>RADIUS</span>
          <span>{planetSelected.radius}</span>
        </div>
        <div>
          <span>AVERAGE TEMP.</span>
          <span>{planetSelected.averageTemp}</span>
        </div>
        <div>
          <a href={planetSelected.wikiUrl}>Source: Wikipedia</a>
        </div>
      </section>
    </>
  );
};

const findPlanet = planetSelected => {
  return PLANETS_INFO.find(planet => planetSelected === planet.name);
};

export default PlanetCard;
