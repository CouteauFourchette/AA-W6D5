import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div className="widget-big">
        <h1>Clock</h1>
        <div className="widget-content clock-container">
          <ul className="clock-row">
            <li>Time:</li>
            <li> {this.state.time.toTimeString().slice(0, 8)} </li>
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
