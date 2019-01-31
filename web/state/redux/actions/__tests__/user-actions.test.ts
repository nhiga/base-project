import { userSetName } from '../user-actions';

describe('user-actions', () => {
  it('Creates a USER_SET_NAME action', () => {
    const action = userSetName({ firstName: 'first', lastName: 'last' });
    expect(action).toEqual({ type: 'USER_SET_NAME', payload: { firstName: 'first', lastName: 'last' } });
  });
});
