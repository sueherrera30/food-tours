import styled from 'styled-components';

const LinkCard = styled.a`
 font-family: 'Comfortaa',cursive;
 color: #2F58E1;
 font-size: 12px;
 margin: 0;
 text-decoration: none;
 font-weight: bold;
 curssor: pointer;
 :hover {
  text-decoration: underline;
 }
 @media (max-width: 320px) {
    font-size: 8px;
   }
`;

export default LinkCard; 