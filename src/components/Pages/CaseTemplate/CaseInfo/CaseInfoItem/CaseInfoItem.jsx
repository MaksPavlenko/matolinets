import React from 'react';
import PropTypes from 'prop-types';

const CaseInfoItem = ({ title, children }) => {
  return (
    <article className="case-info__item service-info__item">
      {title && <h2 className="case-info__item--title">{title}</h2>}
      {children}
    </article>
  );
};

CaseInfoItem.propTypes = {
  title: PropTypes.string,
};

export default CaseInfoItem;
