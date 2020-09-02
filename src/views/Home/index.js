import React from 'react';
import { MainContainer, InfoContainer, ImageContainer } from './Sides';
import NavBar from '../../containers/NavBar';
// import PropTypes from 'prop-types';

const Home = () => (
  <>
    <NavBar>Navbar</NavBar>
    <MainContainer>
      <InfoContainer>texto y todo</InfoContainer>
      <ImageContainer> imagen chida </ImageContainer>
    </MainContainer>
  </>
);

export default Home;
