import { CodeBlock } from '@/components/codeBlock';
import { AppHead } from '@/components/head';
import Header from '@/components/header';
import { SideMenu } from '@/components/sideMenu';
import { fontSizes, fontWeights, HeaderText, Text } from '@/shared/texts';
import { ConsoleContainer, ConsoleLayout, Content } from '.';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ApiPage = () => {
  const [apiKey, setApiKey] = useState(null)

  useEffect(()=>{
    getApiKey()
  },[])

  const getApiKey = async () => {
    const {data: api} = await axios.get('/api/user-api-key')
    console.log('api.data',api.data)
    setApiKey(api.data)
  }

  const handleCopyClicked = () => {
    apiKey && navigator.clipboard.writeText(apiKey);
  };

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
          <CodeBlock code={`${apiKey}`} type="bash"     onCopy={handleCopyClicked}/>
        </Content>
      </ConsoleLayout>
    </ConsoleContainer>
  );
};

export default ApiPage;
