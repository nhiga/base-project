import { userSetInfo } from '../user-actions';

describe('user-actions', () => {
  it('Creates a USER_SET_INFO action', () => {
    const action = userSetInfo({ firstName: 'first', lastName: 'last', roleId: 1 });
    expect(action).toEqual({ type: 'USER_SET_INFO', payload: { firstName: 'first', lastName: 'last', roleId: 1 } });
  });
});
