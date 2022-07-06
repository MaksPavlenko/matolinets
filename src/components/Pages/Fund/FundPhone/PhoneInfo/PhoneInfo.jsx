import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

const PhoneInfo = ({ info }) => {
  return (
    <div className="fund-phone__info--wrapper">
      <div className="fund-phone__info">
        <h3 className="h3 fund-phone__info--title">
          {useLanguage(
            info.title_ua,
            info.title_en,
            info.title_de,
            info.title_ru
          )}
        </h3>
        <a
          href={`tel:+30` + info.phone.toString().replace(/[- )(]/g, '')}
          className="fund-phone__info--link"
        >
          {info.phone}
        </a>
        <p className="fund-phone__info--descr">
          {useLanguage(
            info.description_ua,
            info.description_en,
            info.description_de,
            info.description_ru
          )}
        </p>
      </div>
    </div>
  );
};

PhoneInfo.propTypes = {
  info: PropTypes.object,
};

export default PhoneInfo;
