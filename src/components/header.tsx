import { fontSizes, fontWeights, Text } from '@/shared/texts';
import Link from 'next/link';
import styled from 'styled-components';
import { AvatarMenuSection } from './loginButton';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

const Header = ({ background = 'transparent' }: any) => {
  useEffect(() => { }, []);
  const { user } = useUser()



  return (
    <AppHeaderWrapper background={background}>
      <div className='flex w-full justify-between px-[2%] mt-4'>
        <IconWrapper>
          {/* <Text
          color={'#36557b'}
          weight={fontWeights?.bold}
          size={fontSizes?.subTitle}
        > */}
          <Link href="/">
            <p className="text-2xl text-[#848484] ">fivicon</p>
          </Link>
          {/* <Link href="/">fivicon</Link> */}
          {/* </Text> */}
        </IconWrapper>
        {user ?
          <button className="flex header-module module-button ml-25 bg-[#262626]  rounded-xl">
            <Link href="/console/api"
              style={{ letterSpacing: "1.3px" }}
              className="btn btn-solid btn-xs uppercase px-[19.5px] py-[7.5px]"
              data-localscroll="true">
              <span className="text-xs font-medium text-white">Console</span>
            </Link>
          </button>
          :
          <button className="flex header-module module-button ml-25 bg-[#262626]  rounded-xl">
            <a href="./api/auth/login" target="_blank"
              style={{ letterSpacing: "1.3px" }}
              className="btn btn-solid btn-xs uppercase  px-[19.5px] py-[7.5px]"
              data-localscroll="true">
              <span className="text-xs font-medium text-white"> Login</span>
            </a>
          </button>
        }
        {/* <AvatarMenuSection user={user} /> */}
      </div>
    </AppHeaderWrapper >
  );
};

const IconWrapper = styled.span``;

const AppHeaderWrapper = styled.header<any>`
  height: 60px;
  width: 100vw;
  background-color: ${(props) => props.background};
  display: flex;
  align-items: center;
  padding-left: 22px;
  padding-right: 22px;
  position: fixed;
  z-index: 1000;
  justify-content: space-between;
`;

export default Header;
