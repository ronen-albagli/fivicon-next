import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  async login(req, res) {
    try {
      const data: any = await handleLogin(req, res, {
        authorizationParams: {
          redirect_uri: "https://fivicon.com/api/auth/callback",
          scope: 'openid profile email offline_access',
        },
        returnTo: '/callback',
      }
      );

      res.status(302).send({ data });
    } catch (error: any) {
      console.error(error);
    }
  },
});


// import { handleAuth } from '@auth0/nextjs-auth0';
// export default handleAuth();
