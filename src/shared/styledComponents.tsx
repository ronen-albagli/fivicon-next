import styled, { createGlobalStyle, css } from 'styled-components';
import { fontSizes } from './texts';

export const Section = styled.section<any>`
  font-family: 'Roboto', sans-serif;
  height: ${(props) => props.height || '100vh'};
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.zIndex || 2};
  text-align: center;
  position: ${(props) => props.position || 'unset'};
  background-color: ${(props) => props.background || 'inherit'};
  color: ${(props) => props.color || 'inherit'};
  font-size: ${fontSizes.title};

  @media only screen and (max-width: 767px) {
    /* ? { padding: '0px 20%', lineHeight: '68px' } */
    /* padding: 0 10%; */
    line-height: 36px;

    button {
      margin-top: 32px;
    }
    /* font-size: ${fontSizes.xxlarge}; */
  }
`;

export const TextContainers = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  line-height: 2;
  z-index: 2;
  max-width: 70%;
  height: ${(props) => props.height || 'auto'};
  margin: ${(props) => props.margin || 'unset'};
  @media only screen and (max-width: 767px) {
    margin: 32px 0px;
  }
`;

export const TextContainersAnimate = styled(TextContainers)<any>`
  animation: fadeIn 800ms forwards 500ms;
  opacity: 0;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
