import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
 
}

`;
const InfoContainer = styled.div`
  height: 100%;
  width: 40%;
  @media (max-width: 1024px) {
    width: 60%;
   }
   @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
   }
`;

const ImageContainer = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 40%;
   }
   @media (max-width: 768px) {
    width: 100%;
   }
`;
export {
  MainContainer,
  InfoContainer,
  ImageContainer,
};