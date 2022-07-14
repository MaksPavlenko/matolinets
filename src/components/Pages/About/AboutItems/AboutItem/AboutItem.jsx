import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown'

const AboutItem = ({ title, description }) => {
  return (
    <article className="about-page__item">
      {title && <h2 className="about-page__item--title">{title}</h2>}
      <Markdown className="about-page__item--descr">
        {description}
      </Markdown>
    </article>
  );
};

AboutItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default AboutItem;
