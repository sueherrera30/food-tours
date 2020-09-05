import React from 'react';
import { MainContainer, InfoContainer, ImageContainer } from './Sides';
import NavBar from '../../containers/NavBar';
import MainImage from '../../components/elements/MainImage';
import Title from '../../components/textComponents/Title';
import Subtitle from '../../components/textComponents/Subtitle';
import SearchElement from '../../containers/SearchElement';
import TagsContainer from '../../containers/TagsContainer';
import Card from '../../containers/Card';
const Home = () => (
  <>
    <NavBar>Navbar</NavBar>
    <MainContainer>
      {/* right side */}
      <InfoContainer>
        <Title> Explore food & wine tours </Title>
        <Subtitle>Lovely illustrations are here to become your favourites</Subtitle>
        <SearchElement/>
        <TagsContainer />
        <Card />
      </InfoContainer>
      {/* right side */}
      <ImageContainer>
        <MainImage />
      </ImageContainer>
    </MainContainer>
  </>
);

export default Home;
