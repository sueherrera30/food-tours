import styled from 'styled-components';

const Tag = styled.div`
 width: auto;
 height: 25px;
 border-radius: 35px;
 background: transparent;
 border: solid 1px #F5F5F5;
 padding: 0 16px;
 font-family: 'Quicksand', sans-serif;
 color: #000000;
 font-size: 12px;
 font-weight: bold;
 display: flex;
 align-items: center;
 cursor: pointer;
 :hover {
     background: papayawhip;
 }
 @media (max-width: 320px) {
    font-size: 10px;
   }
`;

const ActiveTag = styled.div`
 width: auto;
 height: 25px;
 border-radius: 35px;
 background: transparent;
 border: transparent;
 padding: 0 16px;
 font-family: 'Quicksand', sans-serif;
 background: #79C9A4;
 color: #FFFFFF;
 font-size: 12px;
 font-weight: bold;
 display: flex;
 align-items: center;
 cursor: pointer;
`;

export {
    ActiveTag,
    Tag,
};