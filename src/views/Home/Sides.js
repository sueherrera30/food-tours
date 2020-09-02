import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: yellow;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 40% 60%;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }

`;

const InfoContainer = styled.div`
  background-color: lightcyan;
`;

const ImageContainer = styled.div`
  background-color: pink;
  @media (max-width: 425px) {
    display: none;
  }
`;

export {
  MainContainer,
  InfoContainer,
  ImageContainer,
};