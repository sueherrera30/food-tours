import styled from 'styled-components';

const ImageCardContainer = styled.div`
 width: 100px;
 height: 80px;
 @media (max-width: 320px) {
    width: 50px;
    height: 40px;
   }
`;

const ImageCard = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
 border-radius: 20px;
`;

export {
 ImageCardContainer,
 ImageCard
};