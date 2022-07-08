import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const WorksInnerItem = ({ img, title }) => {
  const image = getImage(img);
  return (
    <div className="works-gallery__item">
      <GatsbyImage
        className="works-gallery__image"
        image={image}
        alt={title}
        loading="eager"
      />
    </div>
  );
};

WorksInnerItem.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
};

export default WorksInnerItem;
