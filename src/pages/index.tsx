/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import {
  fontSizes,
  fontWeights,
  HeaderText,
  pallette,
  Text,
} from '@/shared/texts';
import { LottieAnimations } from '@/shared/lottie';
import Bubbles from '@/assets/animations/37799-starry-background.json';
import ApiAnimation from '@/assets/animations/api.json';
import WebhookAnimation from '@/assets/animations/webhook.json';
import Header from '@/components/header';
import styled, { createGlobalStyle, css } from 'styled-components';
import { Button } from '@/shared/buttons';
import { useEffect, useState } from 'react';
import { Counter } from '@/components/counters';
import GlobalStyle from '@/styles/Globals';
import { FiviconRights } from '@/components/footer';
import { AppHead } from '@/components/head';
import { useRouter } from 'next/router';
import { iconHttp } from '@/http/iconHttp';
import { publicHttp } from '@/http/publicHttps';
import { logPageView } from '../utils/ga';

export const sleep = async (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export default function Home(props: any) {
  const router = useRouter();
  const [fiviStats, setFiviStats] = useState<any>(null);

  const fetchFiviStats = async () => {
    const stats = await publicHttp.getFiviStats();

    setFiviStats(stats.data);
  };

  console.log('env', process.env);

  useEffect(() => {
    fetchFiviStats();
  }, []);

  useEffect(() => {
    if ((window as any).ga) {
      (window as any).ga('send', 'event', 'Button', 'Click', 'Contact Us');
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      {/* <Head>
        <title>Fivicon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
      </Head> */}
      <AppHead />
      <Header />
      <main>
        <Section background={pallette.black}>
          <LottieAnimations zIndex={1} position="fixed" animation={Bubbles} />
          <TextContainersAnimate>
            <HeaderText
              size={fontSizes?.superTitle}
              weight={fontWeights?.superLight}
              style={{ marginBottom: '60px' }}
              color={pallette?.white}
            >
              Welcome to fivicon
            </HeaderText>
            <Text
              // style={{ lineHeight: '84px' }}
              color={pallette?.white}
              size={fontSizes.title}
              weight={fontWeights.superLight}
            >
              Our API provides the latest updates for company logos. Simply
              input the company domain and retrieve their most recent logo
            </Text>
          </TextContainersAnimate>
        </Section>

        <Section
          position={'relative'}
          zIndex={100}
          background={'white'}
          color={'black'}
        >
          <LottieAnimations
            height={'200px'}
            width={'200px'}
            animation={ApiAnimation}
          />
          <TextContainers height={'60%'}>
            <HeaderText
              size={fontSizes?.superTitle}
              weight={fontWeights?.superLight}
              color={pallette.darkBlack}
            >
              Using Fivicon Api
            </HeaderText>
            <Text
              size={fontSizes?.title}
              weight={fontWeights?.superLight}
              color={pallette?.darkBlack}
            >
              By staying up-to-date with the latest changes to company logos,
              your application will remain relevant and up-to-date.
            </Text>

            <Button
              animate
              offsetColor={pallette?.primary}
              bgColor={pallette?.darkBlack}
              onClick={() => {}}
            >
              <Text
                size={fontSizes?.subTitle}
                weight={fontWeights?.superLight}
                color={pallette?.lightWhite}
                padding={'24px'}
                onClick={() => router.push('/trial')}
              >
                Try for free
              </Text>
            </Button>
          </TextContainers>
        </Section>
        <Section height={'40vh'} background={pallette.backgroundLightBlack}>
          <HeaderText
            size={fontSizes?.superTitle}
            weight={fontWeights?.superLight}
            color={pallette.white}
          >
            Fivicon data
          </HeaderText>
          <Counters>
            {fiviStats && (
              <>
                <Counter title={"Logo's"} number={fiviStats?.uniqueUrls} />
                <Counter title={'Domains'} number={fiviStats?.uniqueDomains} />
                <Counter title={'Users'} number={fiviStats?.userCount} />
              </>
            )}
          </Counters>
        </Section>
        <Section position={'relative'} background={'#92fff4'}>
          <LottieAnimations
            height={'250px'}
            width={'250px'}
            animation={WebhookAnimation}
          />
          <TextContainers height="38%">
            <Text
              size={fontSizes.title}
              weight={fontWeights.superLight}
              color={pallette.darkBlack}
            >
              Don't wait for vendor updates any longer. Utilize our fivicon
              webhook to receive immediate notifications when updates occur,
              keeping you informed and up-to-date at all times.
            </Text>
          </TextContainers>
        </Section>
        <FiviconRights />
      </main>
    </>
  );
}

export const Counters = styled.div`
  background: transparent;
  height: 236px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TextContainers = styled.div<any>`
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
    /* margin: 32px 0px; */
  }
`;

const TextContainersAnimate = styled(TextContainers)<any>`
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
  line-height: 84px;
  @media only screen and (max-width: 767px) {
    /* ? { padding: '0px 20%', lineHeight: '68px' } */
    /* padding: 0 10%; */
    line-height: 36px;

    h1 {
      font-size: ${fontSizes.titleBig};
    }

    p {
      font-size: ${fontSizes.xlarge};
    }
    button {
      margin-top: 32px;
    }
    /* font-size: ${fontSizes.xxlarge}; */
  }
`;

// !isMobile ? { lineHeight: '84px' } : { padding: '0px 42px' }
// size={isMobile ? fontSizes.xxlarge : fontSizes.title}
