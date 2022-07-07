import React from 'react';
import PropTypes from 'prop-types';
import DonateQrcode from './DonateQrcode/DonateQrcode';
import DonateInfo from './DonateInfo/DonateInfo';
import DonatePayment from './DonatePayment/DonatePayment';
import DonateThank from './DonateThank/DonateThank';

const FundDonateItems = ({ donate }) => {
  return (
    <div className="fund-donate__items">
      <DonateQrcode />
      <DonateInfo />
      <DonatePayment />
      <DonateThank />
    </div>
  );
};

FundDonateItems.propTypes = {
  donate: PropTypes.object,
};

export default FundDonateItems;
