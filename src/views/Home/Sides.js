import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width: 768px) {
   background: pink;
  }

`;
const InfoContainer = styled.div`
  height: 100%;
  width: 40%;
  @media (max-width: 1024px) {
    width: 60%;
   }
`;

const ImageContainer = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 40%;
   }
`;
export {
  MainContainer,
  InfoContainer,
  ImageContainer,
};