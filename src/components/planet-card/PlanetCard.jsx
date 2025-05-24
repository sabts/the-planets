import { useState } from "react";
import { PLANETS_INFO } from "../../constants/planets-info"
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
import { TABS_INFO } from "../../constants/tabs";

const PlanetCard = ({ planetName }) => {
  const [activeTab, setActiveTab] = useState(TABS_INFO.OVERVIEW);
  const planetInfo = PLANETS_INFO[planetName]
  return (
    <>
   <Tabs
  activeTab={activeTab}
  setActiveTab={setActiveTab}
  planetColor={planetInfo.color}
/>

{activeTab !== TABS_INFO.SURFACE && (
  <StyledPlanetContainer>
    <StyledPhotoMainContainer>
      <StyledPlanetPhoto
        src={planetInfo.images[activeTab]}
        $planetSize={planetInfo.size}
        alt=""
      />
    </StyledPhotoMainContainer>
    <StyledPlanetInfoContainer>
      <StyledPlanetNameTitle>{planetInfo.name}</StyledPlanetNameTitle>
      <StyledInfoText>{planetInfo.texts[activeTab]}</StyledInfoText>
    </StyledPlanetInfoContainer>
  </StyledPlanetContainer>
)}

{activeTab === TABS_INFO.SURFACE && (
  <StyledPlanetContainer>
    <StyledPhotoMainContainer $planetLocation={planetInfo.images[2].geology}>
      <StyledPlanetPhoto
        src={planetInfo.images[2].planet} // <- y acá
        $planetSize={planetInfo.size}
        alt=""
      />
    </StyledPhotoMainContainer>
    <StyledPlanetInfoContainer>
      <StyledPlanetNameTitle>{planetInfo.name}</StyledPlanetNameTitle>
      <StyledInfoText>{planetInfo.texts[2]}</StyledInfoText>
    </StyledPlanetInfoContainer>
  </StyledPlanetContainer>
)}
     
      <StyledSourceContainer>
        <StyledSource>Source:</StyledSource>
        <StyledLinkSource href={planetInfo.wikiUrl}>
          Wikipedia
        </StyledLinkSource>
      </StyledSourceContainer>

      <StyledPlanetContainer>
        <StyledExtraInfobox>
          <StyledExtraInfoCaption>ROTATION TIME</StyledExtraInfoCaption>
          <span>{planetInfo.rotationTime}</span>
        </StyledExtraInfobox>
        <StyledExtraInfobox>
          <StyledExtraInfoCaption>REVOLUTION TIME</StyledExtraInfoCaption>
          <span>{planetInfo.revolutionTime}</span>
        </StyledExtraInfobox>
        <StyledExtraInfobox>
          <StyledExtraInfoCaption>RADIUS</StyledExtraInfoCaption>
          <span>{planetInfo.radius}</span>
        </StyledExtraInfobox>
        <StyledExtraInfobox>
          <StyledExtraInfoCaption>AVERAGE TEMP.</StyledExtraInfoCaption>
          <span>{planetInfo.averageTemp}</span>
        </StyledExtraInfobox>
      </StyledPlanetContainer>
    </>
  );
};

export default PlanetCard;
