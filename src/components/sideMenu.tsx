import styled, { css } from 'styled-components';
// import { ImgRenderer, SvgRender } from '../shared/svgRenderer';
import { fontSizes, fontWeights, pallette, Text } from '../shared/texts';
import EmailSVG from '../../assets/svg/mail.svg';
import CalenderSVG from '../../assets/svg/calender.svg';

import { useEffect, useState } from 'react';
import CodeSVG from '@/assets/svg/code.svg';
import DashboardSVG from '@/assets/svg/dashboard.svg';
import CoffieSVG from '@/assets/svg/coffie.svg';
import SettingsSVG from '@/assets/svg/settings.svg';
import ActivitySVG from '@/assets/svg/activity.svg';
import { SvgRender } from '@/shared/images';
import { useRouter } from 'next/router';
// import { Avatar } from '../shared/avatar';
// import { ProfileMenuMobile } from './header';

export const SideMenu = ({ isMobile }: any) => {
  //   const { user } = useAuth0();
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (navigateTo: string) => {
    if (navigateTo) {
      router.push(navigateTo);
    }
  };

  return (
    <SideMenuContainer open={menuOpen}>
      <MenuList>
         <MenuElement 
              // isMobile={isMobile}
            // key={i}
            // active={element.to === activeRoute}
            // onClick={() => !element.soon && navigate(element.to)}
            onClick={() => navigate('/console/api')}
         >
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
          <Group>
            <Text weight={fontWeights.light}>Api</Text>
          </Group>
          {/* <NotificationBox
            number={element.notificationNumber}
          ></NotificationBox> */}
        </MenuElement>
        <MenuElement
          //   //   isMobile={isMobile}
          //   key={i}
          //   active={element.to === activeRoute}
          //   onClick={() => !element.soon && navigate(element.to)}
          onClick={() => navigate('/console/docs')}
        >
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
          <Group>
            <Text weight={fontWeights.light}>Docs</Text>
          </Group>
          {/* <NotificationBox
            number={element.notificationNumber}
          ></NotificationBox> */}
        </MenuElement>
        {/* <MenuElement
          //   //   isMobile={isMobile}
          //   key={i}
          //   active={element.to === activeRoute}
          //   onClick={() => !element.soon && navigate(element.to)}
          onClick={() => navigate('/console/settings')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            class="humbleicons hi-cog"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.47 4.32c.602-1.306 2.458-1.306 3.06 0l.218.473a1.684 1.684 0 002.112.875l.49-.18c1.348-.498 2.66.814 2.162 2.163l-.18.489a1.684 1.684 0 00.875 2.112l.474.218c1.305.602 1.305 2.458 0 3.06l-.474.218a1.684 1.684 0 00-.875 2.112l.18.49c.498 1.348-.814 2.66-2.163 2.162l-.489-.18a1.684 1.684 0 00-2.112.875l-.218.473c-.602 1.306-2.458 1.306-3.06 0l-.218-.473a1.684 1.684 0 00-2.112-.875l-.49.18c-1.348.498-2.66-.814-2.163-2.163l.181-.489a1.684 1.684 0 00-.875-2.112l-.474-.218c-1.305-.602-1.305-2.458 0-3.06l.474-.218a1.684 1.684 0 00.875-2.112l-.18-.49c-.498-1.348.814-2.66 2.163-2.163l.489.181a1.684 1.684 0 002.112-.875l.218-.474z"
            />
          </svg>
          <Group>
            <Text weight={fontWeights.light}>Settings</Text>
          </Group>
          {/* <NotificationBox
            number={element.notificationNumber}
          ></NotificationBox> */}
      </MenuList>
    </SideMenuContainer>
  );
};

const NotificationBox = ({ number }: any) => {
  if (!number) return <></>;
  return (
    <NotificationBoxWrapper display={number}>
      <Text size={fontSizes.small}>{number}</Text>
    </NotificationBoxWrapper>
  );
};

const SoonStrip = styled.span<any>`
  position: absolute;
  background-color: #0096886b;
  height: 20px;
  width: 60px;
  right: 0;
  border: 1px solid #4caf50;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${pallette.white};

  svg {
    height: 12px;
    width: 12px;
    margin-left: 5px;
  }
  p {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Group = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NotificationBoxWrapper = styled.div<any>`
  height: 20px;
  width: 20px;
  background-color: ${({ display }) => (display ? 'black' : 'transparent')};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const SideMenuContainer = styled.div<any>`
  width: ${({ open }) => (open ? '250px' : '45px')};
  height: 100vh;
  position: relative;
  left: 0;
  border-right: 1px solid #222830;
  overflow:hidden;
  transition: width: .4s ease;
`;

const MenuList = styled.ul<any>`
  list-style: none;
  padding: 0px 0px;
`;

const MenuElement = styled.li<any>`
  padding: ${(props) => (props.isMobile ? '6px' : '6px 22px')};
  margin: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  p {
    margin-left: 12px;
  }
  svg {
    position: absolute;
    height: 20px;
    width: 20px;
    left: 0;

    /* margin-top: ${(props) => (props.isMobile ? '4px' : 'unset')}; */
  }
  ${({ active }) =>
    active &&
    css`
      background-color: #202934;
    `}
`;
