import React from 'react';
import Clock from './components/clock';
import Tabs from './components/tabs';
import Weather from './components/weather';
import Autocomplete from './components/autocomplete';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = [
      { title: 'tab1', content: 'the content of tab 1' },
      { title: 'tab2', content: 'the content of tab 2' },
      { title: 'tab3', content: 'the content of tab 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est' },
    ];

    this.names = [
      'Chidike Oluwafemi',
      'Ibrahima Itumeleng',
      'Lanre Nkiru',
      'Femi Zuberi',
      'Thabo Dakarai',
      'Kayin Neo',
    ];
  }
  
  render() {
    return (
      <div className="main">
        <Clock />
        <Weather />
        <div className="widget-group">
          <Tabs tabs={this.tabs} />
          <Autocomplete names={this.names} />
        </div>
      </div>
    );
  }
}

export default Root;
