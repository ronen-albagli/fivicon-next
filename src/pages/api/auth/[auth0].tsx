import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  async login(req, res) {
    try {
      const { user }:any = await handleLogin(req, res, {
        authorizationParams: {
          scope: 'openid profile email offline_access',
        },
        returnTo: '/callback',
      });

      const accessToken = user.idToken;

      res.writeHead(302, { Location: '/' });
      res.end();
    } catch (error:any) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  },
});
