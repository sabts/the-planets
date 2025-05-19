import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledPlanetItem = styled.div`
display: flex;
align-items: center;
gap: 10px; /* Añade espacio entre el círculo y el nombre del planeta */
`;

const StyledPlanetCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;
export {StyledMenu, StyledPlanetItem, StyledPlanetCircle}