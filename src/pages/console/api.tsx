import { CodeBlock } from '@/components/codeBlock';
import { AppHead } from '@/components/head';
import Header from '@/components/header';
import { SideMenu } from '@/components/sideMenu';
import { fontSizes, fontWeights, HeaderText, Text } from '@/shared/texts';
import { ConsoleContainer, ConsoleLayout, Content } from '.';

const ApiPage = () => {
  return (
    <ConsoleContainer>
      <AppHead />
      <Header background={'#141a1f'} />
      <ConsoleLayout>
        <SideMenu />
        <Content>
          <HeaderText size={fontSizes.subTitle}>Fivicon API</HeaderText>
          <Text
            style={{ padding: '12px 0px' }}
            size={fontSizes.large}
            weight={fontWeights.light}
          >
            Your API key
          </Text>
          <CodeBlock code={'Create account to get your api key'} type="bash" />
        </Content>
      </ConsoleLayout>
    </ConsoleContainer>
  );
};

export default ApiPage;
