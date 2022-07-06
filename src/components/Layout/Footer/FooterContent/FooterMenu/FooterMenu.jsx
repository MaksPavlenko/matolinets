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

const FooterMenu = ({ menu }) => {
  const langToggle = useLanguage;
  return (
    <FooterNavWrapper cls={'footer-nav__wrapper--menu'}>
      <FooterNavMarker
        title={useLanguage(
          'Навігація:',
          'Navigation:',
          'Navigation:',
          'Навигация'
        )}
      />
      <FooterNav>
        {menu.map((item, index) => {
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

FooterMenu.propTypes = {
  menu: PropTypes.array,
};

export default FooterMenu;
