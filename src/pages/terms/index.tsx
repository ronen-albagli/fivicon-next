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

const Terms = () => {
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
              Terms and conditions
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
            size={fontSizes?.xlarge}
            color={pallette?.darkBlack}
            weight={fontWeights?.light}
          >
            These terms and conditions ("Terms") govern your use of the
            "Fivicon" app ("App"), including its features, services, and
            content. By using the App, you agree to be bound by these Terms.
          </Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            1. Use of the App
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            The App is intended for the sole purpose of obtaining companies'
            logos. You may use the App only for this intended purpose and in
            accordance with these Terms.
          </Text>
          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            2. Authentication
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            The App uses Google and Auth0 for authentication purposes only. By
            using the App, you agree to comply with the terms of use and privacy
            policies of Google and Auth0.
          </Text>
          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            3. Ownership and Intellectual Property
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            The App and its content, including all URLs and trademarks obtained
            through the App, are the property of the App's owners or its
            licensors and are protected by copyright, trademark, and other
            intellectual property laws. You may not reproduce, distribute,
            modify, or create derivative works of the App or its content without
            the prior written consent of the App's owners.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            4. Data Supply
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            The App supplies only the URLs to the companies' website assets and
            does not store the images themselves on any device or storage. The
            user may use the URLs obtained through the App at their own risk and
            discretion. Fivicon shall not be responsible for any use or misuse
            of the URLs by the user after they are obtained through the App. By
            using the App, you agree to not hold Fivicon liable for any damages
            or losses resulting from your use of the URLs obtained through the
            App.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            5. Disclaimer of Warranties
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            The App is provided on an "as is" and "as available" basis, without
            any warranties of any kind, express or implied. The App's owners do
            not warrant that the App will be error-free or uninterrupted, or
            that any defects in the App will be corrected. The App's owners do
            not make any representations or warranties regarding the use or
            results of the App or its content in terms of accuracy, reliability,
            or otherwise.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            6. Limitation of Liability
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            To the maximum extent permitted by law, the App's owners shall not
            be liable for any direct, indirect, incidental, special,
            consequential, or punitive damages arising out of or relating to the
            use or inability to use the App, even if the App's owners have been
            advised of the possibility of such damages.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            7. Indemnification
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            You agree to indemnify and hold the App's owners and their
            affiliates, directors, officers, employees, and agents harmless from
            any and all claims, liabilities, damages, costs, and expenses,
            including reasonable attorneys' fees, arising out of or relating to
            your use of the App or any violation of these Terms.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            8. Governing Law and Jurisdiction
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            These Terms and your use of the App shall be governed by and
            construed in accordance with the laws of the jurisdiction where the
            App's owners are located. Any legal action or proceeding arising out
            of or relating to these Terms or your use of the App shall be
            brought exclusively in the courts of that jurisdiction.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            9. Modifications to the Terms
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            The App's owners may modify these Terms at any time, in their sole
            discretion. Your continued use of the App after any such
            modification constitutes your acceptance of the modified Terms.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            10. Termination
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            The App's owners may terminate your access to and use of the App at
            any time, for any reason or no reason, without notice or liability.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            11. Entire Agreement
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            These Terms constitute the entire agreement between you and the
            App's owners regarding your use of the App, superseding any prior
            agreements between you and the App's owners. If any provision of
            these Terms is found to be invalid or unenforceable, the remaining
            provisions shall
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
`;

export default Terms;
