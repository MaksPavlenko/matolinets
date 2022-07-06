import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

import CoverDefault from '../../../Ui/CoverDefault/CoverDefault';
import FundMainContent from './FundMainContent/FundMainContent';

const FundMain = ({ main }) => {
  const data = useStaticQuery(graphql`
    query {
      fundCoverDesctop: file(relativePath: { eq: "fnd_cover.jpeg" }) {
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
    <section className="fund-main">
      <CoverDefault img={data.fundCoverDesctop.childImageSharp} />
      <FundMainContent
        title={useLanguage(
          main.title_ua,
          main.title_en,
          main.title_de,
          main.title_ru
        )}
        description={useLanguage(
          main.description_ua,
          main.description_en,
          main.description_de,
          main.description_ru
        )}
      />
    </section>
  );
};

FundMain.propTypes = {
  main: PropTypes.object,
};

export default FundMain;
