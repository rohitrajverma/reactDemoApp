import { currencyActions } from "../actions/currency-actions";
// state : initialized
// function reducer(storeData,action)
function currencyReducer(store = "INR", action) {
  switch (action.type) {
    case currencyActions.UPDATE_CURRENCY:
      return action.code;
    default:
      return store;
  }
}
export default currencyReducer;
