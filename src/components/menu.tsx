import { SvgRender } from '@/shared/images';
import Link from 'next/link';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import DashboardSVG from '../../public/svg/dashboard.svg';
import { fontSizes, pallette, Text } from '@/shared/texts';

export const Menu = ({ menuOpen: isOpen = false, isUserLoggedIn }: any) => {

  console.log('isUserLoggedIn',isUserLoggedIn)
  return (
    <MenuContainer isOpen={isOpen} isUserLoggedIn={isUserLoggedIn} tabIndex="1">
      <MenuListWrapper>
        {/* {isUserLoggedIn ?
        <MenuListElement>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="humbleicons hi-dashboard"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              strokeWidth="2"
              d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zm10-3a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z"
            />
          </svg>
          <Link href={'/console/api'}>
            <Text>Console</Text>
          </Link>
        </MenuListElement>
        : 
        <MenuListElement>
          <Link href={'/api/auth/login'}>
            <Text>Login</Text>
          </Link>
        </MenuListElement>
} */}
        <MenuListElement>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="humbleicons hi-coffee"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 12H4v4a4 4 0 004 4h5a4 4 0 004-4v-4zm0 0h2a2 2 0 012 2v1a2 2 0 01-2 2h-2m-4-8s1-1 .5-2l-1-2C12 4 13 3 13 3M8.64 9s1-1 .5-2l-1-2c-.5-1 .5-2 .5-2"
            />
          </svg>
          <Link href={'/console/docs'}>
            <Text>Docs</Text>
          </Link>
        </MenuListElement>
        <MenuListElement>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="humbleicons hi-code"
          >
            <g
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <path strokeLinejoin="round" d="M7 8l-4 4 4 4" />
              <path d="M10.5 18l3-12" />
              <path strokeLinejoin="round" d="M17 8l4 4-4 4" />
            </g>
          </svg>
          <Link href="/trial">
            <Text>Trial</Text>
          </Link>
        </MenuListElement>
          {isUserLoggedIn &&
        <MenuListElement>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="humbleicons hi-logout"><path xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1"/></svg>
          <Link href="/api/auth/logout">
            <Text>logout</Text>
          </Link>
        </MenuListElement>
        }
      </MenuListWrapper>
    </MenuContainer>
  );
};

const MenuContainer = styled.div<any>`
  position: absolute;
  background-color: transparent;
  top: 10px;
  right: 10px;
  border-radius: 4px;
  height: 0px;
  overflow: hidden;
  transition: height 0.3s ease;
  width: 140px;
  border-radius: 12px;

  ul {
    opacity: 0;
    padding: 0px;
    overflow: hidden;
    top: -9px;
    li {
      /* z-index: -1; */
      font-size: ${fontSizes.large};
    }
    /* padding: 4px 12px; */
  }

  ${(props: any) =>
    props.isOpen &&
    css`
      /* &:focus { */
      height: ${props.isUserLoggedIn ? '160px' : '120px'};
      top: 60px;
      background-color: #434343;
      ul {
        padding: 12px;

        opacity: 1;
        &:after {
          content: '';
          position: absolute;
          right: 34px;
          top: -9px;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #434343;
          clear: both;
          transform: rotate(180deg);
        }
      }
    `}/* } */
`;

const MenuListWrapper = styled.ul<any>`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MenuListElement = styled.li<any>`
  /* margin: 12px 0px; */
  display: flex;
  align-items: center;
  margin: 12px 0px;
  p {
    font-weight: 300;
    font-size: ${fontSizes.xlarge};
  }
  svg {
    height: 20px;
    width: 20px;
    margin-right: 8px;
  }
`;
