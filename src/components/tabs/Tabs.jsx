import { StyledSectionButton, StyledSectionContainer } from "./styles-tabs"

const Tabs = ({activeTab, setActiveTab, planetColor}) => {
    return <div>
     <StyledSectionContainer>
        <StyledSectionButton
          $activeTab = {activeTab}
          $currentTab = {0}
          planetColor={planet.color}
          onClick={()=>setActiveTab(0)}
        >
          OVERVIEW
        </StyledSectionButton>

        <StyledSectionButton
           $activeTab = {activeTab}
           $currentTab = {1}
           $planetColor={planetSelected.color}
           onClick={()=>setActiveTab(1)}
        >
          STRUCTURE
        </StyledSectionButton>

        <StyledSectionButton
          $activeTab = {activeTab}
          $currentTab = {2}
          $planetColor={planetSelected.color}
          onClick={()=>setActiveTab(2)}
        >
          SURFACE
        </StyledSectionButton>
      </StyledSectionContainer>
    </div>
}

export default Tabs