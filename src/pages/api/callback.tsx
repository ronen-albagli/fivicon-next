import { userHttp } from '@/http/userHttp';
import { getAccessToken, getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import { useUser } from '@auth0/nextjs-auth0/client';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export default async  function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
    console.log('process.env.AUTH0_CLIENT_SECRET',process.env.AUTH0_CLIENT_SECRET)

    try {
      var options = {
        method: 'POST',
        url: `${process.env.AUTH0_BASE_URL}/oauth/token`,
        headers: {'content-type': 'application/json'},
        data:
            {
                "client_id":process.env.AUTH0_CLIENT_ID,
                "client_secret":process.env.AUTH0_CLIENT_SECRET,
                "audience": `${process.env.AUTH0_BASE_URL}/api/v2/`,
                "grant_type":"client_credentials"

            }
      };

        const {data: {access_token}} = await axios.request(options);

        if( access_token){
            const session = await getSession(req, res);
            const auth0UserId = session?.user?.sub;

            
            await userHttp.signInUser(access_token)(auth0UserId)

            res.status(204).json({})
        }
        
} catch (error) {
    res.status(400).json({})
    console.log('ERRROR', error)       
}
}
  