import '@/styles/globals.css';
import { initGA, logPageView } from '../utils/ga';
import type { AppProps } from 'next/app';
import { withRouter } from 'next/router';
import { useEffect } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client'

export default function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps

  return( 
   <UserProvider user={user}>
    <Component {...pageProps} />
  </UserProvider>
  )
}
