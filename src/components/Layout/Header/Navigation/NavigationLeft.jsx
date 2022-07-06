import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import { NavItem, NavLink, NavList } from './NavigationSystem/NavigationSystem';

const NavigationLeft = ({ menu }) => {
  const langToggle = useLanguage;
  return (
    <nav className="navigation navigation-left">
      <NavList>
        {menu.map((item, index) => {
          if (index <= 3) {
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
    </nav>
  );
};

NavigationLeft.propTypes = {
  menu: PropTypes.array,
};

export default NavigationLeft;
