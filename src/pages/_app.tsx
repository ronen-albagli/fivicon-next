import '@/styles/globals.css';
import { initGA, logPageView } from '@/utils/ga';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initGA('G-JD6976L2TL');
    logPageView();
  }, []);
  return <Component {...pageProps} />;
}
