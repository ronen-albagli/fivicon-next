    import { httpConfig } from '@/http/httpConfig';
import { userHttp } from '@/http/userHttp';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import axios from 'axios';
import { Router, useRouter } from 'next/router';
import Bubbles from '@/assets/animations/37799-starry-background.json';
import { LottieAnimations } from '@/shared/lottie';

type ProfileProps = {
    user: any;
  };
const CallbackPage = ()  => {
    const {user} = useUser();
    const router = useRouter();
        console.log('ZAZI', user)
    useEffect(() => {
        axios
          .get('/api/callback')
          .then((response) => {
           router.push('/')
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
      }, []);

        
return  (
    <LottieAnimations zIndex={1} position="fixed" animation={Bubbles} />
)

}


export default CallbackPage