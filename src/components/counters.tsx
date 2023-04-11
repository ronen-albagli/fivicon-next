import { sleep } from '@/pages';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fontSizes, pallette, Text } from '../shared/texts';

export const Counter = ({ title, number, startCount = true }: any) => {
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    startCountUp();
  }, [initial]);

  const startCountUp = async () => {
    if (initial < number) {
      await sleep(50);
      setInitial(initial + 1);
    }
  };
  return (
    <CounterWrapper>
      <Text size={fontSizes.title} color={pallette.lightGray}>
        {title}
      </Text>
      <Text size={fontSizes.title} color={pallette.lightGray}>
        {initial}
      </Text>
    </CounterWrapper>
  );
};

const CounterWrapper = styled.div`
  padding: 12px;
`;
