import { baseHTTP } from './http';

const http = baseHTTP;

export const apiKeysHttps = {
  getMyApiKey: (access: string) => () =>
    http(access).get(`dashboard-api/keys/me`),
};
