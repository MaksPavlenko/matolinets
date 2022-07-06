import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const DocsItem = ({ item, index, handleClick }) => {
  const image = getImage(item);
  return (
    <article
      className="fund-docs__item"
      role="presentation"
      onClick={(e) => handleClick(e, index)}
    >
      <div className="docs-item__image--wrapper">
        {item && (
          <GatsbyImage
            className="docs-item__image"
            image={image}
            alt="Document"
            loading="eager"
          />
        )}
      </div>
    </article>
  );
};

DocsItem.propTypes = {
  item: PropTypes.object,
};

export default DocsItem;
