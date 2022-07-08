import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../../hooks/useLanguage';

import PaymentItem from './PaymentItem/PaymentItem';

const DonatePayment = ({ payItems }) => {
  const [copy, setCopy] = React.useState(null);
  const langToggle = useLanguage;
  return (
    <div className="donate-item donate-payment__wrapper">
      <div className="donate-payment__items">
        {payItems.map((item, index) => {
          return (
            <PaymentItem
              key={index}
              marker={langToggle(
                item.marker_ua,
                item.marker_en,
                item.marker_de,
                item.marker_ru
              )}
              value={langToggle(
                item.value_ua,
                item.value_en,
                item.value_de,
                item.value_ru
              )}
              id={`bnk${item.id}`}
              copy={copy}
              setCopy={setCopy}
            />
          );
        })}
      </div>
    </div>
  );
};

DonatePayment.propTypes = {
  payItems: PropTypes.array,
};

export default DonatePayment;
