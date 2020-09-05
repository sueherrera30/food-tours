import styled from 'styled-components';
import Search from '../../images/search.svg'

const Icon = styled.img.attrs(props => ({
    src: Search,
  }))`
  width: 15px;
  height: 15px;
`
const SearchButton = styled.button.attrs(props => ({
    type: 'button',
  }))`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #eb7068;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  color:  #FFFFFF;
  margin-left: 10px;
  :hover {
    color: #eb7068;
    background: darkcyan;
  }
`

export {
    SearchButton,
    Icon,
} ; 