import React from "react";
import Currency from "./components/Currency";
import AppRouter from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeContext } from "./context";
import Footer from "./components/Footer";
import LoginButtons from "./components/LoginButtons";

class App extends React.Component {
  state = {
    currencyCode: "INR",
    darkMode: false,
  };

  render() {
    // let { currencyCode } = this.state;
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={this.state.darkMode}>
          <Header>
            <ThemeSwitch
              changeTheme={(theme) => this.setState({ darkMode: theme })}
            />
            <Currency
              setCurrency={(code) => this.setState({ currencyCode: code })}
            />
            <LoginButtons />
          </Header>
          <AppRouter />
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
