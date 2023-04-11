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
              Privacy Policy
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
            Effective Date: {new Date('2023-03-20').toLocaleDateString()}
          </Text>
          <Text
            size={fontSizes?.xlarge}
            color={pallette?.darkBlack}
            weight={fontWeights?.light}
          >
            At Fivicon, we value and respect the privacy of our users. This
            Privacy Policy explains how we collect, use, and disclose
            information about you when you use our mobile application, Fivicon
            (the "App"). By using the App, you consent to the collection, use,
            and disclosure of your information in accordance with this Privacy
            Policy.
          </Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            1. Collection of Information
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            When you use our search engine service, we collect the domain name
            keyword you enter into our search engine. We also collect your IP
            address and browser type to help us diagnose problems with our
            servers and to administer our website. We do not collect any other
            personal information about you, such as your name or email address.
          </Text>
          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            2. Use of Information
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            The App uses personal information solely for the purpose of
            providing the services of the App, such as retrieving companies'
            logos based on the ID provided by Google or Auth0. The App does not
            use personal information for any other purpose.
          </Text>
          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            3. Disclosure of Information
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            We do not disclose your information to any third parties, except as
            required by law or as necessary to protect our rights, property, or
            safety.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            4. Security
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            We take the security of your information seriously and use
            industry-standard security practices to protect your information
            from unauthorized access, disclosure, alteration, or destruction. We
            also limit access to your information to authorized personnel who
            require access to perform their duties. We regularly review our
            security practices to ensure that they meet or exceed industry
            standards.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            5. Third Party Services
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            We use third-party services, such as Google and Auth0, as our
            identity providers. When you log in using these services, we collect
            your Google ID or Auth0 ID and store it in our database. We do not
            store any other personal information about you, such as your email
            address or profile picture. We only store the user ID provided by
            Google or Auth0, and not any other user information. Please note
            that these third-party services have their own privacy policies, and
            we encourage you to review their policies before using our services.
          </Text>

          <Text></Text>
          <Text
            // size={fontSizes.title}
            weight={fontWeights.light}
            color={pallette.darkBlack}
            className={'titles'}
          >
            6. Changes to the Policy
          </Text>
          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal reasons. If we make material
            changes to this policy, we will notify you by posting a prominent
            notice on our website or by email.
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
          <Text></Text>
          <Text></Text>

          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            If you have any questions or concerns about our Privacy Policy or
            our practices regarding your personal information, please contact us
            at
            <span style={{ textDecoration: 'underline', margin: '0px 10px;' }}>
              <a
                style={{ color: 'inherit', margin: '0px 6px' }}
                href="mailto:support@fivicon.com"
              >
                support@fivicon.com
              </a>
            </span>
            . We will respond to your inquiry as quickly as possible.
          </Text>

          <Text
            style={{}}
            // size={isMobile ? fontSizes.large : fontSizes.xxlarge}
            weight={fontWeights.superLight}
            color={pallette.darkBlack}
            className={'details'}
          >
            Thank you for choosing Fivicon! We are committed to providing you
            with the best possible service while safeguarding your personal
            information.
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

export default Privacy;
