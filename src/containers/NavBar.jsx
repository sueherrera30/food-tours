import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: papayawhip;
  width: 100%;
  height: 60px;
`;

const NavBar = () => (
  <MainContainer>
    Hola nav!
  </MainContainer>
);

export default NavBar;