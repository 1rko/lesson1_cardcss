import styled from 'styled-components';

export const Input = styled.input.attrs(({type}) => ({type: type}))`
  width: 50px;
  height: 20px;
  border-radius: 5px;
`;

