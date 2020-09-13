const currencyActions = {
  UPDATE_CURRENCY: "UPDATE_CURRENCY",
};

const updateCurrency = (code) => {
  return {
    type: currencyActions.UPDATE_CURRENCY,
    code,
  };
};

export { updateCurrency, currencyActions };
