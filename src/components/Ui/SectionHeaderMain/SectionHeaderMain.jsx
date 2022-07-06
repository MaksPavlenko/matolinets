import React from 'react';
import PropTypes from 'prop-types';

const SectionHeaderMain = ({ title }) => {
  return (
    <header className="section-header__main">
      <div className="section-header__main--wrapper">
        <h1 className="section-header__main--title">{title}</h1>
      </div>
    </header>
  );
};

SectionHeaderMain.propTypes = {
  title: PropTypes.string,
};

export default SectionHeaderMain;
