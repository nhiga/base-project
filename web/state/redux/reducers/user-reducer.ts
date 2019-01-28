export const USER_SET_NAME = 'USER_SET_NAME';

export const initialState = {
  firstName: 'DEFAULT_FIRST_NAME',
  lastName: 'DEFAULT_LAST_NAME'
};

const userReducer = (state = initialState, action: any) => {
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
