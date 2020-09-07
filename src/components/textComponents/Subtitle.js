import styled from 'styled-components';

const Subtitle = styled.p`
  font-family: 'Quicksand', sans-serif;
  color: #d3d3d3;
  font-size: 20px;
  width: 50%;
  padding: 0 20px;
  font-weight: bold; 
  @media (max-width: 425px) {
    width: calc(100% - 50px);
    font-size: 14px;
    text-align: center;
   }
`;

export default Subtitle; 