import React from 'react';

class Clock extends React.Component{
  constructor() {
    super();
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.interval = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div className="contain">
        <h1>Clock</h1>
        <div className="contain-content clock-container">
          <ul className="clock-row">
            <li>Time:</li>
            <li>{this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()}</li>
          </ul>
          <ul className="clock-row">
            <li>Date:</li>
            <li>{this.state.time.toDateString()}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Clock;
