import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ title }) => {
  return (
    <header className="section-header">
      <h2 className="h2 section-title">{title}</h2>
    </header>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
};

export default SectionHeader;
