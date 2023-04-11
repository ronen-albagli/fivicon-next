import { AppHead } from '@/components/head';
import Header from '@/components/header';
import { LottieAnimations } from '@/shared/lottie';
import GlobalStyle from '@/styles/Globals';
import styled from 'styled-components';
import NotFoundAnimation from '../assets/animations/42479-page-not-found-404.json';

const NotFoundPage = () => {
  return (
    <>
      <GlobalStyle />
      <AppHead />
      <Header />
      <NotFoundWrapper>
        {/* <Lottie
        options={{ ...defaultOptions, animationData: NotFoundAnimation }}
        height={isMobile ? '30%' : '60%'}
        width={isMobile ? '100%' : '50%'}
        isStopped={false}
        isPaused={false}
      /> */}
        <LottieAnimations animation={NotFoundAnimation} />
      </NotFoundWrapper>
    </>
  );
};

const NotFoundWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  position: fixed;

  div {
    height: 60% !important;
    width: 70% !important;
  }
  @media only screen and (max-width: 767px) {
    div {
      height: 30% !important;
      width: 100% !important;
    }
  }
`;

export default NotFoundPage;
