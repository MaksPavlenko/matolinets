import React from 'react';
import PropTypes from 'prop-types';

import DonateQrcode from './DonateQrcode/DonateQrcode';
import DonateInfo from './DonateInfo/DonateInfo';
import DonatePayment from './DonatePayment/DonatePayment';
import DonateThank from './DonateThank/DonateThank';

const FundDonateItems = ({ donate }) => {

  return (
    <div className="fund-donate__items">
      <DonateQrcode qr={donate.qr_code.localFile} />
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
