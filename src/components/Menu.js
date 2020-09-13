import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <ul className="navbar-nav mr-auto">
      {props.menuList.map((value) => (
        <li className="nav-item" key={value.menuLabel}>
          <NavLink
            activeClassName={"active"}
            className="nav-link"
            to={value.menuLink}
            exact={true}
          >
            {value.menuLabel}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
export default Menu;
Menu.propTypes = {
  menuList: PropTypes.array.isRequired,
};
