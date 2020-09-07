import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height:60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width:  30%;
  @media (max-width: 1024px) {
    width: 50%;
   }
   @media (max-width: 425px) {
    width: 100%;
   }
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  width: calc(100% - 120px);
`;
const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  margin-top: 60px;
  justify-content: space-around;
  width: calc(100% - 180px);
`;
const CardWrapper = styled.div`
display: flex;
height: auto;
min-height: 100px;
align-items: center;
justify-content: space-between;
margin : 0 20px;
width: calc(100% - 180px);
border-bottom: solid 1px lightgray;
`;

export {
 MainContainer, 
 OptionsContainer,
 SearchWrapper,
 TagsWrapper,
 CardWrapper,
};