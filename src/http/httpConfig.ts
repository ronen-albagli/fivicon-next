export const httpConfig = {
  local: {
    base: 'https://api.fivicon-local.com:3090/',
  },
  k8s: {
    base: 'http://localhost:3090/',
  },
  staging: {
    base: 'https://api.fivicon-staging.com/',
  },
  production: {
    // base: 'https://api.fivicon.com/',
    base: 'https://fivicon.com/node/',
  },
};
