export const SESSION_SET_OAUTH_TOKEN = 'SESSION_SET_OAUTH_TOKEN';
export type SESSION_SET_OAUTH_TOKEN = typeof SESSION_SET_OAUTH_TOKEN;

interface OAuthToken {
  ot: string;
}

export type SessionState = OAuthToken;

export interface SessionSetOAuthToken {
  type: SESSION_SET_OAUTH_TOKEN;
  payload: string;
}

export type SessionAction = SessionSetOAuthToken;

export const sessionSetOAuthToken = (token: string) => {
  return {
    type: SESSION_SET_OAUTH_TOKEN,
    payload: token
  };
};
