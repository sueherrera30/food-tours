import React from 'react';
// import { tagsOptions } from './store';
import {CardWrapper } from '../components/elements/Wrappers';
import { ImageCard, ImageCardContainer } from '../components/elements/ImageCard';
import Sicily from '../images/sicily.jpeg';
import TittleCard from '../components/textComponents/TittleCard';
import { TextCardContainer,TextCard } from '../components/textComponents/TextCard';
import LinkCard from '../components/textComponents/LinkCard';

const Card = () => (
  <CardWrapper>
    <div>
     <ImageCardContainer>
       <ImageCard src={Sicily} />
     </ImageCardContainer>
    </div>
    <TextCardContainer>
     <TittleCard>title</TittleCard>
     <TextCard>Texto lalalalalal</TextCard>
    </ TextCardContainer>
    <div>
     <LinkCard>
        Explore
     </LinkCard>
    </div>
  </CardWrapper>
);

export default Card;