import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { useLanguage } from '../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const CoverDefault = ({ img }) => {
  const image = getImage(img);
  return (
    <div className="cover-default">
      <GatsbyImage
        className="cover-default__image"
        image={image}
        alt={useLanguage(
          'Обкладинка секції',
          'Section cover',
          'Abschnitt tsover',
          'Обложка секции'
        )}
        loading="eager"
      />
    </div>
  );
};

CoverDefault.propTypes = {
  img: PropTypes.object,
};

export default CoverDefault;
