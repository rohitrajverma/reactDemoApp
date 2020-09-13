import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateCurrency } from "../store/actions/currency-actions";

class Currency extends React.Component {
  updateCurrencyCode(code) {
    console.log("currency changed", code);
    // send data to parent component
    this.props.setCurrency(code);
  }

  render() {
    const codes = ["INR", "USD", "EUR", "CAD", "GBP"];
    return (
      <select
        onChange={(event) => this.updateCurrencyCode(event.target.value)}
        className="form-control-sm mx-2"
      >
        {codes.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrency: (code) => dispatch(updateCurrency(code)),
  };
};
// connect(what to fetch,what to modify)(component)
export default connect(null, mapDispatchToProps)(Currency);
Currency.propTypes = {
  setCurrency: PropTypes.func.isRequired,
};
