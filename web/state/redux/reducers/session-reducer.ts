import { SESSION_SET_OAUTH_TOKEN, SessionState, SessionAction } from '../actions/session-actions';

export const initialState = {
  ot: 'DEFAULT_TOKEN'
};

const sessionReducer = (state: SessionState = initialState, action: SessionAction) => {
  switch (action.type) {
    case SESSION_SET_OAUTH_TOKEN:
      state = {
        ...state,
        ot: action.payload
      };
  }
  return state;
};

export default sessionReducer;
