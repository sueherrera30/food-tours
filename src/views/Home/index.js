import React from 'react';
import { MainContainer, InfoContainer, ImageContainer } from './Sides';
import NavBar from '../../containers/NavBar';
import MainImage from '../../components/elements/MainImage';
import Title from '../../components/textComponents/Title';
import Subtitle from '../../components/textComponents/Subtitle';

const Home = () => (
  <>
    <NavBar>Navbar</NavBar>
    <MainContainer>
      <InfoContainer>
        <Title> Explore food & wine tours</Title>
        <Subtitle>Lovely illustrations are here to become your favourites</Subtitle>
      </InfoContainer>
      <ImageContainer>
        <MainImage />
      </ImageContainer>
    </MainContainer>
  </>
);

export default Home;
