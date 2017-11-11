import React from 'react';

const Header = ({ id, title, onClick, selected}) => {
  return (
    <li tabid={ id } onClick={ onClick } className={selected} >{ title }</li>
  );
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = props.tabs;
    this.state = {
      selectedTab: 0
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(event) {
    this.setState({
      selectedTab: event.currentTarget.getAttribute("tabid"),
    });
  }

  makeSelected() {
    const selectedInt = parseInt(this.state.selectedTab);
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].selected = i === selectedInt ? 'selected' : '';
    }
  }

  render() {

    this.makeSelected();
    return (
      <div className='widget'>
        <h1>Tabs</h1>
        <ul className='tabs-header'>
          {
            this.tabs.map((el, idx) => (
              <Header
                key={el.title}
                id={idx}
                title={el.title}
                onClick={this.changeTab}
                selected={el.selected}
              />
            ))
          }
        </ul>
        <div className='widget-content tabs-container'>

          <article className='tabs-content'> { this.tabs[this.state.selectedTab].content } </article>
        </div>
      </div>
  );
  }
}

export default Tabs;
