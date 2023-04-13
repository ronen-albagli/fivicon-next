import '@/styles/globals.css';
import { initGA, logPageView } from '@/utils/ga';
import type { AppProps } from 'next/app';
import { withRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // initGA('G-JD6976L2TL');
  // const TrackedComponent = withRouter(Component);

  return <Component {...pageProps} />;
}
