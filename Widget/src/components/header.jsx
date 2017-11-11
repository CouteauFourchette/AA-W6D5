import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { id, title, onClick, selected } = props;
  return (
    <button tabid={id} onClick={onClick} className={id === selected ? 'selected' : ''}><li>{title}</li></button>
  );
};

Header.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default Header;
