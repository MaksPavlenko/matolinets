import React from 'react';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const DonateInfo = ({ info }) => {
  return (
    <div className=" donate-item donate-info__wrapper">
      <h3 className="donate-info__title">
        {useLanguage(
          info.title_ua,
          info.title_en,
          info.title_de,
          info.title_ru
        )}
      </h3>
      <p className="donate-info__descr">
        {useLanguage(
          info.description_ua,
          info.description_en,
          info.description_de,
          info.description_ru
        )}
      </p>
    </div>
  );
};

DonateInfo.propTypes = {
  info: PropTypes.object,
};

export default DonateInfo;
