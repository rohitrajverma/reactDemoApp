const userActions = {
  SIGN_IN: "SIGN_IN",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_ERROR: "SIGN_IN_ERROR",
  SIGN_OUT: "SIGN_OUT",
};

const signInSuccess = (user) => {
  return {
    type: userActions.SIGN_IN_SUCCESS,
    user,
  };
};
const signInError = (error) => {
  return {
    type: userActions.SIGN_IN_ERROR,
    error,
  };
};
const signOut = () => {
  return {
    type: userActions.SIGN_OUT,
  };
};

export { signInError, signInSuccess, signOut, userActions };
