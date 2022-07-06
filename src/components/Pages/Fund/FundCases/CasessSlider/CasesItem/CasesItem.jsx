import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const CasesItem = ({ title, description, img, slug }) => {
  const image = getImage(img);
  return (
    <div className="case-item__slide">
      <Link className="case-item__link" to={slug}>
        <div className="case-item__image-wrapper">
          {img && (
            <GatsbyImage
              className="team-item__image"
              image={image}
              alt={title}
              loading="eager"
            />
          )}
        </div>
        <div className="case-item__info--wrapper">
          <h3 className="h3 case-item__info--title">{title}</h3>
          <p className="case-item__info--descr">{description}</p>
        </div>
      </Link>
    </div>
  );
};

CasesItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  img: PropTypes.object,
};

export default CasesItem;
