const { userActions } = require("../actions/user-actions");

const initialState = {
  user: null,
  error: null,
};
// state : initialize, immutable
function userReducer(store = initialState, action) {
  switch (action.type) {
    case userActions.SIGN_IN_ERROR:
      return { error: action.error, user: null };
    case userActions.SIGN_IN_SUCCESS:
      return { error: null, user: action.user };
    case userActions.SIGN_OUT:
      return { ...initialState };
    default:
      return store;
  }
}
export default userReducer;
