import React from 'react';
import PropTypes from 'prop-types';

const SectionMarker = ({ marker }) => {
  return (
    <div className="section-marker__wrapper">
      <span className="section-marker">{marker}</span>
    </div>
  );
};

SectionMarker.propTypes = {
  marker: PropTypes.string,
};

export default SectionMarker;
