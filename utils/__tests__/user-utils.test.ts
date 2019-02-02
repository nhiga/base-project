import { validatePassword } from '../user-utils';

describe('Login', () => {
  describe('validatePassword', () => {
    it('Validates a valid password', () => {
      let pw = 'a1';
      let res = validatePassword(pw);
      expect(res).toEqual({ isValid: true, error: '' });

      pw = 'a$';
      res = validatePassword(pw);
      expect(res).toEqual({ isValid: true, error: '' });
    });

    it('Returns an error for an invalid password', () => {
      const pw = 'a';
      const res = validatePassword(pw);
      expect(res.isValid).toEqual(false);
      expect(res.error.length).toBeGreaterThan(0);
    });
  });
});
