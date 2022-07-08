import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';

const WorksItem = ({ link, title, img }) => {
  const image = getImage(img);
  return (
    <Link to={link} className="works-item__link">
      <div className="works-item__cover-wrapper">
        <GatsbyImage
          className="works-item__cover"
          image={image}
          alt={title}
          loading="eager"
        />
      </div>
      <span className="works-item__title">{title}</span>
    </Link>
  );
};

WorksItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.object,
};

export default WorksItem;
