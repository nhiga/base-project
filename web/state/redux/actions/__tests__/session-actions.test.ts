import { sessionSetOAuthToken } from '../session-actions';

describe('session-actions', () => {
  it('Creates a SESSION_SET_OAUTH_TOKEN action', () => {
    const action = sessionSetOAuthToken({ ot: 'token' });
    expect(action).toEqual({ type: 'SESSION_SET_OAUTH_TOKEN', payload: 'token' });
  });
});
