import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = props.tabs;
    this.state = {
      selectedTab: 0,
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(event) {
    this.setState({
      selectedTab: parseInt(event.currentTarget.getAttribute('tabid'), 10),
    });
  }

  render() {
    return (
      <div className="widget-small">
        <h1>Tabs</h1>
        <div className="widget-content tabs-container">
          <ul className="tabs-header">
            {
              this.tabs.map((el, idx) => (
                <Header
                  key={el.title}
                  id={idx}
                  title={el.title}
                  onClick={this.changeTab}
                  selected={this.state.selectedTab}
                />
              ))
            }
          </ul>
          <article className="tabs-content"> { this.tabs[this.state.selectedTab].content } </article>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(Object).isRequired,
};

export default Tabs;
