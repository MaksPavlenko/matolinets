import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const DonateQrcode = ({ qr }) => {
  const image = getImage(qr);
  return (
    <div className="donate-item donate-qrcode__wrapper">
      <div className="donate-qrcode__image--wrapper">
        {qr && (
          <GatsbyImage
            className="donate-qrcode__image"
            image={image}
            alt="Qr Code"
            loading="eager"
          />
        )}
      </div>
    </div>
  );
};

DonateQrcode.propTypes = {
  qr: PropTypes.object,
};

export default DonateQrcode;
