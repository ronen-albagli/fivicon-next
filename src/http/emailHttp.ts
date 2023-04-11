import { baseHTTP } from './http';

const http = baseHTTP;

export const EmailHttp = {
  listEmails:
    (access: string) =>
    (page = 1) =>
      http(access).get(`integrations/google/gmail/latest?page=${page}`),
  getChatMessage: (access: string) => (messagesIds: string) => {
    return http(access).get(
      `integrations/google/gmail/message/content?${new URLSearchParams({
        messageIds: messagesIds,
      }).toString()}`
    );
  },
  syncEmails: (access: string) =>
    http(access).get(`integrations/google/gmail/list`),
};
