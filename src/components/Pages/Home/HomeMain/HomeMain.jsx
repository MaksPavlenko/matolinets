import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import CoverDefault from '../../../Ui/CoverDefault/CoverDefault';
import MainInfo from './MainInfo/MainInfo';

const HomeMain = ({ main, whatsApp }) => {
  const data = useStaticQuery(graphql`
    query {
      mainCover: file(relativePath: { eq: "main_cover.jpeg" }) {
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
  return (
    <section className="home-main">
      <CoverDefault img={data.mainCover.childImageSharp} />
      <MainInfo whatsApp={whatsApp} main={main} />
    </section>
  );
};

HomeMain.propTypes = {
  main: PropTypes.object,
  whatsApp: PropTypes.string,
};

export default HomeMain;
