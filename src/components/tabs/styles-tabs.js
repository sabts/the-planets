import styled from "styled-components";

const StyledSectionContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1206rem;
  color: #fff;
  height: 55px;
  padding: 1.5rem;  
`;
const StyledSectionButton = styled.li`
  display: flex;
  font-family: 'League Spartan', sans-serif;
  align-items: center;
  height: 55px;
  padding: 10px 15px;
  height: stretch;  
  color: ${({ $isActive }) =>
    $isActive ? "#fff" : "rgba(255, 255, 255, 0.2)"};
  border-bottom: 4px solid
    ${({ $isActive, $planetColor }) =>
      $isActive ? $planetColor : "transparent"};
  transition: all 0.2s ease-in-out;
`;

export{StyledSectionContainer, StyledSectionButton}