import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* 
Comment each block of code, according to necessity and following along the workshop 
Note: React does not support multiple DOM renders, only the lowest level ReactDOM.render() is executed
*/

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// const user = {
//   firstName: "Harper",
//   lastName: "Perez",
// };

// const element = <h1>Hello, {formatName(user)}!</h1>;

// ReactDOM.render(element, document.getElementById("root"));

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
          {console.log(this.state.isToggleOn)}
        </button>
        <h1>
          <Greeting isLoggedIn={this.state.isToggleOn} />
        </h1>
      </>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
