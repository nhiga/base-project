import userReducer, { initialState } from '../user-reducer';

describe('user-reducer', () => {
  it('handles a USER_SET_INFO action', () => {
    expect(
      userReducer(undefined, { type: 'USER_SET_INFO', payload: { firstName: 'first', lastName: 'last', roleId: 1 } })
    ).toEqual(Object.assign({}, initialState, { firstName: 'first', lastName: 'last', roleId: 1 }));
  });
  it('handles a USER_SET_INFO action with initial state', () => {
    const mockInitialState = initialState;
    mockInitialState.firstName = 'FIRST_NAME';
    mockInitialState.lastName = 'LAST_NAME';
    expect(
      userReducer(mockInitialState, {
        type: 'USER_SET_INFO',
        payload: { firstName: 'first', lastName: 'last', roleId: 1 }
      })
    ).toEqual(Object.assign({}, mockInitialState, { firstName: 'first', lastName: 'last', roleId: 1 }));
  });
});
