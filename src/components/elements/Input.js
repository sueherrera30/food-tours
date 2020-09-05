import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
})`
 width: 65%;
 height: 40px;
 border-radius: 35px;
 background: #F5F5F5;
 font-family: 'Quicksand', sans-serif;
 border-color: transparent;
 outline: none;
 padding: 0 16px;
`;

export default Input;