import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';
import AboutInfo from './AboutInfo/AboutInfo';

const HomeAbout = ({ about }) => {

  const image = getImage(about.image.localFile);

  return (
    <section className="home-about">
      <AboutInfo about={about} />
      <div className="home-about__image--wrapper">
        <GatsbyImage
          className="home-about__image"
          image={image}
          alt={useLanguage(
            about.title_ua,
            about.title_en,
            about.title_de,
            about.title_ru
          )}
          loading="eager"
        />
      </div>
    </section>
  );
};

HomeAbout.propTypes = {
  about: PropTypes.object,
};

export default HomeAbout;
