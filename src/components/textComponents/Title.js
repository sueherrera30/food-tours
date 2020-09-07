import styled from 'styled-components';

const Title = styled.p`
  font-family: 'Comfortaa',cursive;
  color: black;
  font-size: 65px;
  width: 80%;
  font-weight: 600;
  padding: 0 20px;
  margin: 0;
  @media (max-width: 768px) {
    margin-top: 40px;
    text-align: center;
   }
   @media (max-width: 425px) {
    font-size: 45px;
   }
`;

export default Title; 