import React from 'react';
import PropTypes from 'prop-types';

const DonatePayment = ({ payItems }) => {
  const [copy, setCopy] = React.useState(null);
  return (
    <div className="donate-item donate-payment__wrapper">
      <h3>Donate Payment</h3>
    </div>
  );
};

DonatePayment.propTypes = {
  payItems: PropTypes.array,
};

export default DonatePayment;
