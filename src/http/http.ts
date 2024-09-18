import axios from 'axios';
import { httpConfig } from './httpConfig';

export const baseHTTP = (accessToken?: string) => {
  const httpEnvConfig = (httpConfig as any)[
    process?.env?.NEXT_PUBLIC_ENV || 'production'
  ] as any;

  const baseHttp = axios.create({
    baseURL: httpEnvConfig.base,
    timeout: 50000,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return baseHttp;
};
