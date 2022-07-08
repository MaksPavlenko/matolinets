import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import DonateQrcode from './DonateQrcode/DonateQrcode';
import DonateInfo from './DonateInfo/DonateInfo';
import DonatePayment from './DonatePayment/DonatePayment';
import DonateThank from './DonateThank/DonateThank';

const FundDonateItems = ({ donate }) => {
  const data = useStaticQuery(graphql`
    query {
      qrCode: file(relativePath: { eq: "qr.png" }) {
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
    <div className="fund-donate__items">
      <DonateQrcode qr={data.qrCode.childImageSharp} />
      <DonateInfo info={donate.info} />
      <DonatePayment payItems={donate.items} />
      <DonateThank thank={donate.thank} />
    </div>
  );
};

FundDonateItems.propTypes = {
  donate: PropTypes.object,
};

export default FundDonateItems;
