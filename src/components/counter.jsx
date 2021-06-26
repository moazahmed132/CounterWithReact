import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["atag1", "tage2", "tag2"],
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleDecreament}
          className="btn btn-secondary btn-sm"
        >
          Decreament
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncreament}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
      </React.Fragment>
    );
  }

  /*  constructor() {
    super();
    this.handleIncreament = this.handleIncreament.bind(this);
  } */

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }

  handleIncreament = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecreament = () => {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0,
    });
  };
}
export default Counter;
