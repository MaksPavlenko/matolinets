import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import Language from '../../../Ui/Language/Language';
import {
  NavItemMobile,
  NavLinkMobile,
  NavListMobile,
} from './NavigationMobileSystem/NavigationMobileSystem';

const NavigationMobile = ({ menu, open }) => {
  const langToggle = useLanguage;
  return (
    <nav
      className={open ? 'mobile-menu__wrapper is-open' : 'mobile-menu__wrapper'}
    >
      <div className="mobile-menu__content">
        <NavListMobile>
          {menu.map((item, index) => {
            return (
              <NavItemMobile key={index}>
                <NavLinkMobile
                  link={item.link}
                  title={langToggle(
                    item.title_ua,
                    item.title_en,
                    item.title_de,
                    item.title_ru
                  )}
                />
              </NavItemMobile>
            );
          })}
        </NavListMobile>
        <Language />
      </div>
    </nav>
  );
};

NavigationMobile.propTypes = {
  menu: PropTypes.array,
  open: PropTypes.bool,
};

export default NavigationMobile;
