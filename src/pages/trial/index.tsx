/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { AppHead } from '@/components/head';
import { TextInput } from '@/shared/inputs';
import { LottieAnimations } from '@/shared/lottie';
import {
  Section,
  TextContainers,
  TextContainersAnimate,
} from '@/shared/styledComponents';
import {
  fontSizes,
  fontWeights,
  HeaderText,
  pallette,
  Text,
} from '@/shared/texts';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Bubbles from '@/assets/animations/37799-starry-background.json';
import IconLoader from '@/assets/animations/circle-loader.json';
import StopIcon from '@/assets/animations/64383-stop-sign.json';

import Header from '@/components/header';
import { Button } from '@/shared/buttons';
import { FiviconRights } from '@/components/footer';
import { useRouter } from 'next/router';
import { publicHttp } from '@/http/publicHttps';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0/client';


type ProfileProps = {
  user: any;
};

const TrialPage = ({ user }: ProfileProps) => {
  const [input, setInput] = useState('');
  const [isFetching, setFetching] = useState(false);
  const [iconPayload, setPayload] = useState<any>(null);
  const iconResultRef = useRef(null);
  const inputRef = useRef(null);

  const { user: u } = useUser()
  const [popupOpen, setPopupOpen] = useState(false);

  const [notification, setNotification] = useState('');
  useEffect(() => {
    if (notification) {
      setTimeout(() => setNotification(''), 5000);
    }
  }, [notification]);

  const fakeHttp = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            domain: 'walla.co.il',
            url: 'https://walla.co.il/favicon.ico',
          },
        });
      }, 2000);
    });
  };

  const scrollToInput = () => {
    (inputRef?.current as any)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getLogo = async (name: string, isLoggedIn = false) => {
    try {
      let logoData;

      if(isLoggedIn){
         const {data} = await axios.post('/api/get-logo', {name})
  
        logoData = data.data
      } else {
        const { data } = await publicHttp.searchIcon()(name);

        logoData = data
      }

      return logoData;
    } catch (error: any) {
      if (error.response?.status === 429) {
        setPopupOpen(true);
      }
      console.warn('ERROR', error);
    }

    return null;
  };

  useEffect(() => {
    iconPayload &&
      (iconResultRef?.current as any)?.scrollIntoView({ behavior: 'smooth' });
  }, [iconPayload]);

  const searchLogo = async () => {
    setFetching(true);

    const iconData = await getLogo(input, !!u);
    setPayload(iconData);
    setFetching(false);
  };

  const sendCompliant = () => {
    setNotification('Issue has been sent');
  };

  return (
    <>
      <AppHead />
      <main>
        <Header />
        <Section ref={inputRef} background={pallette.black}>
          <LottieAnimations zIndex={-1} position="fixed" animation={Bubbles} />
          <TextContainersAnimate>
            <HeaderText
              size={fontSizes?.superTitle}
              weight={fontWeights?.superLight}
              style={{}}
              color={pallette?.white}
            >
              Fivicon API
            </HeaderText>
            <Text
              color={pallette?.white}
              size={fontSizes.title}
              weight={fontWeights.superLight}
            >
              Type a company domain
            </Text>
            <InputWrapper>
              <TextInput
                value={input}
                onChange={(e: any) => setInput(e.target.value)}
                weight={fontWeights.bold}
                size={fontSizes.title}
              />
            </InputWrapper>
            <ButtonWrapper>
              <Button
                style={{
                  zIndex: 100,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                bgColor={'transparent'}
                onClick={searchLogo}
              >
                <Text
                  noSpacing
                  size={fontSizes.subTitle}
                  weight={fontWeights.superLight}
                  color={pallette.lightWhite}
                >
                  {isFetching ? (
                    <LottieAnimations
                      height={'50px'}
                      width={'50px'}
                      animation={IconLoader}
                    />
                  ) : (
                    'Try for free'
                  )}
                </Text>
              </Button>
            </ButtonWrapper>
          </TextContainersAnimate>
        </Section>
        <Section ref={iconResultRef} zIndex={10} background={pallette.white}>
          <TextContainers height={'60%'}>
            <ImagePreview>
              <img src={(iconPayload?.url as any) || ''} alt="" />
            </ImagePreview>

            <PreCode>
              <CodeBlock>{JSON.stringify(iconPayload, null, 2)}</CodeBlock>
            </PreCode>
          </TextContainers>
          <Text
            style={{ margin: '12px' }}
            color={pallette.darkBlack}
            size={fontSizes?.xlarge}
            weight={fontWeights.extraLight}
          >
            Would you like to try the API again?
          </Text>
          <Button
            height={'20px'}
            width={'200px'}
            animate
            offsetColor={pallette?.primary}
            bgColor={pallette?.darkBlack}
            onClick={() => {}}
          >
            <Text
              size={fontSizes?.xlarge}
              weight={fontWeights?.superLight}
              color={pallette?.lightWhite}
              padding={'14px'}
              onClick={scrollToInput}
            >
              Explore Again
            </Text>
          </Button>
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
          >
            <Text
              color={pallette.darkBlack}
              weight={fontWeights.superLight}
              size={fontSizes?.large}
              style={{ margin: '12px', marginRight: '4px' }}
            >
              Find some problem?{' '}
            </Text>
            <Text
              color={pallette.darkBlack}
              // weight={fontWeights.me}
              size={fontSizes?.large}
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={sendCompliant}
            >
              lets us know!
            </Text>
          </div>
        </Section>
        <FiviconRights />
      </main>
      {popupOpen && <Popup onClose={() => setPopupOpen(false)} />}
      <Notifications
        isVisible={notification}
        notifications={'Issue has been sent!'}
      />
    </>
  );
};

export const Notifications = ({ isVisible, notifications }: any) => {
  return (
    <StyledNotification isVisible={isVisible}>
      <Text color={pallette.black}>{notifications}</Text>
    </StyledNotification>
  );
};

const StyledNotification = styled.div<any>`
  position: fixed;
  width: 100vw;
  bottom: -100px;
  opacity: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  transition: bottom 0.4s ease, opacity 0.2s ease;

  ${(props) =>
    props.isVisible &&
    css`
      position: fixed;
      width: 100vw;
      bottom: 10px;
      z-index: 20;
      display: flex;
      opacity: 1;
      justify-content: center;
    `}
  p {
    padding: 12px;
    background-color: #3b3b3b;
    border-radius: 8px;
    color: #f0f0f0;
  }
`;

const Popup = (props: any) => {
  const router = useRouter();

  return (
    <PopupWrapper>
      <div className="overlay" onClick={props.onClose} />
      <PopupContent>
        {/* <Text
          color={'#36557b'}
          weight={fontWeights?.bold}
          size={fontSizes?.subTitle}
        >
          fivicon
        </Text> */}
        <LottieAnimations
          loop={false}
          animation={StopIcon}
          width="120px"
          height="120px"
        />

        <HeaderText size={fontSizes.title} color={pallette.lightBlack}>
          Too many requests
        </HeaderText>

        <Text
          weight={fontWeights.superLight}
          size={fontSizes?.xlarge}
          color={pallette.lightBlack}
        >
          Unfortunately, it seems that you have exceeded the maximum number of
          attempts allowed. Please try again later after some time has passed or 
          you can  <span style={{color:pallette.lightPurple, fontWeight:'bold', outline:'None', backgroundColor: 'transparent', borderColor:'transparent'}} onClick={()=>router.push('/api/auth/login')}>login</span>

          {/* Alternatively, you can sign up or log in to Fivicon, which will grant
          you access to explore our API in greater detail. */}
        </Text>

        <Text
          weight={fontWeights.light}
          size={fontSizes?.large}
          color={pallette.lightBlack}
        ></Text>
        {/* <div>
          <Text size={fontSizes?.small} color={pallette.lightBlack}>
            Thank you, and we hope to see you soon.
          </Text>
        </div> */}
        <div
          style={{ display: 'flex', flexDirection: 'row', alignSelf: 'end' }}
        >
          <Button onClick={props.onClose}>Close</Button>
          {/* <Button
            className="go-to-console"
            onClick={() => {
              props.onClose();
              router.push('https://fivicon-local:3002');
            }}
          >
            Go to Console
          </Button> */}
        </div>
      </PopupContent>
    </PopupWrapper>
  );
};

const PopupContent = styled.div`
  height: 40vh;
  width: 40vw;
  background-color: white;
  z-index: 2001;
  border-radius: 12px;
  box-shadow: 1px 1px 8px 3px #fff;
  border: none;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  padding: 32px 48px;
  animation: fadeIn 0.3s forwards 0.5s;
  opacity: 0;
  /* text-align: center; */
  @media only screen and (max-width: 767px) {
    height: 50vh;
    width: 90vw;
  }

  div {
    margin: unset !important;
    padding: 6px;
  }
  @keyframes fadeIn {
    0% {
      opacify: 0;
    }

    100% {
      opacity: 1;
    }
  }

  h1 {
    /* padding: 42px; */
    /* padding: 0px 103px; */
    line-height: 48px;

    @media only screen and (max-width: 767px) {
      /* height: 50vh; */
      line-height: 48px;
      /* padding: 0px 48px; */
      font-size: ${fontSizes.xlarge};
    }
  }

  p {
    /* padding: 42px; */
    /* padding: 0px 103px; */
    line-height: 28px;

    @media only screen and (max-width: 767px) {
      /* height: 50vh; */
      line-height: 28px;
      /* padding: 0px 48px; */
      font-size: ${fontSizes.medium};
    }
  }
  svg {
    height: 10vh;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 12px 0px;
    }
  }

  button {
    height: 40px;
    width: 100px;
    background-color: transparent;
    border: 1px solid #f32175;

    color: #f32175;
    display: flex;
    align-self: end;

    &:last-child {
      background-color: #2196f3;
      border-color: transparent;
      color: white;
      margin: 0px 12px;
    }

    @media only screen and (max-width: 767px) {
      margin-top: 34px;
    }
  }
`;

const PopupWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s forwards;
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #050505c7;
  }

  @keyframes fadeIn {
    0% {
      opacify: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const ImagePreview = styled.div`
  height: 150px;
  width: 150px;
  background-color: #3e3e3e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  img {
    height: 80%;
    width: 80%;
  }
`;

const PreCode = styled.pre`
  overflow: scroll;
  background-color: #3e3e3e;
  height: 280px;
  width: 50vw;
  display: flex;
  font-size: 14px;
  text-align: start;
  @media only screen and (max-width: 767px) {
    width: 87vw;
  }
`;

const CodeBlock = styled.code`
  /* background-color: ${pallette.darkBlack}; */
  padding: 12px;
  color: white;
  font-family: monospace;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  button {
    border: 1px solid;
    padding: 12px;
    border-radius: 30px;
    margin: 100px 0px;
    min-width: 200px;
    height: 60px;
    transition: color 0.3s ease, background-color 0.3s ease;
    &:hover {
      background-color: ${pallette.white};
      color: ${pallette.backgroundLightBlack};
    }
  }
`;

const InputWrapper = styled.div<any>`
  height: 52px;
  width: ${(props) => (props.isMobile ? '80vw' : '60vw')};
  background-color: white;
  margin-top: 104px;
  border-radius: 22px;
  background-color: white;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    height: 100%;
    width: 90%;
    margin: 0 12px;
    color: #36557b;
    text-align: center;
  }
`;

// export default withPageAuthRequired(TrialPage);
export default TrialPage;
