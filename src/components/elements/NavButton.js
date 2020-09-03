import styled from 'styled-components';

const NavButton = styled.button.attrs(props => ({
    type: 'button',
  }))`
  border-radius: 30px;
  background-color: #D9F7F8;
  color: #2F58E1;
  font-family: 'Comfortaa',cursive;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  border: none;
  height: 30px;
  min-width: 65px; 
  font-weight: 600;
`

export default NavButton; 