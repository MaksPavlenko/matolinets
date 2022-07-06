import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLanguage } from '../../../../../hooks/useLanguage';

import Logo from '../../../../../svg/logo-big.svg';
import Heart from '../../../../../svg/heart.svg';
import {
  FooterNavMarker,
  FooterNavWrapper,
} from '../FooterNavSystem/FooterNavSystem';

const FooterCharity = () => {
  return (
    <FooterNavWrapper cls={'footer-nav__wrapper--charity'}>
      <FooterNavMarker
        title={useLanguage(
          'Благодійність:',
          'Charity:',
          'Wohltätigkeit:',
          'Благотворительность:'
        )}
      />
      <Link to="/fund/" className="footer-charity__link">
        <span className="footer-charity__logo--wrapper">
          <Logo className="footer-charity__logo" />
        </span>
        <span className="footer-charity__button">
          <span className="footer-charity__button--title">
            {useLanguage('Долучитись', 'Join', 'Verbinden', 'Присоединиться')}
          </span>
          <Heart className="footer-charity__button--icon" />
        </span>
      </Link>
    </FooterNavWrapper>
  );
};

// FooterCharity.propTypes = {};

export default FooterCharity;
