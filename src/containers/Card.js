import React from 'react';
import { cardInformation } from './store';
import {CardWrapper } from '../components/elements/Wrappers';
import { ImageCard, ImageCardContainer } from '../components/elements/ImageCard';
import TittleCard from '../components/textComponents/TittleCard';
import { TextCardContainer,TextCard } from '../components/textComponents/TextCard';
import LinkCard from '../components/textComponents/LinkCard';

const Card = () => (
 <>
 {
  cardInformation.map(card => (
  <CardWrapper>
   <div>
    <ImageCardContainer key={card.id}>
     <ImageCard src={card.image} />
    </ImageCardContainer>
   </div>
    <TextCardContainer>
    <TittleCard>{card.title}</TittleCard>
     <TextCard>{card.text}</TextCard>
    </TextCardContainer>
   <div>
   <LinkCard>
    Explore
   </LinkCard>
   </div>
  </CardWrapper>
  ))
 }
 </> 
);

export default Card;