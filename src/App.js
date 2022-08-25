import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Profile from "./components/Profile";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  toggle = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className='App'>
        <Button variant='primary' onClick={this.toggle}>
          {this.state.show ? "Hide" : "Show"}
        </Button>
        <br />
        {this.state.show && <Profile />}
      </div>
    );
  }
}
