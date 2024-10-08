/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
// import '@/styles/globals.css'
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
import Sprinkles from '@/assets/animations/sprinkels.json';
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
import { useUser } from '@auth0/nextjs-auth0/client';
import IconLoader from '@/assets/animations/circle-loader.json';

export const sleep = async (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export default function Home(props: any) {
  const router = useRouter();
  const [fiviStats, setFiviStats] = useState<any>(null);
  const { user, error, isLoading } = useUser();
  const [domain, setDomain] = useState<string>()
  const [isFetching, setFetching] = useState<boolean>(false)
  const [searchResults, setSearchResult] = useState(
    // { "_id": "66defb516d325ed0c83bbe9c", "_v": 1, "url": "https://waze.com/favicon.ico", "domain": "waze.com", "timestamp": 1725889361123, "type": "ico", "date": 1725894626195 }
  ) as any



  const handleDomainSubmitted = async () => {
    if (domain) {
      setFetching(true)
      const response = await publicHttp.searchIcon()(domain)
      setSearchResult(response.data)
    }

    setFetching(false)
  }

  useEffect(() => {
    if ((window as any).ga) {
      (window as any).ga('send', 'event', 'Button', 'Click', 'Contact Us');
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppHead />
      {/* <AppHead /> */}
      <Header />
      <main className="" >
        <div id="home" style={{ fontFamily: "Rubik, sans-serif", height: "100vh" }} className=" relative flex h-screen bg-[#171717] flex items-center justify-around">

          <LottieAnimations zIndex={0} position="absolute" animation={Sprinkles} />

          <div className='z-10'>
            <p className="text-sm text-[#848484] mb-4 ">
              <span>&nbsp; Introducing the future of icon platforms </span>
            </p>
            <div>
              <p style={{ letterSpacing: '1.6px', lineHeight: '1.2', fontFamily: "'Be Vietnam Pro'" }} className="text-[68px] font-bold text-white">
                Companies<br /> Icons API
              </p>

              <p className="ld-fh-element mb-0/5em leading-1/5em text-md text-[#848484] text-[20px] text-light mt-4">Stay ahead with real-time
                updates. <br /> Don't wait for vendor updates, get notified instantly.</p>
            </div>
            <div>

              <button className="mt-12 border rounded-3xl border-white">
                <p className='py-2 px-6 text-white'>
                  <a href="#try">
                    Try it now!
                  </a>
                </p>
              </button>
            </div>
          </div>
          <div>
            <img className='h-[345px] w-[345px] ' src="/assets/images/image.png" alt="" />
          </div>
        </div>

        <div id="features" className="relative  h-screen bg-[#171717] flex justify-center flex flex-col" style={{ height: "100vh" }}>
          <div className="text-center"
            style={{ fontFamily: "Rubik, sans-serif" }}

          >
            <div className="ld-fancy-heading"
            >
              <h2 className="ld-fh-element mb-0/25em leading-1em text-[64px] text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '1.6px', lineHeight: '1.2' }}
              >Stay Updated <br />Automatically
              </h2>
            </div>
            <div>
              <p className="ld-fh-element mb-0/5em leading-1/5em font-[20px] text-[#848484] mt-4"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", letterSpacing: '1.6px', lineHeight: '1.6' }}
              >Subscribe to real-time
                webhooks to receive alerts whenever your <br />  company's logos are updated.</p>
            </div>
          </div>
          <div className='flex flex-wrap p-4 justify-center  my-12'>
            <div className="flex flex-col flex-wrap w-3/12 flex-wrap w-3/12 border border-transparent rounded-md p-4 bg-[#1c1c1e] m-2">
              <div className="my-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.1299 13.8H11.5C11.7357 13.8 11.8536 13.8 11.9268 13.8732C12 13.9464 12 14.0643 12 14.3V18.7299C12 19.6205 12 20.0659 12.1962 20.1091C12.3925 20.1523 12.5795 19.7482 12.9537 18.9399L15.6851 13.0402C16.2768 11.7621 16.5726 11.1231 16.2777 10.6615C15.9828 10.2 15.2786 10.2 13.8701 10.2H12.5C12.2643 10.2 12.1464 10.2 12.0732 10.1268C12 10.0536 12 9.9357 12 9.7V5.27013C12 4.37946 12 3.93413 11.8038 3.89091C11.6075 3.8477 11.4205 4.25182 11.0463 5.06006L8.31493 10.9597C7.72321 12.2379 7.42735 12.8769 7.72228 13.3385C8.01721 13.8 8.72143 13.8 10.1299 13.8Z"
                    fill="white" />
                </svg>
              </div>
              <div className="mx-4">
                <div className="">
                  <h3 className="features text-md mb-0/7em leading-1/5em text-white">Real-time Webhooks</h3>
                  <p className=" text-sm  text-[#848484] my-2">Stay informed whenever changes are made in your logo catalog.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-wrap w-3/12  border border-transparent rounded-md p-4 bg-[#1c1c1e] m-2">
              <div className="my-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 6C3 4.89543 3.89543 4 5 4H19.5C19.7761 4 20 4.22386 20 4.5V6C20 7.10457 19.1046 8 18 8H5C3.89543 8 3 7.10457 3 6Z"
                    fill="white" />
                  <path
                    d="M3 16V6C3 7.10457 3.89543 8 5 8H19C20.1046 8 21 8.89543 21 10V12.85C21 12.9328 20.9328 13 20.85 13H18C16.8954 13 16 13.8954 16 15C16 16.1046 16.8954 17 18 17H20.85C20.9328 17 21 17.0672 21 17.15V18C21 19.1046 20.1046 20 19 20H7C4.79086 20 3 18.2091 3 16Z"
                    fill="#7E869E" fill-opacity="0.25" />
                  <path
                    d="M15 15C15 13.8954 15.8954 13 17 13H20.85C20.9328 13 21 13.0672 21 13.15V16.85C21 16.9328 20.9328 17 20.85 17H17C15.8954 17 15 16.1046 15 15Z"
                    fill="white" />
                  <rect x="5" y="10" width="6" height="1" rx="0.5" fill="white" />
                </svg>
              </div>
              <div className="mb-4">
                <div className="">
                  <h3 className="features text-md mb-0/7em leading-1/5em">Flexible Pricing</h3>
                  <p className="text-sm  text-[#848484] my-2">Multiple subscription options, including pay-as-you-go, ensuring you pay
                    only for what you use</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-wrap w-3/12  border border-transparent rounded-md p-4 bg-[#1c1c1e] m-2">
              <div className="my-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 21V13M12 21L5.83752 16.5982C5.42695 16.305 5.22166 16.1583 5.11083 15.943C5 15.7276 5 15.4753 5 14.9708V8M12 21L18.1625 16.5982C18.573 16.305 18.7783 16.1583 18.8892 15.943C19 15.7276 19 15.4753 19 14.9708V8M12 13L5 8M12 13L19 8M5 8L10.8375 3.83034C11.3989 3.42938 11.6795 3.2289 12 3.2289C12.3205 3.2289 12.6011 3.42938 13.1625 3.83034L19 8"
                    stroke="white" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="mb-4">
                <div className="">
                  <h3 className="features text-md mb-0/7em leading-1/5em">For Developers</h3>
                  <p className="text-sm  text-[#848484] my-2">API-first architecture with extensive developer tools for seamless
                    integration.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-wrap w-3/12  border border-transparent rounded-md p-4 bg-[#1c1c1e] m-2">
              <div className="my-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 7.5H7.5" stroke="white" stroke-linecap="round" />
                  <path d="M3.5 15.5H7.5" stroke="white" stroke-linecap="round" />
                  <path d="M3.5 11.5H7.5" stroke="white" stroke-linecap="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.01071 5.6954C5.00666 5.83786 5.00463 5.9091 5.04881 5.95455C5.09299 6 5.1649 6 5.30872 6H7.5C8.32843 6 9 6.67157 9 7.5C9 8.32843 8.32843 9 7.5 9H5.3C5.15858 9 5.08787 9 5.04393 9.04393C5 9.08787 5 9.15858 5 9.3V9.7C5 9.84142 5 9.91213 5.04393 9.95607C5.08787 10 5.15858 10 5.3 10H7.5C8.32843 10 9 10.6716 9 11.5C9 12.3284 8.32843 13 7.5 13H5.3C5.15858 13 5.08787 13 5.04393 13.0439C5 13.0879 5 13.1586 5 13.3V13.7C5 13.8414 5 13.9121 5.04393 13.9561C5.08787 14 5.15858 14 5.3 14H7.5C8.32843 14 9 14.6716 9 15.5C9 16.3284 8.32843 17 7.5 17H5.3C5.15852 17 5.08777 17 5.04383 17.044C4.99989 17.088 4.99996 17.1588 5.0001 17.3005C5.00175 18.9875 5.03198 19.8604 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V7C19 5.11438 19 4.17157 18.4142 3.58579C17.8284 3 16.8856 3 15 3H9C7.11438 3 6.17157 3 5.58579 3.58579C5.15431 4.01726 5.04065 4.64243 5.01071 5.6954Z"
                    fill="#7E869E" fill-opacity="0.25" />
                  <path d="M15.5 10.5V7.5" stroke="white" stroke-linecap="round" />
                </svg>
              </div>
              <div className="mb-4">
                <div className="">
                  <h3 className="features text-md mb-0/7em leading-1/5em">Logo's Catalog</h3>
                  <p className="text-sm  text-[#848484] my-2">Choose your logo's format and size that best suits your needs.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-3/12  border border-transparent rounded-md p-4 bg-[#1c1c1e] m-2">
              <div className="my-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.8 16.4L15 17.75C13.2222 19.0833 10.7778 19.0833 9 17.75L7.2 16.4C5.18555 14.8892 4 12.5181 4 10V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V10C20 12.5181 18.8144 14.8892 16.8 16.4Z"
                    stroke="#CCD2E3" stroke-width="2" stroke-linecap="round" />
                  <circle cx="12" cy="10" r="1" fill="#CCD2E3" />
                  <circle cx="9" cy="10" r="1" fill="#CCD2E3" />
                  <circle cx="15" cy="10" r="1" fill="#CCD2E3" />
                </svg>
              </div>
              <div className="mb-4">
                <div className="">
                  <h3 className="features text-md mb-0/7em leading-1/5em">Data Security</h3>
                  <p className="text-sm  text-[#848484] my-2">We don't store any of your personal data in our system, only your usage
                    data and logo catalog</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap w-3/12  border border-transparent rounded-md p-4 bg-[#1c1c1e] m-2">
              <div className="my-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.93934 12.6464L7.6921 11.8973L7.69209 11.8973L7.69209 11.8973C5.33888 11.1129 4.16228 10.7207 4.16228 9.99997C4.16228 9.27921 5.33888 8.88701 7.6921 8.10261L16.2053 5.26488C17.8611 4.71295 18.689 4.43699 19.126 4.87401C19.563 5.31102 19.287 6.13892 18.7351 7.79471L15.8974 16.3079L15.8974 16.3079L15.8974 16.3079C15.113 18.6611 14.7208 19.8377 14 19.8377C13.2792 19.8377 12.887 18.6611 12.1026 16.3079L11.3536 14.0606L15.7071 9.70708C16.0976 9.31656 16.0976 8.68339 15.7071 8.29287C15.3166 7.90234 14.6834 7.90234 14.2929 8.29287L9.93934 12.6464Z"
                    fill="white" />
                </svg>
              </div>
              <div className="mb-4">
                <div className="">
                  <h3 className="features text-md mb-0/7em leading-1/5em">Daily Reports</h3>
                  <p className="text-sm  text-[#848484] my-2">Subscribe to our newsletter to get the latest industry updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#171717] z-10 flex justify-center flex flex-col">
          <div className="counters flex flex-col md:flex-row  w-full items-center justify-center my-12">
            <div className='flex '>
              <div className="mx-24">
                <p className="numbers">10K+</p>
                <p>Logo's</p>
              </div>
              <div className="mx-24">
                <p className="numbers">1K+</p>
                <p>Domain</p>
              </div>
              <div className="mx-24">
                <p className="numbers">15k+</p>
                <p>Catalogs</p>
              </div>
              <div className="mx-24">
                <p className="numbers">30+</p>
                <p>Users</p>
              </div>
            </div>
          </div>
        </div>
        <div id="try" className="bg-[#171717] h-screen z-10 flex w-full justify-center flex flex-col py-12">
          <div className="try-now my-24 w-full flex flex-col items-center my-36 mb-12">
            <h3 className='features text-white text-[62px]'>Try Us Now!</h3>
            <div className="subtitle flex flex-col text-center">
              <p>Type the domain or url you want to find, and we will give you the logo</p>
            </div>
            <div className='w-[40%] mt-24'>
              <div className="input-wrapper" >
                <input onChange={(e: any) => setDomain(e.target.value)} className="try-input w-5/6" placeholder='Type a company url or domain' type="text" />
                <button className="try-button" onClick={handleDomainSubmitted}>
                  {
                    isFetching ?
                      <LottieAnimations
                        height={'36px'}
                        width={'36px'}
                        animation={IconLoader}
                      />
                      :
                      "GO"
                  }
                </button>
              </div>
            </div>
          </div>
          {searchResults ?
            <div className="search-results flex flex-col items-center justify-center">
              <div className="preview w-[200px] h-[200px] bg-[#242424] flex items-center justify-center rounded-2xl">
                <img height={140} width={140} src={searchResults?.url} />
              </div>
              <div className="logo-data bg-[#242424] mt-8  w-[500px] p-4 rounded-2xl overflow-x-scroll ">
                <code>{JSON.stringify(searchResults, null, 2)}</code>
              </div>
            </div>
            : <></>}
        </div>
        <FloatingMenu />

      </main >
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

const TextContainersAnimate = styled(TextContainers) <any>`
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



const FloatingMenu = () => {

  return (
    <div className='fixed bottom-4 w-full flex justify-center z-10000'>
      <div className='bg-white  bg-white flex justify-between items-center p-4 bordered rounded-3xl'>
        <div >
          <a href='#home'>
            <p className="font-light px-8">
              Home
            </p>
          </a>
        </div>
        <div >
          <a href='#features'>
            <p className="font-light px-8">
              features
            </p>
          </a>
        </div>
        <div >
          <a href='#try'>
            <p className="font-light px-8">
              Try
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}