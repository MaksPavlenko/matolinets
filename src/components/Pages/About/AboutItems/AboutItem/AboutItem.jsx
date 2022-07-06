import React from 'react';
import PropTypes from 'prop-types';

const AboutItem = ({ title, description }) => {
  return (
    <article className="about-page__item">
      {title && <h2 className="about-page__item--title">{title}</h2>}
      <div className="about-page__item--descr">
        <p>{description}</p>
      </div>
    </article>
  );
};

AboutItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default AboutItem;
