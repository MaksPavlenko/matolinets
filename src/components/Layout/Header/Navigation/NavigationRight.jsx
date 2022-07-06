import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import { NavItem, NavLink, NavList } from './NavigationSystem/NavigationSystem';
import Language from '../../../Ui/Language/Language';

const NavigationRight = ({ menu }) => {
  const langToggle = useLanguage;
  return (
    <nav className="navigation navigation-right">
      <NavList>
        {menu.map((item, index) => {
          if (index > 3) {
            return (
              <NavItem key={index}>
                <NavLink
                  link={item.link}
                  title={langToggle(
                    item.title_ua,
                    item.title_en,
                    item.title_de,
                    item.title_ru
                  )}
                />
              </NavItem>
            );
          } else {
            return null;
          }
        })}
      </NavList>
      <Language />
    </nav>
  );
};

NavigationRight.propTypes = {
  menu: PropTypes.array,
};

export default NavigationRight;
