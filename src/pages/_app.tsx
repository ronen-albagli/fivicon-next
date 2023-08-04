import '@/styles/globals.css';
import { initGA, logPageView } from '../utils/ga';
import type { AppProps } from 'next/app';
import { withRouter } from 'next/router';
import { useEffect } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default function App({ Component, pageProps }: AppProps) {
  // initGA('G-JD6976L2TL');
  // const TrackedComponent = withRouter(Component);
  const { user } = pageProps

  console.log('user',user)

  return( 
   <UserProvider user={user}>
    <Component {...pageProps} />
  </UserProvider>
  )
}
