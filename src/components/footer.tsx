/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { fontSizes, fontWeights, pallette, Text } from '@/shared/texts';
import { useRouter } from 'next/router';

export const FiviconRights = () => {
  const router = useRouter();

  return (
    <InfoSection
      style={{
        backgroundColor: '#2a2a2a',
        zIndex: 2,
        justifyContent: 'center',
      }}
    >
      <Text weight={fontWeights.bold} color={pallette.white}>
        fivicon
      </Text>
      <Text weight={fontWeights.superLight} color={pallette.white}>
        Contact as{' '}
        <a
          style={{ textDecoration: 'underline' }}
          href="mailto:support@fivicon.com"
        >
          support@fivicon.com
        </a>
      </Text>
      <Text weight={fontWeights.light} color={pallette.white}>
        Fivicon{' '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          <a onClick={() => router.push('/terms')}>terms and conditions</a>
        </span>{' '}
        and{' '}
        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          <a onClick={() => router.push('/privacy')}>Fivicon privacy policy</a>
        </span>
      </Text>
      <Text weight={fontWeights.superLight} color={pallette.white}>
        See our contributes in the{' '}
        <span
          onClick={() => router.push('/credits')}
          style={{ textDecoration: 'underline' }}
        >
          Credits page
        </span>
      </Text>
      <div>
        <Text weight={fontWeights.light} color={pallette.white}>
          All right reserve to fivicon ldt. {new Date().getFullYear()}
        </Text>
      </div>
    </InfoSection>
  );
};

export const InfoSection = styled.div<any>`
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

  p {
    font-size: ${fontSizes.large};
  }

  @media only screen and (max-width: 767px) {
    /* ? { padding: '0px 20%', lineHeight: '68px' } */
    /* padding: 0 10%; */
    line-height: 36px;

    button {
      margin-top: 32px;
    }

    p {
      font-size: ${fontSizes.medium} !important;
    }
    /* font-size: ${fontSizes.xxlarge}; */
  }
  height: 300px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly !important;
`;
