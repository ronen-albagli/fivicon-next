import styled, { css } from 'styled-components';
import { fontSizes, fontWeights, pallette, Text } from './texts';

export const Button = ({
  type,
  onClick = () => {},
  fillStyle = 'full',
  weight,
  width,
  color,
  border,
  bgColor,
  style = {},
  animate = false,
  offsetColor,
  ...props
}: any) => {
  return (
    <ButtonContainer
      animate={animate}
      offsetColor={offsetColor}
      onClick={onClick}
      width={width}
      bgColor={bgColor}
    >
      {props.children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<any>`
  border-radius: 6px;
  background-color: ${(props) => props.bgColor || pallette.lightPurple};
  outline: none;
  border: none;
  width: ${(props) => props.width || 'auto'};
  color: ${(props) => props.color || pallette.white};
  font-weight: ${(props) => props.weight || fontWeights.regular};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.animate &&
    css`
      p {
        transition: color 0.3s ease;
      }
      &:hover {
        p {
          color: ${(props: any) => props.offsetColor || 'inherit'};
        }
      }
    `}
`;
