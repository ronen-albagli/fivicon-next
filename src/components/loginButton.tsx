import { Button } from '@/shared/buttons';
import { fontSizes, fontWeights, pallette, Text } from '@/shared/texts';
import Link from 'next/link';
import { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { Avatar } from './Avatar';
import { Menu } from './menu';

export const AvatarMenuSection = ({ user }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <LoginWrapper>
      <>
        <Button color={pallette.lightWhite}>
          <Link href={ !user  ? '/api/auth/login' :'/console/api'}>
            <Text weight={fontWeights.big} color={pallette.lightWhite}>
            { !user  ? 'Login' : 'Console'}
            </Text>
          </Link>
        </Button>

        <MenuBurger onClick={() => setMenuOpen(!menuOpen)}>
          <Bar />
          <Bar />
          <Bar />
        </MenuBurger>
      </>
      <Menu menuOpen={menuOpen} isUserLoggedIn={!!user} />
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div<any>`
  // background-color:red;
  display: flex;
  cursor: pointer;
  button {
    background-color: transparent;
    border: 2px solid ${pallette.lightWhite};
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0px 12px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid;
    border-color: ${pallette.lightWhite};
    transition: border-color 0.3s ease;
    cursor: pointer;
    p {
      color: ${pallette.lightWhite};
      font-size: ${fontSizes.large};
      /* font-weight: ${fontWeights.superLight}; */
      transition: color 0.3s ease;
    }

    &:hover {
      border-color: white;
      p {
        color: white;
      }
    }
  }
`;

const MenuBurger = styled.div`
  width: 38px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 6px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  /* border-top-left-radius: 0;
  border-bottom-left-radius: 0; */
  border: 2px solid ${pallette.lightWhite};
  /* border-left: 1px solid transparent; */
  transition: border-color 0.3s ease;

  &:hover {
    border-color: white;
    div {
      &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: white;
      }
    }
  }
`;

const Bar = styled.div`
height: 2px;  
width: 50%;
background-color: ${pallette.lightWhite};
align-self:center;
display:flex;
position: relative;

// transition-delay: 2s;
// transition-property: background-color;
// transition: all 0.5s ease-in-out;
// transition-delay: s;

&:nth-child(1) {
&:after {
  position: absolute;
  content:'';
  width: 0%;
  height: 100%;
  background-color: white;


    transition: width .3s ease;
    transition-delay: 200ms;
  }
  }

  &:nth-child(2) {
    &:after {
      position: absolute;
      content:'';
      width: 0%;
      height: 100%;
      background-color: white;
    
    
        transition: width .3s ease;
        transition-delay: 100ms;
      }
      }

      &:nth-child(3) {
        &:after {
          position: absolute;
          content:'';
          width: 0%;
          height: 100%;
          background-color: white;
        
        
            transition: width .3s ease;
            transition-delay: 300ms;
          }
          }
}

`;
