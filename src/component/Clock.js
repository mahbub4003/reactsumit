import React, { Component } from "react";

class Clock extends Component {
  state = { date: new Date() };

  componentDidMount() {
    this.ClockTimer = setInterval(() => this.tick(), 100);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.ClockTimer);
  }

  render() {
    return (
      <div>
        <h1>
          <span>{this.state.date.toLocaleTimeString(this.props.locale)}</span>
        </h1>
      </div>
    );
  }
}

export default Clock;
