import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

import {
  FooterNav,
  FooterNavItem,
  FooterNavLink,
  FooterNavMarker,
  FooterNavWrapper,
} from '../FooterNavSystem/FooterNavSystem';

const FooterServices = ({ services }) => {
  const langToggle = useLanguage;
  return (
    <FooterNavWrapper cls={'footer-nav__wrapper--services'}>
      <FooterNavMarker
        title={useLanguage(
          'Послуги:',
          'Services:',
          'Dienstleistungen:',
          'Услуги:'
        )}
      />
      <FooterNav>
        {services.map((item, index) => {
          return (
            <FooterNavItem key={index}>
              <FooterNavLink
                link={item.link}
                title={langToggle(
                  item.title_ua,
                  item.title_en,
                  item.title_de,
                  item.title_ru
                )}
              />
            </FooterNavItem>
          );
        })}
      </FooterNav>
    </FooterNavWrapper>
  );
};

FooterServices.propTypes = {
  services: PropTypes.array,
};

export default FooterServices;
