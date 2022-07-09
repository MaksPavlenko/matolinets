import React from 'react';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

import Heart from '../../../../../../svg/heart-big.svg';

const DonateThank = ({ thank }) => {
  return (
    <div className="donate-item donate-thank__wrapper">
      {/* <div className="donate-thank__content">
        <Heart className="donate-thank__icon" />
        <span className="donate-thank__title">
          {useLanguage(
            thank.title_ua,
            thank.title_en,
            thank.title_de,
            thank.title_ru
          )}
        </span>
      </div> */}
      <div className="donate-thank__heart">
        <Heart className="donate-thank__icon" />
      </div>
      <div className="donate-thank__title--wrapper">
        <span className="donate-thank__title">
          {useLanguage(
            thank.title_ua,
            thank.title_en,
            thank.title_de,
            thank.title_ru
          )}
        </span>
      </div>
    </div>
  );
};

DonateThank.propTypes = {
  thank: PropTypes.object,
};

export default DonateThank;
