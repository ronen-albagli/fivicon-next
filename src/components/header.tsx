import { fontSizes, fontWeights, Text } from '@/shared/texts';
import Link from 'next/link';
import styled from 'styled-components';
import { AvatarMenuSection } from './loginButton';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

const Header = ({ background = 'transparent' }: any) => {
  useEffect(() => {}, []);
  const { user } = useUser()

  return (
    <AppHeaderWrapper background={background}>
      <IconWrapper>
        <Text
          color={'#36557b'}
          weight={fontWeights?.bold}
          size={fontSizes?.subTitle}
        >
          <Link href="/">fivicon</Link>
        </Text>
      </IconWrapper>
      <nav>
      </nav>
      <AvatarMenuSection user={user} />
    </AppHeaderWrapper>
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
