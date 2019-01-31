import { USER_SET_NAME, UserState, UserAction } from '../actions/user-actions';

export const initialState = {
  firstName: 'DEFAULT_FIRST_NAME',
  lastName: 'DEFAULT_LAST_NAME',
  roleId: 0
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case USER_SET_NAME:
      state = {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
  }
  return state;
};

export default userReducer;
