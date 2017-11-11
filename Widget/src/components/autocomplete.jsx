import React from 'react';
import PropTypes from 'prop-types';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.names = props.names;
    this.state = {
      inputVal: '',
    };
    this.updateNameList = this.updateNameList.bind(this);
    this.chooseName = this.chooseName.bind(this);
  }

  updateNameList(event) {
    this.setState({
      inputVal: event.target.value,
    });
  }

  chooseName(event) {

    this.setState({
      inputVal: event.target.innerText,
    });
  }

  render() {
    const names = this.names.filter(name => name.toLowerCase().startsWith(this.state.inputVal.toLowerCase()));
    return (
      <div className="widget-small">
        <h1>Autocomplete</h1>
        <div className="widget-content autocomplete-container">
          <input
            type="text"
            onChange={this.updateNameList}
            placeholder="Select Name"
            value={this.state.inputVal}
          />
          <ul>
            {
              names.map(name => (
                <li key={name}><button onClick={this.chooseName}>{name}</button></li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

Autocomplete.propTypes = {
  names: PropTypes.arrayOf(String).isRequired,
};

export default Autocomplete;
