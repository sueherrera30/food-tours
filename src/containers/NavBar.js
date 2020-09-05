import React from 'react';
import TextNavbarContainer from '../components/textComponents/TextNavbar';
import LogoText from '../components/textComponents/LogoText';
import Notification from '../components/elements/Notification';
import { navOptions } from './store';
import NavButton from '../components/elements/NavButton';
import { MainContainer, OptionsContainer } from '../components/elements/Wrappers';

const NavBar = () => (
  <>
    <MainContainer>
      <LogoText>Sunshine</LogoText>
      <OptionsContainer> 
        {
          navOptions.map(option => (
          <TextNavbarContainer key={option.id}>
            {
               option.notification ? <Notification /> : null
            }
            <p>
              {option.name}
            </p> 
          </TextNavbarContainer>
          ))
        }
        <NavButton onClick={() => alert('Hi coach!')}>login</NavButton>
      </OptionsContainer>

    </MainContainer>
  </>
);

export default NavBar;