export const SESSION_SET_TOKEN = 'SESSION_SET_TOKEN';

export const initialState = {
  ot: 'DEFAULT_TOKEN'
};

export const sessionSetToken = (token: string) => {
  return {
    type: SESSION_SET_TOKEN,
    payload: token
  };
};
