import { useState } from "react";
import { PLANETS_INFO } from "../../constants/planets-info"
import {
  StyledExtraInfobox,
  StyledExtraInfoCaption,
  StyledExtraInfoContent,
  StyledExtraInfoDiv,
  StyledInfoText,
  StyledLinkSource,
  StyledMainContainer,
  StyledPhotoMainContainer,
  StyledPlanetContainer,
  StyledPlanetInfoContainer,
  StyledPlanetNameTitle,
  StyledPlanetPhoto,
  StyledSource,
  StyledSourceContainer,
  StyledTabPosition,
} from "./styles-planet-card";
import Tabs from "../tabs/tabs";
import { TABS_INFO } from "../../constants/tabs";

const PlanetCard = ({ planetName }) => {
  const [activeTab, setActiveTab] = useState(TABS_INFO.OVERVIEW);
  const planetInfo = PLANETS_INFO[planetName]

  return (
    <StyledMainContainer>
    <StyledPlanetContainer>
      <StyledTabPosition>
   <Tabs
  activeTab={activeTab}
  setActiveTab={setActiveTab}
  planetColor={planetInfo.color}
/>
</StyledTabPosition>

{activeTab !== TABS_INFO.SURFACE && (
  <>
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
      <StyledSourceContainer>
        <StyledSource>Source:</StyledSource>
        <StyledLinkSource href={planetInfo.wikiUrl}>
          Wikipedia
        </StyledLinkSource>
        <img src="/assets/icon-source.svg" alt="" />
      </StyledSourceContainer>
    </StyledPlanetInfoContainer>
  </>
)}

{activeTab === TABS_INFO.SURFACE && (
  <>
    <StyledPhotoMainContainer $planetLocation={planetInfo.images[2].geology}>
      <StyledPlanetPhoto
        src={planetInfo.images[2].planet}
        $planetSize={planetInfo.size}
        alt=""
      />
    </StyledPhotoMainContainer>
    <StyledPlanetInfoContainer>
      <StyledPlanetNameTitle>{planetInfo.name}</StyledPlanetNameTitle>
      <StyledInfoText>{planetInfo.texts[2]}</StyledInfoText>
      <StyledSourceContainer>
        <StyledSource>Source:</StyledSource>
        <StyledLinkSource href={planetInfo.wikiUrl}>
          Wikipedia
        </StyledLinkSource>
        <img src="/assets/icon-source.svg" alt="" />
      </StyledSourceContainer>
    </StyledPlanetInfoContainer>
  </>
)}
</StyledPlanetContainer>
      <StyledExtraInfoDiv>
    <StyledExtraInfobox>
      <StyledExtraInfoCaption>ROTATION TIME</StyledExtraInfoCaption>
      <StyledExtraInfoContent>{planetInfo.rotationTime}</StyledExtraInfoContent>
    </StyledExtraInfobox>
    <StyledExtraInfobox>
      <StyledExtraInfoCaption>REVOLUTION TIME</StyledExtraInfoCaption>
      <StyledExtraInfoContent>{planetInfo.revolutionTime}</StyledExtraInfoContent>
    </StyledExtraInfobox>
    <StyledExtraInfobox>
      <StyledExtraInfoCaption>RADIUS</StyledExtraInfoCaption>
      <StyledExtraInfoContent>{planetInfo.radius}</StyledExtraInfoContent>
    </StyledExtraInfobox>
    <StyledExtraInfobox>
      <StyledExtraInfoCaption>AVERAGE TEMP.</StyledExtraInfoCaption>
      <StyledExtraInfoContent>{planetInfo.averageTemp}</StyledExtraInfoContent>
    </StyledExtraInfobox>
  </StyledExtraInfoDiv>
</StyledMainContainer>
  );
};

export default PlanetCard;
