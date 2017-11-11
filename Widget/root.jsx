import React from 'react';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';
import Weather from './weather.jsx';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = [
      { title: "tab1", content: "the content of tab 1" },
      { title: "tab2", content: "the content of tab 2" },
      { title: "tab3", content: "the content of tab 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est" },
    ];
  }
  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <Tabs tabs={ this.tabs } />
      </div>
    );
  }
}

export default Root;
