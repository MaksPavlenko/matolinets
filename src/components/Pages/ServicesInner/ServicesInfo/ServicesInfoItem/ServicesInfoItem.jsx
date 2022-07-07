import React from 'react';
import PropTypes from 'prop-types';

const ServicesInfoItem = ({ title, children }) => {
  return (
    <article className="service-info__item">
      {title && (
        <div className="info-item__title--wrapper">
          <h2 className="info-item__title">{title}</h2>
        </div>
      )}
      {children}
    </article>
  );
};

ServicesInfoItem.propTypes = {
  title: PropTypes.string,
};

export default ServicesInfoItem;
