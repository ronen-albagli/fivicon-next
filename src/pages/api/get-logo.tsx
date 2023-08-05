import { userHttp } from '@/http/userHttp';
import { getAccessToken, getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import { useUser } from '@auth0/nextjs-auth0/client';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { iconHttp } from '@/http/iconHttp';

export default async  function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {

    try {
          var options = {
            method: 'POST',
            url: `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
            headers: {'content-type': 'application/json'},
            data:
                {
                    "client_id":process.env.AUTH0_CLIENT_ID,
                    "client_secret":process.env.AUTH0_CLIENT_SECRET,
                    "audience": `${process.env.AUTH0_BASE_URL}/api/v2/`,
                    "grant_type":"client_credentials"

                }
          };

        const logoName = req.body.name;

        const {data: {access_token}} = await axios.request(options);

        if( access_token){
            const {data: response} = await iconHttp.searchIcon(access_token)(logoName)

            res.status(200).json({data: response})
        }
        
} catch (error) {
    res.status(400).json({})
    console.log('ERRROR', error)       
}
}
  