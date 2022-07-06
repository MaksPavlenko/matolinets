import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import {
  ContentWrapper,
  SectionDefault,
} from '../../../Ui/InterfaceSystem/InterfaceSystem';
import CoverDefault from '../../../Ui/CoverDefault/CoverDefault';
import PhoneInfo from './PhoneInfo/PhoneInfo';

const FundPhone = ({ phone }) => {
  const data = useStaticQuery(graphql`
    query {
      fundPhoneCover: file(relativePath: { eq: "ph_line_cover.jpeg" }) {
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
    <SectionDefault classes={'fund-phone'}>
      <div className="fund-phone__wrapper">
        <CoverDefault img={data.fundPhoneCover.childImageSharp} />
        <ContentWrapper>
          <PhoneInfo info={phone} />
        </ContentWrapper>
      </div>
    </SectionDefault>
  );
};

FundPhone.propTypes = {
  phone: PropTypes.object,
};

export default FundPhone;
