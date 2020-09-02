import React from 'react';
import { MainContainer, InfoContainer, ImageContainer } from './Sides';
import NavBar from '../../containers/NavBar';
import MainImage from '../../components/elements/MainImage';


const Home = () => (
  <>
    <NavBar>Navbar</NavBar>
    <MainContainer>
      <InfoContainer>texto y todo</InfoContainer>
      <ImageContainer>
        <MainImage />
      </ImageContainer>
    </MainContainer>
  </>
);

export default Home;
