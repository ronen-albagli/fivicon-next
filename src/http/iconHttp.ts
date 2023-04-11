import { baseHTTP } from './http';

const http = baseHTTP;

export const iconHttp = {
  searchIcon: (access: string) => (domainName: string) =>
    http(access).get(`dashboard-api/trial/logo?name=${domainName}`),
  compliant: (access: string) => (url: string, domain: string) =>
    http(access).post(`dashboard-api/logo/compliant`, { url, domain }),
};
