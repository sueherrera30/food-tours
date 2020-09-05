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
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

export {
 MainContainer, 
 OptionsContainer,
 SearchWrapper,
};