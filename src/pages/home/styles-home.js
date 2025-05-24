import styled from "styled-components";

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledAllPlanetsImg = styled.img`
 position: absolute;
  top: 100px;
  animation: rotate 120s linear infinite;
  transform-origin: center;
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 768px) {
    top: 35px;
    width: 45%; 
  }
`;

export { StyledMainContainer, StyledAllPlanetsImg };
