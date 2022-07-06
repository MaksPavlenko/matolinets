import React from 'react';
import PropTypes from 'prop-types';
import AboutItem from './AboutItem/AboutItem';

const AboutItemsList = ({ items }) => {
  return (
    <div className="fund-about__items">
      {items.map((item, index) => {
        return <AboutItem item={item} key={index} />;
      })}
    </div>
  );
};

AboutItemsList.propTypes = {
  items: PropTypes.array,
};

export default AboutItemsList;
