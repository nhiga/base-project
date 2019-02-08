export const SESSION_SET_OAUTH_TOKEN = 'SESSION_SET_OAUTH_TOKEN';
export type SESSION_SET_OAUTH_TOKEN = typeof SESSION_SET_OAUTH_TOKEN;
export const SESSION_SET_AUTHENTICATED = 'SESSION_SET_AUTHENTICATED';
export type SESSION_SET_AUTHENTICATED = typeof SESSION_SET_AUTHENTICATED;

interface OAuthToken {
  ot: string;
}

interface IsAuthenticated {
  isAuthenticated?: boolean;
}

// SessionState is the intersection of Session interfaces
export type SessionState = OAuthToken & IsAuthenticated;

// #region ACTION CREATORS
export interface SessionSetOAuthToken {
  type: SESSION_SET_OAUTH_TOKEN;
  payload: string;
}

export const sessionSetOAuthToken = (token: OAuthToken) => {
  return {
    type: SESSION_SET_OAUTH_TOKEN,
    payload: token.ot
  };
};

export interface SessionSetAuthenticated {
  type: SESSION_SET_AUTHENTICATED;
  payload: boolean;
}

export const sessionSetAuthenticated = (isAuthenticated: boolean) => {
  return {
    type: SESSION_SET_AUTHENTICATED,
    payload: isAuthenticated
  };
};
// #endregion ACTION CREATORS

// SessionActionType is the union of User actions
export type SessionActionType = SessionSetOAuthToken | SessionSetAuthenticated;
