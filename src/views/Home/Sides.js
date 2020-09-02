import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: yellow;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 40% 60%;

`;

const InfoContainer = styled.div`
  background-color: lightcyan;
`;

const ImageContainer = styled.div`
  background-color: pink;
`;

export {
  MainContainer,
  InfoContainer,
  ImageContainer,
};