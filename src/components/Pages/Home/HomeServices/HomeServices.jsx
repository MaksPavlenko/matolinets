import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { ContentWrapper } from '../../../Ui/InterfaceSystem/InterfaceSystem';
import CoverDefault from '../../../Ui/CoverDefault/CoverDefault';
import HomeServicesList from './HomeServicesList/HomeServicesList';

const HomeServices = ({ services }) => {
  const data = useStaticQuery(graphql`
    query {
      servicesMain: file(relativePath: { eq: "fnd_cover.jpeg" }) {
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
    <section classes="home-services">
      <div className="home-services__wrapper">
        <CoverDefault img={data.servicesMain.childImageSharp} />
        <ContentWrapper>
          <HomeServicesList services={services} />
        </ContentWrapper>
      </div>
    </section>
  );
};

HomeServices.propTypes = {
  services: PropTypes.object,
};

export default HomeServices;
