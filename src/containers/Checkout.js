import React from "react";

class Checkout extends React.Component {
  state = { name: "", card: "" };
  emailRef = null;

  postData(event) {
    event.preventDefault(); // cancel the form submit behavior
    console.log("form submission logic here", this.state, this.emailRef.value);
  }

  render() {
    return (
      <form onSubmit={(event) => this.postData(event)}>
        <label>Name</label>
        {/* CONTROLLED COMPONENT : virtual dom */}
        <input
          type="text"
          onChange={(event) =>
            this.setState({ name: event.currentTarget.value })
          }
          value={this.state.name}
        />
        {/* UNCONTROLLED COMPONENT : js dom */}
        <label>Email</label>
        <input type="text" ref={(ref) => (this.emailRef = ref)} />

        <label>Credit Card</label>
        <input
          type="text"
          onKeyDown={(event) => {
            if (event.which >= 48 && event.which <= 57) {
              this.setState({ card: event.currentTarget.value });
            } else {
              event.preventDefault();
            }
          }}
          value={this.state.card}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Checkout;
