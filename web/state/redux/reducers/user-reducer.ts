import { USER_SET_INFO, UserInfo, UserActionType } from '../actions/user-actions';

export const initialState = {
  firstName: 'DEFAULT_FIRST_NAME',
  lastName: 'DEFAULT_LAST_NAME',
  roleId: 0
};

const userReducer = (state: UserInfo = initialState, action: UserActionType) => {
  switch (action.type) {
    case USER_SET_INFO:
      return {
        ...state,
        ...action.payload
      };
  }
  return state;
};

export default userReducer;
