import styled from 'styled-components';

const TextCard = styled.p`
 font-family: 'Comfortaa',cursive;
 color: #d3d3d3;
 font-size: 11px;
 font-weight: 600;
 padding: 0 15px;
 margin: 0;
 @media (max-width: 320px) {
  font-size: 10px;
 }
`;
const TextCardContainer = styled.div`
  width: 100%;
  margin: 0;
}
`;

export {
 TextCardContainer,
 TextCard,
} 