import React from 'react';
import PropTypes from 'prop-types';
import FactItem from './FactItem/FactItem';

const FactsItemsList = ({ items }) => {
  return (
    <div className="fund-facts__list">
      {items.map((item, index) => {
        return <FactItem item={item} key={index} />;
      })}
    </div>
  );
};

FactsItemsList.propTypes = {
  items: PropTypes.array,
};

export default FactsItemsList;
