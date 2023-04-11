/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';

type ImageProps = {
  image: any;
};

type SvgProps = {
  svg: any;
  fill?: string;
  stroke?: string;
  height?: string;
  width?: string;
};

export const ImgRenderer = ({ image }: ImageProps) => {
  //   return <ImageContainer image={image} style={{}}></ImageContainer>;
  return <ImageContainer src={image} image={image} style={{}}></ImageContainer>;
};

export const SvgRender = ({
  svg: SVG,
  fill,
  stroke,
  height = '12px',
  width = '12px',
}: SvgProps) => {
  return (
    <>
      <img src={SVG} alt="" />
    </>
  );
};

// const ImageContainer = styled.div<ImageProps>`
//   background-image: url(${(props) => props.image});
//   height: 100%;
//   width: 100%;
//   background-size: cover;

//   img {
//     margin-top: unset;
//   }
// `;

const ImageContainer = styled.img<ImageProps>`
  /* background-image: url(${(props) => props.image}); */
  height: 100%;
  width: 100%;
  background-size: cover;

  /* img {
    margin-top: unset;
  } */
`;
