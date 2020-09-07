import styled from 'styled-components';
import KidReading  from '../../images/kidReading.png';

const MainImage = styled.img.attrs({
    src: KidReading,
    href:'kid reading',
})`
 width: 100%;
 height: 100%;
 object-fit: scale-down;
 @media (max-width: 768px) {
    width: 100%;
    object-fit: contain;
   }
`;

export default MainImage;