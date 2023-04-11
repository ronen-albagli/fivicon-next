import styled from 'styled-components';

export const fontSizes = {
  xxsmail: '8px',
  xsmall: '10px',
  small: '12px',
  medium: '14px',
  large: '16px',
  xlarge: '18px',
  xxlarge: '22px',
  subTitle: '24px',
  title: '32px',
  titleBig: '42px',
  superTitle: '56px',
};
export const pallette = {
  primary: '#d4e4f7',
  white: '#fff',
  gray: 'gray',
  black: 'black',
  darkBlack: '#0f1218',
  lightWhite: '#8e8e8e',
  lightBlack: '#4a4a4a',
  darkGray: '#eae9e9',
  lightGray: '#a2a2a2',
  superLightGray: '#ededed',
  lightGreen: '#75ed83',
  themeGray: '#f9f9f9',
  lightPurple: '#f8a4f8',
  backgroundLightBlack: '#2a2a2a',
};

export const fontWeights = {
  extraLight: 200,
  superLight: 300,
  light: 400,
  regular: 500,
  big: 700,
  bold: 800,
};
export const Text = (props: any) => {
  return <TextStyled {...props}>{props.children}</TextStyled>;
};

export const HeaderText = (props: any) => {
  return <MainHeader {...props}>{props.children}</MainHeader>;
};

const MainHeader = styled.h1<any>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.size || fontSizes.medium};
  font-weight: ${(props) => props.weight || fontWeights.regular};

  @media only screen and (max-width: 767px) {
  }
`;

const TextStyled = styled.p<any>`
  /* font-family: var(--font-mono); */
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.size || fontSizes.medium};
  font-weight: ${(props) => props.weight || fontWeights.regular};
  padding: ${(props) => props.padding || 'unset'};
`;
