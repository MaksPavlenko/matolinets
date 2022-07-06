import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({ openMenu, open }) => {
  console.log(open);
  return (
    <button className="burger" onClick={openMenu} aria-label="open menu">
      <span className={open ? 'burger-wrapper is-open' : 'burger-wrapper'}>
        <span className="burger-line burger-line__1"></span>
        <span className="burger-line burger-line__2"></span>
      </span>
    </button>
  );
};

Burger.propTypes = {
  openMenu: PropTypes.func,
  open: PropTypes.bool,
};

export default Burger;
