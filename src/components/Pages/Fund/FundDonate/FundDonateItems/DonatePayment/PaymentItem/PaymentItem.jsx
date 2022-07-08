import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CopyIcon from '../../../../../../../svg/copy.svg';
import CheckIcon from '../../../../../../../svg/check.svg';

const PaymentItem = ({ marker, value, id, copy, setCopy }) => {
  return (
    <div className="payment-item">
      <div className="payment-header">
        <span className="payment-header__marker">{marker}</span>
        <MediaQuery maxWidth={576}>
          <CheckIcon
            className={
              copy === id
                ? 'payment-header__icon is-show'
                : 'payment-header__icon'
            }
          />
        </MediaQuery>
      </div>
      <CopyToClipboard text={value} onCopy={() => setCopy(id)}>
        <div className="payment-body">
          <div className="payment-body__text--wrapper">
            <p className="payment-body__text">{value}</p>
          </div>
          <MediaQuery minWidth={576}>
            <div className="payment-body__button">
              {copy === id ? (
                <CheckIcon className="payment-body__button--icon" />
              ) : (
                <CopyIcon className="payment-body__button--icon" />
              )}
            </div>
          </MediaQuery>
        </div>
      </CopyToClipboard>
    </div>
  );
};

PaymentItem.propTypes = {
  marker: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  setCopy: PropTypes.func,
};

export default PaymentItem;
