import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const CaseInnerGallery = ({ gallery }) => {

  return (
    <div className="case-gallery">
      {gallery.map((item, index) => {
        const image = getImage(item.img.localFile);
        return (
          <div className="case-gallery__image--wrapper" key={index}>
            {image && (
              <GatsbyImage
                className="case-gallery__image"
                image={image}
                alt="img"
                loading="eager"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

CaseInnerGallery.propTypes = {
  gallery: PropTypes.array,
};

export default CaseInnerGallery;
