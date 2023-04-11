import { baseHTTP } from './http';

const http = baseHTTP;

export const publicHttp = {
  getFiviStats: () => http().get(`public/stats`),
  searchIcon: () => (domainName: string) =>
    http().get(`public/trial/logo?name=${domainName}`),
};
