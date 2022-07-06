import React from 'react';
// import PropTypes from 'prop-types';

export const PriceList = ({ children }) => {
  return <ul className="prise-list">{children}</ul>;
};

export const PriceListItem = ({ title, price, accent }) => {
  return (
    <li
      className={
        accent === true
          ? 'prise-list__item prise-list__item--accent'
          : 'prise-list__item'
      }
    >
      <p className="prise-list__item--title">{title}</p>
      <span className="prise-list__item--count">
        <strong>{price}</strong> €
      </span>
    </li>
  );
};

// PriceItemSystem.propTypes = {};
