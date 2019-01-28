import { string } from 'prop-types';

export const USER_SET_NAME = 'USER_SET_NAME';

export interface IUserName {
  firstName: string;
  lastName: string;
}

export const userSetName = (name: IUserName) => {
  return {
    type: USER_SET_NAME,
    payload: name
  };
};
