import { SESSION_SET_TOKEN } from '../actions/session-actions';

export const initialState = {
  ot: 'DEFAULT_TOKEN'
};

const sessionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SESSION_SET_TOKEN:
      state = {
        ...state,
        ot: action.payload
      };
  }
  return state;
};

export default sessionReducer;
