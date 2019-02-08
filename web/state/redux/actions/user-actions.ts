import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { sessionSetOAuthToken, sessionSetAuthenticated } from './session-actions';

export const USER_SET_INFO = 'USER_SET_INFO';
export type USER_SET_INFO = typeof USER_SET_INFO;

export interface UserInfo {
  firstName?: string;
  lastName?: string;
  roleId?: number;
}

// UserState is the intersection of User interfaces
export type UserState = UserInfo /* & <AnotherUserInterface> */;

// #region USER ACTION CREATORS
interface UserSetInfo {
  type: USER_SET_INFO;
  payload: UserInfo;
}

export const userSetInfo = (userInfo: UserInfo) => {
  return {
    type: USER_SET_INFO,
    payload: userInfo
  };
};
// #endregion USER ACTION CREATORS

// UserActionType is the union of User actions
export type UserActionType = UserSetInfo /* | <AnotherUserAction> */;

// #region ASYNC ACTION CREATORS (THUNKS)
// NOTE: This login functionality is only for the purposes of thunk usage
export const userLogin = (username: string, password: string) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const credentials = {
      username,
      password
    };
    axios
      .post('/api/auth', credentials)
      .then(res => {
        console.log(`[user-actions] auth response:`, res);
        const firstName = res.data.firstName;
        const lastName = res.data.lastName;
        const roleId = res.data.roleId;
        dispatch(userSetInfo({ firstName, lastName, roleId }));
        dispatch(sessionSetOAuthToken({ ot: res.data.ot }));
        dispatch(sessionSetAuthenticated(true));
      })
      .catch(err => {
        console.log(`[user-actions] Authentication error:`, err);
      });
  };
};
// #endregion ASYNC ACTION CREATORS (THUNKS)
