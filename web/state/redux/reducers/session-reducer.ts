import {
  SESSION_SET_OAUTH_TOKEN,
  SESSION_SET_AUTHENTICATED,
  SessionState,
  SessionActionType
} from '../actions/session-actions';

export const initialState: SessionState = {
  ot: 'DEFAULT_TOKEN',
  isAuthenticated: false
};

const sessionReducer = (state: SessionState = initialState, action: SessionActionType) => {
  switch (action.type) {
    case SESSION_SET_OAUTH_TOKEN:
      return {
        ...state,
        ot: action.payload
      };
    case SESSION_SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload
      };
  }
  return state;
};

export default sessionReducer;
