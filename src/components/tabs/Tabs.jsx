import { TABS } from "../../constants/tabs";
import { StyledSectionButton, StyledSectionContainer } from "./styles-tabs";

const Tabs = ({ activeTab, setActiveTab, planetColor }) => {
  return (
    <div>
    <StyledSectionContainer>
      {TABS.map((tab, index) => (
        <StyledSectionButton
          key={tab}
          $isActive={activeTab === index}
          $planetColor={planetColor}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </StyledSectionButton>
      ))}
    </StyledSectionContainer>
  </div>
  );
};

export default Tabs;
