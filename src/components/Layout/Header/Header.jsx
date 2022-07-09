import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import useScroll from '../../../hooks/useScroll';

import { ContentWrapper } from '../../Ui/InterfaceSystem/InterfaceSystem';
import { HeaderLogo, HeaderLogoFund } from './HeaderLogo/HeaderLogo';
import NavigationLeft from './Navigation/NavigationLeft';
import NavigationRight from './Navigation/NavigationRight';
import Burger from './Burger/Burger';
import NavigationMobile from './NavigationMobile/NavigationMobile';

const Header = ({ cls, menu }) => {
  const [open, setOpen] = React.useState(false);
  const [activeHeader, setActiveHeader] = React.useState(false);

  const changePosition = 60;
  let scroll = useScroll();

  if (scroll > changePosition && !activeHeader) {
    setActiveHeader(true);
  }

  if (scroll <= changePosition && activeHeader) {
    setActiveHeader(false);
  }

  function openMenu() {
    setOpen(!open);
  }

  React.useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [open]);

  return (
    <>
      <header
        className={
          cls === 'fund'
            ? `header header-fund ${activeHeader ? 'is-active' : ''}`
            : cls === 'case'
            ? 'header'
            : 'header'
        }
      >
        <ContentWrapper>
          <div className="header-content">
            <MediaQuery minWidth={992}>
              <NavigationLeft menu={menu} />
            </MediaQuery>
            {cls === 'fund' ? (
              <HeaderLogoFund open={open} activeHeader={activeHeader} />
            ) : cls === 'case' ? (
              <HeaderLogoFund
                open={open}
                activeHeader={activeHeader}
                cls={'case'}
              />
            ) : (
              <HeaderLogo open={open} />
            )}

            <MediaQuery minWidth={992}>
              <NavigationRight menu={menu} />
            </MediaQuery>
            <MediaQuery maxWidth={991}>
              <Burger openMenu={openMenu} open={open} />
            </MediaQuery>
          </div>
        </ContentWrapper>
      </header>
      <MediaQuery maxWidth={991}>
        <NavigationMobile menu={menu} open={open} />
      </MediaQuery>
    </>
  );
};

Header.propTypes = {
  menu: PropTypes.array,
};

export default Header;
