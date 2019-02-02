export const validatePassword = (value: string) => {
  let isValid = false;
  let error = '';
  const regex = /[0-9!@#$%]/g;
  if (value.search(regex) > -1) {
    isValid = true;
  } else {
    isValid = false;
    error = 'Password must contain a number or special character.';
  }
  return {
    isValid,
    error
  };
};
