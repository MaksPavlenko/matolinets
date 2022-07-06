import React from 'react';
import PropTypes from 'prop-types';
import DocsItem from './DocsItem/DocsItem';

const DocsItemsList = ({ items, handleClick }) => {
  return (
    <div className="fund-docs__list">
      {items.map((item, index) => {
        return (
          <DocsItem
            key={index}
            item={item.childImageSharp}
            index={index}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

DocsItemsList.propTypes = {
  items: PropTypes.array,
};

export default DocsItemsList;
