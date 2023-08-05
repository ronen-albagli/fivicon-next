import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  async login(req, res) {
    try {
      const data :any = await handleLogin(req, res, {
        authorizationParams: {
          redirect_uri: "https://fivicon-local.com:3000/api/auth/callback",
          scope: 'openid profile email offline_access',
        },
        returnTo: '/callback',
      }
      );

      console.log('in$$$$$')

      // const accessToken = data?.user?.idToken;

      res.status(304).send({})
    } catch (error:any) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  },
});


// import { handleAuth } from '@auth0/nextjs-auth0';
// export default handleAuth();
