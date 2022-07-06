import React from 'react';
import PropTypes from 'prop-types';

const PriceCategory = ({ children, title }) => {
  return (
    <div className="price-category__wrapper">
      <h2 className="price-category__title">{title}</h2>
      {children}
    </div>
  );
};

PriceCategory.propTypes = {
  title: PropTypes.string,
};

export default PriceCategory;
