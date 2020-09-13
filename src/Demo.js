import React from "react";
import Column from "./components/Column";

class Demo extends React.Component {
  state = { no: 0, a: 1 };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("update hook", nextProps, nextState);
    return this.state.no !== nextState.no;
  }

  render() {
    console.log("render called", this.state);
    const name = "Mike";
    return (
      <div className="row">
        <Column colSize={1}>
          <h1>Demo Component</h1>
          <p>some demo content</p>
          <p>Hello from {name}</p>
          <p>{7 + 4}</p>
          <button onClick={() => this.setState({ no: 1 })}>Change to 1</button>
          <button onClick={() => this.setState({ no: 0 })}>Change to 0</button>
          <button onClick={() => this.setState({ a: 0 })}>Change a to 0</button>
        </Column>
      </div>
    );
  }
}
export default Demo;
