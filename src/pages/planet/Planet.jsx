import { useState } from "react"
import {PLANETS_INFO} from "../../constants/planets_info"

const Planet = ({planetName}) => {
    const [activeSection, setActiveSection] = useState("overview");
    const planet = PLANETS_INFO[planetName];
    return (
      <>
        <div>
          <span onClick={() => setActiveSection("overview")}>OVERVIEW</span>
          <span onClick={() => setActiveSection("internalStructure")}>STRUCTURE</span>
          <span onClick={() => setActiveSection("surfaceGeology")}>SURFACE</span>
        </div>
  
        {activeSection === "overview" && (
          <div>
            <img
              src={planet.overview.image}
              alt={`${planet.displayName} overview`}
            />
            <p>{planet.overview.info}</p>
          </div>
        )}
  
        {activeSection === "internalStructure" && (
          <div>
            <img
              src={planet.internalStructure.image}
              alt={`${planet.displayName} internal structure`}
            />
            <p>{planet.internalStructure.info}</p>
          </div>
        )}
  
        {activeSection === "surfaceGeology" && (
          <div>
            <img
              src={planet.surfaceGeology.image.geology}
              alt={`${planet.displayName} surface geology`}
            />
            <p>{planet.surfaceGeology.info}</p>
          </div>
        )}
  
        {/* Información adicional */}
        <section>
          <div>
            <span>ROTATION TIME</span>
            <span>{planet.rotationTime}</span>
          </div>
          <div>
            <span>REVOLUTION TIME</span>
            <span>{planet.revolutionTime}</span>
          </div>
          <div>
            <span>RADIUS</span>
            <span>{planet.radius}</span>
          </div>
          <div>
            <span>AVERAGE TEMP.</span>
            <span>{planet.averageTemp}</span>
          </div>
          <div>
            <a href={planet.wikiUrl} target="_blank" rel="noopener noreferrer">
              Source: Wikipedia
            </a>
          </div>
        </section>
      </>
    );
  };
  
  export default Planet;