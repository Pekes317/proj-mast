import { config } from 'firebase-functions';

export const getGmailCreds = () => {
  const gmail = config().gmail;
  const envLogin = process.env.GMAIL_LOGIN || '';
  const envPass = process.env.GMAIL_PASS || '';
  const creds = {
    login: gmail ? (gmail.login as string) : envLogin,
    pass: gmail ? (gmail.pass as string) : envPass,
  };

  return creds;
};
