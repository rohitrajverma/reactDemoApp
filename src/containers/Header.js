import React from "react";
import Axios from "axios";
import Menu from "../components/Menu";
import { ThemeContext } from "../context";

class Header extends React.Component {
  static contextType = ThemeContext;

  state = { menuList: [] };

  componentDidMount() {
    this.getMenuData();
  }

  getMenuData() {
    Axios.get("/menu.json")
      .then((res) => {
        this.setState({ menuList: res.data });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  render() {
    const theme = this.context
      ? "navbar-dark bg-dark"
      : "navbar-light bg-light";
    return (
      <nav className={"navbar navbar-expand-lg " + theme}>
        <a className="navbar-brand" href="#">
          My APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Menu menuList={this.state.menuList} />
          {this.props.children}
        </div>
      </nav>
    );
  }
}
export default Header;
