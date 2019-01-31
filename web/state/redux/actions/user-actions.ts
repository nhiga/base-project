export const USER_SET_NAME = 'USER_SET_NAME';
export type USER_SET_NAME = typeof USER_SET_NAME;

export interface UserName {
  firstName: string;
  lastName: string;
}

export interface UserRole {
  roleId: number;
}

export type UserState = UserName & UserRole;

export interface UserSetName {
  type: USER_SET_NAME;
  payload: UserName;
}

export type UserAction = UserSetName;

export const userSetName = (name: UserName) => {
  return {
    type: USER_SET_NAME,
    payload: name
  };
};
