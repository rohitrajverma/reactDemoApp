import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context";

function Column(props) {
  const size = 12 / props.colSize;
  const theme = React.useContext(ThemeContext);
  let cls = "col-md-" + size;
  cls += " ";
  cls += theme ? "text-white" : "text-dark";
  return <div className={cls}>{props.children}</div>;
}
export default Column;
Column.propTypes = {
  colSize: PropTypes.number,
};

// <p>Test</p>
// <p>Demo</p>
// <Column>CONTENT</Column>

// 3 col layout : 4 4 4
// 4 col layout : 3 3 3 3
// 2 col layout : 6 6
