import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import {
  ContentWrapper,
  SectionDefault,
} from '../../../Ui/InterfaceSystem/InterfaceSystem';
import CoverDefault from '../../../Ui/CoverDefault/CoverDefault';
import FactsItemsList from './FactsItemsList/FactsItemsList';

const FundFacts = ({ facts }) => {
  const data = useStaticQuery(graphql`
    query {
      fundFactCover: file(relativePath: { eq: "utp_cover.jpeg" }) {
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
    <SectionDefault classes={'fund-facts'}>
      <div className="fund-facts__wrapper">
        <CoverDefault img={data.fundFactCover.childImageSharp} />
        <ContentWrapper>
          <FactsItemsList items={facts.items} />
        </ContentWrapper>
      </div>
    </SectionDefault>
  );
};

FundFacts.propTypes = {
  facts: PropTypes.object,
};

export default FundFacts;
