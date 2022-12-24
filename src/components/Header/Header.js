import { Component } from "react";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  inc = () => {
    if (this.state.count < 50) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  dec = () => {
    if (this.state.count > -50) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  rand = () => {
    this.setState(() => {
      return {
        count:
          Math.floor(Math.random() * 50) * -1 + Math.floor(Math.random() * 50),
      };
    });
  };

  rest = () => {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  };

  render() {
    let { inc, dec, rand, rest } = this.props;
    let { count } = this.state;

    return (
      <div className="header">
        <button onClick={this.dec}>{dec}</button>
        <div>{count}</div>
        <button onClick={this.inc}>{inc}</button>
        <div className="btn-box">
          <button onClick={this.rand}>{rand}</button>
          <button onClick={this.rest}>{rest}</button>
        </div>
      </div>
    );
  }
}

export default Header;
