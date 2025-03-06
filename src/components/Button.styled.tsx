import styled, { css } from 'styled-components';

type ButtonProps = {
    borderColor?: string;
    bgColor?: string
    primary?: boolean
    secondary?: boolean
}

export const Button = styled.button<ButtonProps>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid ${props => props.borderColor || "blue"};
  background-color: ${props => props.bgColor || "grey"};
  position: relative;
  font: Inter;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
  color: ${props => props.theme.colors.primary};

  ${props => props.primary && css<ButtonProps>`
    color: rgba(255, 255, 255, 1);
    background-color: ${props=>props.theme.colors.primary}
  `}

  ${props => props.secondary && css<ButtonProps>`
    color: ${props => props.theme.colors.primary};
    background-color: #ffffff;
    border: 2px solid ${props => props.theme.colors.primary};
  `}
`;

