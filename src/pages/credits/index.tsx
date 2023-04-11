/* eslint-disable react/no-unescaped-entities */
import { FiviconRights } from '@/components/footer';
import { AppHead } from '@/components/head';
import Header from '@/components/header';
import { Section, TextContainersAnimate } from '@/shared/styledComponents';
import {
  fontSizes,
  fontWeights,
  HeaderText,
  pallette,
  Text,
} from '@/shared/texts';
import GlobalStyle from '@/styles/Globals';
import styled from 'styled-components';

const Privacy = () => {
  return (
    <>
      <GlobalStyle />
      <AppHead />
      <Header />
      <MainContent>
        <Section height={'60vh'} background={pallette.backgroundLightBlack}>
          <TextContainersAnimate>
            <HeaderText
              size={fontSizes?.superTitle}
              weight={fontWeights?.superLight}
              style={{ marginBottom: '60px' }}
              color={pallette?.white}
            >
              Credits!
            </HeaderText>
          </TextContainersAnimate>
        </Section>
        <Section
          height={'unset'}
          background={pallette.white}
          style={{
            padding: '24px 24px',
            textAlign: 'start',
            alignItems: 'start',
          }}
        >
          <Text
            style={{}}
            size={fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
          >
            Fivicon expresses gratitude for the contributions of talented
            individuals who have generously shared their knowledge and work with
            the public to help us provide the best UI/UX experience. Some of the
            design elements and ideas that enhance our platform include the
            following:
          </Text>
          <Text
            size={fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
          >
            1. The starry background animation on the main screen by Ashleyy -{' '}
            <a target="_blank" href="https://lottiefiles.com/ashleycmy">
              (https://lottiefiles.com/ashleycmy)
            </a>{' '}
          </Text>
          <Text
            size={fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
          >
            2. The button loader on the trial page by Viraj Nemlekar
            <a target="_blank" href="https://lottiefiles.com/VirajNemlekar">
              (https://lottiefiles.com/VirajNemlekar)
            </a>
          </Text>
          <Text
            size={fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
          >
            3. The main loader by Tamojit Das{' '}
            <a target="_blank" href="https://lottiefiles.com/tamojitdas">
              (https://lottiefiles.com/tamojitdas)
            </a>
          </Text>
          <Text
            size={fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
          >
            4. The API section animation on the home page by Alexander Plaksin{' '}
            <a target="_blank" href="https://lottiefiles.com/Alexander.Plaksin">
              (https://lottiefiles.com/Alexander.Plaksin)
            </a>
          </Text>
          <Text
            size={fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
          >
            5. The webhook animation on the home screen by Bashir Ahmed{' '}
            <a target="_blank" href="https://lottiefiles.com/directdesign22">
              (https://lottiefiles.com/directdesign22)
            </a>
          </Text>
          <Text
            size={fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
          >
            6. The 404 page animation by Sheikh Sohel{' '}
            <a target="_blank" href="https://lottiefiles.com/sheikhsohel">
              (https://lottiefiles.com/sheikhsohel)
            </a>
          </Text>
          <Text
            size={fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
          >
            7. The image not found in trial page by AgustinusST{' '}
            <a target="_blank" href="https://lottiefiles.com/1vsqhhgk8n">
              (https://lottiefiles.com/1vsqhhgk8n)
            </a>
          </Text>
          <Text
            size={fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
          >
            8. The limit reached animation by 최원진
            <a target="_blank" href="https://lottiefiles.com/phmdm2afos">
              (https://lottiefiles.com/phmdm2afos)
            </a>
          </Text>
        </Section>
        <FiviconRights />
      </MainContent>
    </>
  );
};

const MainContent = styled.main`
  p {
    text-align: start;
    margin: 8px;
    line-height: 2;
  }
  .titles {
    font-size: ${fontSizes.title};
  }

  .details {
    font-size: ${fontSizes.xlarge};
  }

  @media only screen and (max-width: 767px) {
    p {
      font-size: 18px;
    }
  }
`;

export default Privacy;
