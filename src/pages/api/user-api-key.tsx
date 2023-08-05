import { userHttp } from '@/http/userHttp';
import { getAccessToken, getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import { useUser } from '@auth0/nextjs-auth0/client';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { iconHttp } from '@/http/iconHttp';
import { use } from 'react';

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
                    "client_id": process.env.AUTH0_CLIENT_ID,
                    "client_secret":process.env.AUTH0_CLIENT_SECRET,
                    "audience": `${process.env.AUTH0_BASE_URL}/api/v2/`,
                    "grant_type":"client_credentials"

                }
          };

        const {data: {access_token}} = await axios.request(options);

        if( access_token){
            const {data: response} = await userHttp.getMyApiKey(access_token)()

            res.status(200).json({data: response})
        }
        
} catch (error) {
    res.status(400).json({})
    console.log('ERRROR', error)       
}
}
  