import userReducer, { initialState } from '../user-reducer';

describe('user-reducer', () => {
  it('handles a USER_SET_NAME action', () => {
    expect(
      userReducer(undefined, { type: 'USER_SET_NAME', payload: { firstName: 'first', lastName: 'last' } })
    ).toEqual(Object.assign({}, initialState, { firstName: 'first', lastName: 'last' }));
  });
  it('handles a USER_SET_NAME action with initial state', () => {
    const mockInitialState = initialState;
    mockInitialState.firstName = 'FIRST_NAME';
    mockInitialState.lastName = 'LAST_NAME';
    expect(
      userReducer(mockInitialState, { type: 'USER_SET_NAME', payload: { firstName: 'first', lastName: 'last' } })
    ).toEqual(Object.assign({}, mockInitialState, { firstName: 'first', lastName: 'last' }));
  });
});
