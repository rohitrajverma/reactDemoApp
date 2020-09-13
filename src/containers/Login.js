import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { signInSuccess, signInError } from "../store/actions/user-actions";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = { email: "", password: "" };

  login(event) {
    event.preventDefault();
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDWfrv25m9J6u-D-xl4xZ5TpvlPCtRWy4Q";
    const data = {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true,
    };
    Axios.post(url, data)
      .then((res) => {
        console.log("success", res.data);
        this.props.loginSuccess(res.data);
      })
      .catch((err) => {
        console.log("error", err.response.data.error);
        this.props.loginError(err.response.data.error);
      });
  }
  _renderError() {
    if (this.props.hasError) {
      return (
        <div className="alert alert-danger py-1 px-2  ">
          Invalid login details
        </div>
      );
    }
    return null;
  }
  render() {
    if (this.props.isLoggedIn) {
      let lastPage = "/";
      if (this.props.location.state && this.props.location.state.from) {
        lastPage = this.props.location.state.from;
      }
      return <Redirect to={lastPage} />;
    }

    return (
      <div className="row">
        <form
          onSubmit={(event) => this.login(event)}
          className="col-md-4 offset-md-4 bg-light p-4 mt-5 border rounded shadow"
        >
          <h3 className="text-center">Login</h3>
          <hr />
          {this._renderError()}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              className="form-control"
              onChange={(e) => this.setState({ email: e.currentTarget.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              className="form-control"
              onChange={(e) =>
                this.setState({ password: e.currentTarget.value })
              }
            />
          </div>
          <hr />
          <button type="submit" className="btn btn-success btn-block">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    isLoggedIn: !!store.userSession.user,
    hasError: !!store.userSession.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (user) => dispatch(signInSuccess(user)),
    loginError: (err) => dispatch(signInError(err)),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
