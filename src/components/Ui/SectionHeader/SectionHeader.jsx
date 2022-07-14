import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown'

const SectionHeader = ({ title }) => {
  return (
    <header className="section-header">
      <Markdown className="h2 section-title">{title}</Markdown>
    </header>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
};

export default SectionHeader;
