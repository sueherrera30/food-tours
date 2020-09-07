import styled from 'styled-components';

const TextNavbarContainer = styled.div`
    position: relative;
    width: auto;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  p {
   font-family: 'Comfortaa', cursive;
   color: #000000;
   font-size: 14px;
   font-weight: 600;
   @media (max-width: 320px) {
    font-size: 10px;
   }
  }
`;

export default TextNavbarContainer; 