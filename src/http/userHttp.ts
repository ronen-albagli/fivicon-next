import { baseHTTP } from './http';

const http = baseHTTP;

export const userHttp = {
  signInUser:
    (access: string) =>
    ({ id }: any) =>
      http(access).post(`auth/init`, { userId: id }),
};
