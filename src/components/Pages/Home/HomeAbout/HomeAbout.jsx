import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';
import AboutInfo from './AboutInfo/AboutInfo';

const HomeAbout = ({ about }) => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "team_01.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            breakpoints: [576, 768, 992, 1200, 1920]
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);
  const image = getImage(data.aboutImage.childImageSharp);
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
