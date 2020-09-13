import React from "react";
import { connect } from "react-redux";
import { signOut } from "../store/actions/user-actions";
import { Link } from "react-router-dom";

function LoginButtons(props) {
  if (!props.isLoggedIn) {
    return (
      <Link to={"/login"} className="btn btn-sm btn-light">
        Login
      </Link>
    );
  }
  return (
    <button className="btn btn-sm btn-light" onClick={() => props.logout()}>
      Logout
    </button>
  );
}
const mapStoreToProps = (store) => {
  return {
    isLoggedIn: !!store.userSession.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(signOut()),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(LoginButtons);
