import sessionReducer, { initialState } from '../session-reducer';

describe('session-reducer', () => {
  it('handles a SESSION_SET_OAUTH_TOKEN action', () => {
    expect(sessionReducer(undefined, { type: 'SESSION_SET_OAUTH_TOKEN', payload: 'token' })).toEqual(
      Object.assign({}, initialState, { ot: 'token' })
    );
  });
  it('handles a SESSION_SET_OAUTH_TOKEN action with initial state', () => {
    const mockInitialState = initialState;
    mockInitialState.ot = 'TOKEN';
    expect(sessionReducer({ ot: 'TOKEN' }, { type: 'SESSION_SET_OAUTH_TOKEN', payload: 'token' })).toEqual(
      Object.assign({}, initialState, { ot: 'token' })
    );
  });
});
