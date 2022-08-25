import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";

export default class Profile extends Component {
  constructor(props) {
    console.log("initialization");
    super(props);
    this.state = {
      count: 0,
      text: "",
      time: new Date(),
    };
  }
  // increment
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // decrement
  decrement = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {
    // console.log("component did mount");
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 2000);
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("render");
    return (
      <div>
        <Button variant='success' onClick={this.increment}>
          +
        </Button>
        <span>{this.state.count}</span>
        <Button variant='danger' onClick={this.decrement}>
          -
        </Button>
        <br />
        <FormControl
          type='text'
          onChange={e => this.setState({ text: e.target.value })}
        />
        <br />
        <p>{this.state.text}</p>
        <br />
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}
