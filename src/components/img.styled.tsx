import styled from 'styled-components';

// @ts-ignore
export const ImgStyled = styled.img.attrs(({src}) => ({src: src}))`
  src: src;
  width: 280px;
  height: 170px;
  position: relative;
  border-radius: 10px;

  &:hover {
    background-color: darkblue;
  }
`;